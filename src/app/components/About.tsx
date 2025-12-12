'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              About SirsaTech
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              We are a team of passionate developers, designers, and IT experts dedicated to 
              delivering exceptional digital solutions. With over 10 years of experience, 
              we help businesses transform their ideas into successful digital products.
            </p>
            
            {/* Features List */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-0">
              {[
                '10+ Years Industry Experience',
                'Agile Development Methodology',
                '24/7 Support & Maintenance',
                'Cutting-edge Technology Stack'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center text-base sm:text-lg md:text-lg text-gray-300"
                >
                  <span className="min-w-2 w-2 h-2 sm:min-w-3 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 sm:mr-4"></span>
                  {item}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2 mb-8 md:mb-0"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* First Column */}
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white h-32 sm:h-48 flex items-end transform hover:scale-105 transition-transform duration-300">
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-3xl font-bold mb-1 sm:mb-2">500+</div>
                    <div className="text-blue-100 text-sm sm:text-base">Projects</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white h-24 sm:h-32 flex items-end transform hover:scale-105 transition-transform duration-300">
                  <div>
                    <div className="text-xl sm:text-2xl md:text-2xl font-bold mb-1">50+</div>
                    <div className="text-cyan-100 text-sm sm:text-base">Team Members</div>
                  </div>
                </div>
              </div>
              
              {/* Second Column */}
              <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white h-24 sm:h-32 flex items-end transform hover:scale-105 transition-transform duration-300">
                  <div>
                    <div className="text-xl sm:text-2xl md:text-2xl font-bold mb-1">99%</div>
                    <div className="text-purple-100 text-sm sm:text-base">Satisfaction</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white h-32 sm:h-48 flex items-end transform hover:scale-105 transition-transform duration-300">
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-3xl font-bold mb-1 sm:mb-2">10+</div>
                    <div className="text-green-100 text-sm sm:text-base">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements - Hidden on mobile, visible on tablet+ */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}