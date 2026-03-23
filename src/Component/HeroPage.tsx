import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/Images/bg.png";
import deal from "../assets/Images/deal.jpg";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative mt-32 pt-20 pb-16 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Software Development <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb5e28] to-[#f8a25e]">
                For Tech Founders
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#ccc5b9] max-w-2xl"
            >
              Our expert team works closely with you to build exceptional mobile
              apps and websites that bring your vision to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#eb5e28] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d94f1e] transition-colors"
              >
                <a href="https://wa.me/2348135880678">
                Get Started

                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg shadow-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <a href="https://wa.me/2348135880678">
                Free consultation
                
                </a>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { value: "200+", label: "Projects" },
                { value: "100%", label: "Satisfaction" },
                { value: "1K+", label: "Hours" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#eb5e28]">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right illustration - FIXED */}
          <motion.div
            variants={itemVariants}
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            {/* Main image card */}
            <div className="w-full h-96 rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={deal}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative floating elements (behind the image) */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-[#eb5e28] rounded-full opacity-20 -z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f8a25e] rounded-full opacity-20 -z-10"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;