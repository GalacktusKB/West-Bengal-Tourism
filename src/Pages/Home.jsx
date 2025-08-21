import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css'

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.25, 0.3, 1]
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-50">
      

      {/* Hero Section with Image on Left and Text on Right */}
      <section className="pt-24 pb-16 lg:py-10 min-h-screen flex items-center">
        <div className="max-w-7xl max-h-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Image on Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img 
                src="https://media.tacdn.com/media/attractions-content--1x-1/10/92/6e/6e.jpg" 
                alt="Howrah Bridge" 
                className="relative h-135 w-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Text Content on Right */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="order-1 lg:order-2"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight"
            >
              Discover <span className="bengal bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent xl:text-7xl">Bengal's</span>  <br className="hidden sm:block" />Timeless Soul
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-3xl mb-10 lg:mb-14 leading-relaxed"
            >
              Where culture whispers through colonial streets, colors dance in vibrant festivals, and history lives in every corner. Experience the magic of Bengal's rich heritage and breathtaking landscapes.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
                Explore Destinations
              </button>
              <button className="border-2 border-amber-400 text-gray-800 hover:bg-amber-50 font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
                Watch Video
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-10 text-gray-500"
            >
              <div>
                <div className="text-2xl font-bold text-amber-500">250+</div>
                <div className="text-sm">Destinations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-500">5000+</div>
                <div className="text-sm">Happy Travelers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-500">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why <span className="text-amber-500">Explore Bengal</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the magic that makes Bengal one of India's most captivating destinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rich Culture",
                description: "From Durga Puja's grandeur to Baul music's soulful melodies, immerse in living traditions.",
                icon: "🎭"
              },
              {
                title: "Vibrant Colors",
                description: "Witness festivals that paint cities in hues and crafts that tell stories through color.",
                icon: "🎨"
              },
              {
                title: "Living History",
                description: "Walk through colonial architecture, ancient temples, and the footsteps of legends.",
                icon: "🏛️"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Popular <span className="text-amber-500">Destinations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the most beautiful places that Bengal has to offer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                name: "Sundarbans",
                image: "https://images.unsplash.com/photo-1589568524865-9680d6d35c30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                description: "Largest mangrove forest in the world, home to the Royal Bengal Tiger"
              },
              {
                name: "Darjeeling",
                image: "https://images.unsplash.com/photo-1566882969785-248251b0b948?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                description: "Queen of the Himalayas with breathtaking views and tea gardens"
              },
              {
                name: "Kolkata",
                image: "https://images.unsplash.com/photo-1583508912123-6af95106f3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                description: "Cultural capital of India with colonial architecture and vibrant streets"
              }
            ].map((destination, index) => (
              <motion.div 
                key={destination.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <button className="text-amber-500 font-semibold text-sm hover:text-amber-600 flex items-center">
                    Explore more
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 bg-amber-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Experience Bengal?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of travelers who've discovered Bengal's hidden gems and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Journey
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition-all duration-300">
              Request a Guide
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;