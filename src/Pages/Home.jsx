import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background with Parallax Effect */}
      {/* <motion.div 
        className="fixed inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src="https://media.tacdn.com/media/attractions-content--1x-1/10/92/6e/6e.jpg" 
          alt="Howrah Bridge" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
      </motion.div> */}

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center max-w-6xl w-full"
          >
            <motion.div variants={fadeInVariants} className="mb-6">
              <div className="text-amber-400 text-lg sm:text-xl font-medium tracking-wider">
                WELCOME TO WEST BENGAL
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            >
              <span className="text-amber-400">Discover</span> Bengal's <br className="hidden sm:block" />Timeless Soul
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed"
            >
              Where culture whispers through colonial streets, colors dance in vibrant festivals, and history lives in every corner.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
                Explore Destinations
              </button>
              <button className="border-2 border-amber-400 text-amber-100 hover:bg-amber-900/20 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Watch Video
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center mt-20"
            >
              <div className="text-amber-300 text-sm sm:text-base font-medium mb-1 tracking-widest">
                SCROLL TO EXPLORE
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Why <span className="text-amber-400">Explore Bengal</span>?
              </h2>
              <p className="text-lg text-amber-100 max-w-3xl mx-auto">
                Discover the magic that makes Bengal one of India's most captivating destinations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-amber-100">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-3xl p-10 text-center border border-amber-400/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Experience Bengal?
            </h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who've discovered Bengal's hidden gems and unforgettable experiences.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
              Start Your Journey
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;