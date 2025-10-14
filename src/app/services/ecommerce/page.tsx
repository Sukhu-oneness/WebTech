'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { useState, useEffect } from 'react';

export default function EcommerceSolutionsPage() {
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
      title: 'Custom E-commerce Development',
      description: 'Tailored online stores built from scratch to match your brand identity and business requirements.',
      icon: '🛍️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Payment Gateway Integration',
      description: 'Secure payment processing with multiple payment options including credit cards, digital wallets, and UPI.',
      icon: '💳',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Inventory Management',
      description: 'Advanced inventory tracking, stock alerts, and automated reordering systems.',
      icon: '📦',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Shopping Cart & Checkout',
      description: 'Seamless shopping experience with abandoned cart recovery and one-click checkout.',
      icon: '🛒',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Mobile Commerce',
      description: 'Mobile-optimized stores and dedicated shopping apps for iOS and Android.',
      icon: '📱',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'SEO & Marketing',
      description: 'Search engine optimization and integrated marketing tools to drive traffic and sales.',
      icon: '📈',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting to track sales, customers, and business performance.',
      icon: '📊',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Multi-vendor Marketplace',
      description: 'Platforms that support multiple sellers with individual storefronts and management.',
      icon: '🏪',
      color: 'from-gray-500 to-blue-500'
    }
  ];

  const platforms = [
    { name: 'Shopify', category: 'Platform', color: 'bg-green-100 text-green-800' },
    { name: 'WooCommerce', category: 'Platform', color: 'bg-blue-100 text-blue-800' },
    { name: 'Magento', category: 'Platform', color: 'bg-orange-100 text-orange-800' },
    { name: 'BigCommerce', category: 'Platform', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'React', category: 'Frontend', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'Next.js', category: 'Frontend', color: 'bg-gray-100 text-gray-800' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'PHP', category: 'Backend', color: 'bg-purple-100 text-purple-800' },
    { name: 'Stripe', category: 'Payment', color: 'bg-blue-100 text-blue-800' },
    { name: 'PayPal', category: 'Payment', color: 'bg-blue-100 text-blue-800' },
    { name: 'Razorpay', category: 'Payment', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-800' },
    { name: 'MySQL', category: 'Database', color: 'bg-orange-100 text-orange-800' },
    { name: 'AWS', category: 'Cloud', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Firebase', category: 'Backend', color: 'bg-orange-100 text-orange-800' },
    { name: 'Google Analytics', category: 'Analytics', color: 'bg-yellow-100 text-yellow-800' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business goals, target audience, and competitors to create a winning e-commerce strategy.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Our designers create intuitive shopping experiences that convert visitors into customers.',
      color: 'from-pink-500 to-red-600'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our developers build robust e-commerce platforms with all essential features and integrations.',
      color: 'from-green-500 to-teal-600'
    },
    {
      step: '04',
      title: 'Payment Integration',
      description: 'Secure payment gateway integration with multiple payment options and fraud protection.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      step: '05',
      title: 'Testing & Launch',
      description: 'Comprehensive testing across devices and scenarios followed by smooth platform launch.',
      color: 'from-orange-500 to-yellow-600'
    },
    {
      step: '06',
      title: 'Support & Optimization',
      description: 'Ongoing maintenance, performance optimization, and feature updates.',
      color: 'from-teal-500 to-blue-600'
    }
  ];

  const portfolioProjects = [
    {
      title: 'Fashion E-commerce Store',
      description: 'Complete fashion retail platform with size guides, wishlists, and personalized recommendations.',
      image: '👗',
      category: 'Fashion Retail',
      technologies: ['Shopify', 'React', 'Stripe']
    },
    {
      title: 'Electronics Marketplace',
      description: 'Multi-vendor electronics marketplace with advanced filtering and comparison tools.',
      image: '📱',
      category: 'Electronics',
      technologies: ['Magento', 'PHP', 'PayPal']
    },
    {
      title: 'Grocery Delivery App',
      description: 'Full-stack grocery platform with real-time inventory and delivery tracking.',
      image: '🛒',
      category: 'Grocery',
      technologies: ['Next.js', 'Node.js', 'Razorpay']
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'Urban Fashion Co',
      comment: 'Our online store saw a 200% increase in sales within 3 months of launching the new platform. The user experience is exceptional!',
      rating: 5
    },
    {
      name: 'Rahul Mehta',
      company: 'TechGadgets India',
      comment: 'The multi-vendor marketplace they built handles thousands of transactions daily. Rock-solid performance and excellent support.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      company: 'FreshMart Groceries',
      comment: 'From inventory management to delivery tracking, every aspect was perfectly executed. Customer satisfaction has never been higher.',
      rating: 5
    }
  ];

  const ecommerceTypes = [
    {
      type: 'B2C E-commerce',
      description: 'Business-to-consumer platforms for direct customer sales',
      icon: '🏪',
      benefits: ['Direct Customer Reach', 'Brand Control', 'Higher Margins', 'Customer Data']
    },
    {
      type: 'B2B E-commerce',
      description: 'Business-to-business platforms with bulk ordering and quotes',
      icon: '🏢',
      benefits: ['Bulk Orders', 'Price Negotiation', 'Account Management', 'Volume Discounts']
    },
    {
      type: 'Multi-vendor Marketplace',
      description: 'Platforms connecting multiple sellers with buyers',
      icon: '🌐',
      benefits: ['Wide Product Range', 'Commission Model', 'Scalable', 'Diverse Inventory']
    }
  ];

  const keyFeatures = [
    {
      icon: '🔒',
      title: 'Secure Payments',
      description: 'PCI DSS compliant payment processing with multiple secure options'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Perfect shopping experience on all devices and screen sizes'
    },
    {
      icon: '🚚',
      title: 'Shipping Integration',
      description: 'Integration with major shipping carriers and real-time tracking'
    },
    {
      icon: '💬',
      title: 'Customer Support',
      description: 'Integrated chat, email, and phone support systems'
    },
    {
      icon: '🌍',
      title: 'Multi-language',
      description: 'Support for multiple languages and currencies'
    },
    {
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Optimized for speed and quick loading times'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 relative overflow-hidden">
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
                Complete <span className="text-yellow-300">E-commerce</span> Solutions
              </h1>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed text-purple-100">
                We build powerful, scalable online stores that drive sales and grow your business. 
                From startup boutiques to enterprise marketplaces, we create e-commerce experiences that convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg"
                >
                  Get Free Store Audit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 shadow-lg"
                >
                  View Live Demos
                </motion.button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { number: '300+', text: 'Stores Built' },
                  { number: '₹50Cr+', text: 'Revenue Generated' },
                  { number: '95%', text: 'Client Satisfaction' },
                  { number: '24/7', text: 'Support' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.text}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-yellow-300">{stat.number}</div>
                    <div className="text-purple-100 text-xs sm:text-sm">{stat.text}</div>
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
                  <div className="text-5xl sm:text-6xl mb-4">🛒</div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Choose Our E-commerce Solutions?</h3>
                  <div className="space-y-3 sm:space-y-4 text-left">
                    {[
                      'Mobile-First Responsive Design',
                      'SEO-Optimized Structure',
                      'Secure Payment Gateways',
                      'Inventory Management',
                      'Analytics & Reporting',
                      '24/7 Technical Support'
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

      {/* E-commerce Types Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              E-commerce Solutions For Every Business
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're a startup or enterprise, we have the perfect e-commerce solution for your business model
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ecommerceTypes.map((type, index) => (
              <motion.div
                key={type.type}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 text-center"
              >
                <div className="text-4xl sm:text-5xl mb-4">{type.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{type.type}</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">{type.description}</p>
                <div className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-purple-600">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span className="text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Essential E-commerce Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every online store we build comes packed with features that drive sales and enhance user experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our E-commerce Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end e-commerce development services from design to deployment and marketing
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our E-commerce Development Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful e-commerce platform launches
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

      {/* Platforms & Technologies Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Platforms & Technologies
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We work with all major e-commerce platforms and cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${platform.color} rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                <div className="font-bold text-xs sm:text-sm mb-1">{platform.name}</div>
                <div className="text-xs opacity-75">{platform.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Successful E-commerce Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of our successfully launched e-commerce platforms across different industries
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
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl sm:text-6xl text-center mb-4">{project.image}</div>
                <div className="text-center">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs sm:text-sm px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white text-gray-700 text-xs px-2 py-1 rounded">
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
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
              See what our clients have to say about their e-commerce transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200"
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
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-purple-100">
              Let's transform your business with a powerful e-commerce platform. Get a free consultation and project estimate today. 
              We'll help you create an online store that drives sales and grows your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Start Your E-commerce Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Get Free Store Audit
              </motion.button>
            </div>
            <div className="text-purple-100 text-sm sm:text-base">
              <p className="mb-2">📞 Call us at: +1 (555) 123-4567</p>
              <p>✉️ Email: ecommerce@example.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}