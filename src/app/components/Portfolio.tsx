'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/api/placeholder/600/400',
    description: 'Full-stack e-commerce solution with React and Node.js'
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    image: '/api/placeholder/600/400',
    description: 'Secure mobile banking application for iOS and Android'
  },
  {
    title: 'Cloud Migration',
    category: 'Cloud Services',
    image: '/api/placeholder/600/400',
    description: 'Enterprise cloud migration to AWS infrastructure'
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'AI/ML',
    image: '/api/placeholder/600/400',
    description: 'Real-time analytics with machine learning insights'
  },
  {
    title: 'Healthcare Portal',
    category: 'Web Development',
    image: '/api/placeholder/600/400',
    description: 'Patient management system for healthcare providers'
  },
  {
    title: 'IoT Smart Home',
    category: 'IoT Solutions',
    image: '/api/placeholder/600/400',
    description: 'Connected home automation system'
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'Mobile Development', 'Cloud Services', 'AI/ML', 'IoT Solutions'];

  return (
    <section id="portfolio" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their goals
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600 hover:border-purple-500 transition-all duration-300 cursor-pointer group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center group">
                  View Case Study
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}