import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const validateForm = (data) => {
  const errors = {};

  if (!data.name?.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email?.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!data.subject?.trim()) {
    errors.subject = "Subject is required";
  }

  if (!data.message?.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};

const InputField = ({ label, name, type = "text", value, onChange, error, textarea = false }) => {
  const InputComponent = textarea ? "textarea" : "input";
  
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <InputComponent
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
            textarea ? "min-h-[120px]" : "h-10"
          } ${error ? "border-red-500" : ""}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </div>
      {error && (
        <motion.p
          id={`${name}-error`}
          className="text-sm text-red-600"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle" });
  const [testingResults, setTestingResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ state: "loading" });
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 700));
      
      setStatus({ 
        state: "success", 
        message: "Message sent! We'll get back to you soon." 
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      
      setTimeout(() => setStatus({ state: "idle" }), 5000);
    } catch (error) {
      setStatus({ 
        state: "error", 
        message: "Failed to send message. Please try again." 
      });
    }
  };

  const runSelfTests = () => {
    const tests = [
      {
        name: "all empty",
        data: { name: "", email: "", subject: "", message: "" },
        expect: ["name", "email", "subject", "message"],
      },
      {
        name: "invalid email",
        data: { name: "John", email: "bad-email", subject: "Hello", message: "Valid message" },
        expect: ["email"],
      },
      {
        name: "short message",
        data: { name: "Jane", email: "jane@example.com", subject: "Hi", message: "short" },
        expect: ["message"],
      },
      {
        name: "valid",
        data: { name: "Dev", email: "dev@example.com", subject: "Hello", message: "Valid message" },
        expect: [],
      },
    ];

    const results = tests.map((t) => {
      const errs = validateForm(t.data);
      const got = Object.keys(errs).sort();
      const expected = t.expect.sort();
      const pass = JSON.stringify(got) === JSON.stringify(expected);
      return { test: t.name, pass, got, expected };
    });

    setTestingResults(results);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Contact Our Team</h1>
        <p className="text-gray-600">We'll get back to you within 24 hours</p>
      </div>

      <AnimatePresence>
        {status.state === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg"
          >
            {status.message}
          </motion.div>
        )}
        {status.state === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg"
          >
            {status.message}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <InputField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
        />

        <InputField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          textarea
        />

        <div className="pt-2">
          <button
            type="submit"
            disabled={status.state === "loading"}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.state === "loading" ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
        <button
          onClick={runSelfTests}
          className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
        >
          Run self-tests
        </button>
        
        <div className="text-xs text-gray-500">
          Open browser console for detailed results
        </div>
      </div>

      {testingResults && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 space-y-2"
        >
          <h3 className="text-sm font-medium text-gray-700">Test Results</h3>
          <ul className="space-y-1">
            {testingResults.map((result, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${result.pass ? "bg-green-500" : "bg-red-500"}`}></span>
                {result.test}: {result.pass ? "PASS" : `FAIL (expected ${result.expected.join(", ") || "none"})`}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}