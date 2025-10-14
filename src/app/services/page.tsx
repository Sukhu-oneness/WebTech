'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'CMS Integration', 'E-commerce Solutions', 'API Development'],
      href: '/services/web-development',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['iOS & Android Apps', 'React Native', 'Flutter', 'App Store Deployment'],
      href: '/services/mobile-development',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🛒',
      title: 'E-Commerce Solutions',
      description: 'Complete online store development with secure payment integration',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Tracking'],
      href: '/services/ecommerce',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business',
      features: ['SEO Optimization', 'Social Media Marketing', 'PPC Campaigns', 'Content Marketing'],
      href: '/services/digital-marketing',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup, migration, and management services',
      features: ['AWS/Azure Setup', 'Cloud Migration', 'Server Management', 'DevOps'],
      href: '/services/cloud',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '🔍',
      title: 'SEO Services',
      description: 'Search engine optimization to improve your website visibility',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Rank Tracking'],
      href: '/services/seo',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions tailored to drive your business growth and digital transformation
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From web development to digital marketing, we provide end-to-end solutions for your business
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
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    Learn More
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-300"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                Schedule Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}