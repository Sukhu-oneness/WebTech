'use client';

import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Loading from '../../../components/Loading';
import { useState, useEffect } from 'react';

export default function MobileAppDevelopmentPage() {
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

  const features = [
    {
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and SwiftUI for seamless performance on Apple devices.',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Android App Development',
      description: 'Native Android apps using Kotlin and Jetpack Compose for optimal performance on Google ecosystem.',
      icon: '🤖',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cross-Platform Apps',
      description: 'React Native and Flutter apps that work seamlessly across both iOS and Android platforms.',
      icon: '🔄',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive and engaging mobile interfaces designed for optimal user experience and conversion.',
      icon: '🎨',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'App Store Optimization',
      description: 'Strategic optimization to improve your app visibility and rankings in app stores.',
      icon: '📈',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Backend Integration',
      description: 'Seamless integration with APIs, databases, and cloud services for full functionality.',
      icon: '⚙️',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'App Maintenance',
      description: 'Ongoing support, updates, and feature enhancements to keep your app current.',
      icon: '🔧',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Push Notifications',
      description: 'Engage users with targeted push notifications and in-app messaging systems.',
      icon: '🔔',
      color: 'from-gray-500 to-blue-500'
    }
  ];

  const technologies = [
    { name: 'Swift', category: 'iOS', color: 'bg-orange-100 text-orange-800' },
    { name: 'SwiftUI', category: 'iOS', color: 'bg-blue-100 text-blue-800' },
    { name: 'Kotlin', category: 'Android', color: 'bg-purple-100 text-purple-800' },
    { name: 'Jetpack', category: 'Android', color: 'bg-green-100 text-green-800' },
    { name: 'React Native', category: 'Cross-Platform', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'Flutter', category: 'Cross-Platform', color: 'bg-blue-100 text-blue-800' },
    { name: 'Firebase', category: 'Backend', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-800' },
    { name: 'AWS Amplify', category: 'Cloud', color: 'bg-orange-100 text-orange-800' },
    { name: 'GraphQL', category: 'API', color: 'bg-pink-100 text-pink-800' },
    { name: 'TypeScript', category: 'Language', color: 'bg-blue-100 text-blue-800' },
    { name: 'Redux', category: 'State Management', color: 'bg-purple-100 text-purple-800' },
    { name: 'Fastlane', category: 'DevOps', color: 'bg-gray-100 text-gray-800' },
    { name: 'App Store Connect', category: 'Deployment', color: 'bg-blue-100 text-blue-800' },
    { name: 'Google Play Console', category: 'Deployment', color: 'bg-green-100 text-green-800' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'We define your app goals, target audience, and create a comprehensive development roadmap.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Our designers create wireframes and prototypes for an intuitive and engaging user experience.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      step: '03',
      title: 'App Development',
      description: 'Our developers build your app using the latest technologies and best coding practices.',
      color: 'from-green-500 to-teal-600'
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Rigorous testing across multiple devices and scenarios to ensure flawless performance.',
      color: 'from-orange-500 to-red-600'
    },
    {
      step: '05',
      title: 'App Store Deployment',
      description: 'We handle the entire submission process to Apple App Store and Google Play Store.',
      color: 'from-teal-500 to-blue-600'
    },
    {
      step: '06',
      title: 'Post-Launch Support',
      description: 'Ongoing maintenance, updates, and feature enhancements based on user feedback.',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const portfolioProjects = [
    {
      title: 'E-commerce Mobile App',
      description: 'Feature-rich shopping app with payment integration and personalized recommendations.',
      image: '🛒',
      category: 'E-commerce',
      technologies: ['React Native', 'Firebase', 'Stripe']
    },
    {
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness app with workout plans, progress tracking, and social features.',
      image: '💪',
      category: 'Health & Fitness',
      technologies: ['Flutter', 'Node.js', 'MongoDB']
    },
    {
      title: 'Food Delivery App',
      description: 'Seamless food ordering experience with real-time tracking and multiple payment options.',
      image: '🍕',
      category: 'Food Delivery',
      technologies: ['Kotlin', 'Swift', 'Firebase']
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'FitLife Studios',
      comment: 'The fitness app they developed increased our user engagement by 300% and received 4.9-star ratings on both stores!',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'QuickBite Delivery',
      comment: 'Their team delivered a robust food delivery app that handles thousands of orders daily without any issues.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'TechInnovate',
      comment: 'Professional approach, timely delivery, and excellent post-launch support. Highly recommended for mobile projects.',
      rating: 5
    }
  ];

  const appTypes = [
    {
      type: 'Native iOS',
      description: 'High-performance apps built specifically for Apple ecosystem',
      icon: '🍎',
      benefits: ['Best Performance', 'Apple Ecosystem', 'Security', 'User Experience']
    },
    {
      type: 'Native Android',
      description: 'Optimized apps for Android devices with Material Design',
      icon: '🤖',
      benefits: ['Customization', 'Google Integration', 'Flexibility', 'Market Reach']
    },
    {
      type: 'Cross-Platform',
      description: 'Single codebase for both iOS and Android platforms',
      icon: '🌐',
      benefits: ['Cost Effective', 'Faster Development', 'Consistent UI', 'Easy Maintenance']
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Expert <span className="text-yellow-300">Mobile App</span> Development
              </h1>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed text-green-100">
                We create stunning, high-performance mobile applications that drive user engagement and business growth. 
                From innovative startups to established enterprises, we deliver apps that users love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg"
                >
                  Get Free App Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 shadow-lg"
                >
                  View App Portfolio
                </motion.button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { number: '250+', text: 'Apps Developed' },
                  { number: '5M+', text: 'Downloads' },
                  { number: '4.8★', text: 'Average Rating' },
                  { number: '98%', text: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.text}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-yellow-300">{stat.number}</div>
                    <div className="text-green-100 text-xs sm:text-sm">{stat.text}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl mb-4">📱</div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Choose Our App Development?</h3>
                  <div className="space-y-3 sm:space-y-4 text-left">
                    {[
                      'Native & Cross-Platform Development',
                      'App Store Optimization',
                      'UI/UX Focused Design',
                      'Agile Development Process',
                      'Post-Launch Support',
                      'Security & Performance'
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-white bg-white/5 p-3 rounded-lg"
                      >
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full mr-3 sm:mr-4 flex-shrink-0"></span>
                        <span className="text-sm sm:text-lg">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Choose Your App Solution
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer different types of mobile app development to match your specific needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {appTypes.map((appType, index) => (
              <motion.div
                key={appType.type}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 text-center"
              >
                <div className="text-4xl sm:text-5xl mb-4">{appType.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{appType.type}</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">{appType.description}</p>
                <div className="space-y-2">
                  {appType.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Mobile App Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end mobile app development solutions from concept to deployment and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${feature.color} rounded-2xl shadow-xl p-6 sm:p-8 text-white relative overflow-hidden group cursor-pointer h-full`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed text-xs sm:text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our App Development Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and successful app launches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full border border-gray-100"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${step.color}`}></div>
                <div className="ml-4">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-300 mb-2">{step.step}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Technologies We Master
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We work with cutting-edge technologies to build robust, scalable, and high-performance mobile applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${tech.color} rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                <div className="font-bold text-xs sm:text-sm mb-1">{tech.name}</div>
                <div className="text-xs opacity-75">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our App Portfolio
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of our successfully launched mobile applications across different industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl sm:text-6xl text-center mb-4">{project.image}</div>
                <div className="text-center">
                  <span className="inline-block bg-green-100 text-green-800 text-xs sm:text-sm px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Client Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              See what our clients have to say about their app development journey with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 text-sm sm:text-base">"{testimonial.comment}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Build Your App?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-green-100">
              Let's transform your app idea into a successful reality. Get a free consultation and project estimate today. 
              We'll help you create a mobile app that users love and that drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Start Your App Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Get Free App Consultation
              </motion.button>
            </div>
            <div className="text-green-100 text-sm sm:text-base">
              <p className="mb-2">📞 Call us at: +1 (555) 123-4567</p>
              <p>✉️ Email: apps@example.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}