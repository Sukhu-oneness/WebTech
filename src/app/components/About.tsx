'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">About TechWeb</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a team of passionate developers, designers, and IT experts dedicated to 
              delivering exceptional digital solutions. With over 10 years of experience, 
              we help businesses transform their ideas into successful digital products.
            </p>
            
            <div className="space-y-4">
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
                  className="flex items-center text-lg text-gray-300"
                >
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></span>
                  {item}
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white h-48 flex items-end transform hover:scale-105 transition-transform duration-300">
                  <div>
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Projects</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white h-32 flex items-end transform hover:scale-105 transition-transform duration-300">
                  <div>
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <div className="text-cyan-100">Team Members</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white h-32 flex items-end transform hover:scale-105 transition-transform duration-300">
                  <div>
                    <div className="text-2xl font-bold mb-1">99%</div>
                    <div className="text-purple-100">Satisfaction</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl p-6 text-white h-48 flex items-end transform hover:scale-105 transition-transform duration-300">
                  <div>
                    <div className="text-3xl font-bold mb-2">10+</div>
                    <div className="text-green-100">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}