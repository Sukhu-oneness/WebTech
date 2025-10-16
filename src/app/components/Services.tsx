'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices for optimal performance and user experience.',
    features: ['React/Next.js', 'Node.js', 'TypeScript', 'Responsive Design'],
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.',
    features: ['React Native', 'Flutter', 'iOS/Android', 'PWA'],
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.1
  },
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with secure payment gateways and seamless shopping experiences.',
    features: ['Online Store', 'Payment Integration', 'Inventory Management', 'Order Tracking'],
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.2
  },
  {
    icon: '🚀',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and drive business growth.',
    features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Growth Analytics'],
    gradient: 'from-orange-500 to-red-500',
    delay: 0.3
  },
  {
    icon: '☁️',
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for your business growth and digital transformation needs.',
    features: ['AWS/Azure', 'DevOps', 'Microservices', 'CI/CD'],
    gradient: 'from-indigo-500 to-blue-500',
    delay: 0.4
  },
  {
    icon: '🔍',
    title: 'SEO Services',
    description: 'Advanced SEO strategies to improve your search engine rankings and drive organic traffic.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Performance Analytics'],
    gradient: 'from-yellow-500 to-amber-500',
    delay: 0.5
  }
];

export default function ModernServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'development', 'marketing', 'business'];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">What We Offer</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to transform your business and drive exceptional growth
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {category === 'all' ? 'All Services' : category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: 0.6, 
                delay: service.delay,
                type: "spring",
                stiffness: 100
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[1px] rounded-3xl bg-slate-900"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-4xl p-4 rounded-2xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0, x: hoveredCard === index ? 0 : -10 }}
                    className="text-2xl"
                  >
                    →
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: service.delay + featureIndex * 0.1 }}
                      className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 transform group-hover:scale-150 transition-transform duration-300`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  Learn More
                </motion.button>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}