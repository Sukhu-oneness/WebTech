'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    features: ['React/Next.js', 'Node.js', 'TypeScript', 'Responsive Design']
  },
  {
    icon: '☁️',
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for your business growth and digital transformation.',
    features: ['AWS/Azure', 'DevOps', 'Microservices', 'CI/CD']
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['React Native', 'Flutter', 'iOS/Android', 'PWA']
  },
  {
    icon: '🔒',
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    features: ['Security Audit', 'Penetration Testing', 'SSL Certificates', 'Data Protection']
  },
  {
    icon: '🤖',
    title: 'AI & ML',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    features: ['Machine Learning', 'Computer Vision', 'NLP', 'Predictive Analytics']
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics.',
    features: ['Big Data', 'Business Intelligence', 'Dashboards', 'Real-time Analytics']
  }
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-purple-500 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={feature}
                    className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    style={{ transitionDelay: `${featureIndex * 100}ms` }}
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}