'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { useState, useEffect } from 'react';

export default function SEOServicesPage() {
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
      title: 'Technical SEO Audit',
      description: 'Comprehensive website analysis to identify and fix technical issues affecting your search rankings.',
      icon: '🔍',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Keyword Research & Strategy',
      description: 'In-depth keyword analysis to target the right audience and drive qualified traffic to your website.',
      icon: '🎯',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'On-Page SEO Optimization',
      description: 'Optimizing page content, meta tags, headings, and internal linking structure for better visibility.',
      icon: '📄',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Content Strategy & Creation',
      description: 'Creating high-quality, SEO-optimized content that ranks well and engages your target audience.',
      icon: '✍️',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Link Building & Outreach',
      description: 'Building high-quality backlinks from authoritative websites to improve domain authority.',
      icon: '🔗',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Local SEO Optimization',
      description: 'Optimizing your online presence for local search results and Google My Business listings.',
      icon: '📍',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'E-commerce SEO',
      description: 'Specialized SEO strategies for online stores to improve product visibility and drive sales.',
      icon: '🛒',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'SEO Analytics & Reporting',
      description: 'Comprehensive tracking and reporting of key metrics to measure ROI and campaign success.',
      icon: '📊',
      color: 'from-gray-500 to-blue-500'
    }
  ];

  const toolsPlatforms = [
    { name: 'Google Analytics', category: 'Analytics', color: 'bg-orange-100 text-orange-800' },
    { name: 'Google Search Console', category: 'Monitoring', color: 'bg-blue-100 text-blue-800' },
    { name: 'SEMrush', category: 'Research', color: 'bg-red-100 text-red-800' },
    { name: 'Ahrefs', category: 'Backlink Analysis', color: 'bg-purple-100 text-purple-800' },
    { name: 'Moz Pro', category: 'SEO Tools', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Screaming Frog', category: 'Technical SEO', color: 'bg-green-100 text-green-800' },
    { name: 'Google PageSpeed', category: 'Performance', color: 'bg-blue-100 text-blue-800' },
    { name: 'Google My Business', category: 'Local SEO', color: 'bg-green-100 text-green-800' },
    { name: 'Google Tag Manager', category: 'Tracking', color: 'bg-blue-100 text-blue-800' },
    { name: 'Google Data Studio', category: 'Reporting', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Majestic', category: 'Backlink Analysis', color: 'bg-purple-100 text-purple-800' },
    { name: 'BuzzStream', category: 'Outreach', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'AnswerThePublic', category: 'Content Research', color: 'bg-red-100 text-red-800' },
    { name: 'Surfer SEO', category: 'Content Optimization', color: 'bg-green-100 text-green-800' },
    { name: 'Yoast SEO', category: 'WordPress SEO', color: 'bg-blue-100 text-blue-800' },
    { name: 'RankMath', category: 'WordPress SEO', color: 'bg-orange-100 text-orange-800' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive analysis of your current SEO performance, technical issues, and competitor landscape.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Creating a customized SEO strategy with clear goals, target keywords, and implementation roadmap.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      step: '03',
      title: 'On-Page Optimization',
      description: 'Optimizing website structure, content, meta tags, and internal linking for better search visibility.',
      color: 'from-green-500 to-teal-600'
    },
    {
      step: '04',
      title: 'Content Creation',
      description: 'Developing high-quality, SEO-optimized content that addresses user intent and ranks well.',
      color: 'from-orange-500 to-red-600'
    },
    {
      step: '05',
      title: 'Link Building',
      description: 'Building authoritative backlinks through outreach, content marketing, and digital PR.',
      color: 'from-teal-500 to-blue-600'
    },
    {
      step: '06',
      title: 'Monitoring & Reporting',
      description: 'Continuous monitoring, performance tracking, and detailed monthly progress reports.',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const portfolioProjects = [
    {
      title: 'E-commerce SEO Success',
      description: 'Increased organic traffic by 250% and sales by 180% for an online fashion retailer.',
      image: '📈',
      category: 'E-commerce',
      metrics: ['250% Traffic Growth', '180% Sales Increase', 'Page 1 Rankings']
    },
    {
      title: 'Local Business Dominance',
      description: 'Achieved #1 rankings for 15+ key phrases for a local service business in competitive market.',
      image: '🏆',
      category: 'Local SEO',
      metrics: ['15+ Page 1 Rankings', '300% Lead Increase', '95% CTR Improvement']
    },
    {
      title: 'Content Strategy Victory',
      description: 'Built topical authority through comprehensive content strategy, dominating industry keywords.',
      image: '👑',
      category: 'Content SEO',
      metrics: ['500% Traffic Growth', 'Authority Building', 'Industry Dominance']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      comment: 'Our organic traffic increased by 300% in 6 months. The SEO strategy they implemented transformed our business completely!',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      company: 'Local Service Pro',
      comment: 'Went from page 3 to #1 spot for our main keywords. The leads we get now are high-quality and ready to convert.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      company: 'E-commerce Empire',
      comment: 'The technical SEO audit uncovered issues we never knew existed. Fixed them and saw immediate ranking improvements.',
      rating: 5
    }
  ];

  const seoPackages = [
    {
      type: 'Starter SEO',
      description: 'Perfect for small businesses starting their SEO journey',
      icon: '🚀',
      price: '₹25,000',
      duration: '/month',
      features: [
        'Technical SEO Audit',
        'Keyword Research (50 Keywords)',
        'On-Page Optimization',
        'Basic Content Optimization',
        'Monthly Performance Report',
        'Google Analytics Setup'
      ],
      bestFor: 'Startups & Small Businesses'
    },
    {
      type: 'Professional SEO',
      description: 'Comprehensive SEO for growing businesses',
      icon: '⭐',
      price: '₹50,000',
      duration: '/month',
      features: [
        'Advanced Technical SEO',
        'Keyword Research (150 Keywords)',
        'Complete On-Page Optimization',
        'Content Strategy & Creation',
        'Link Building (10 Links/Month)',
        'Competitor Analysis',
        'Detailed Monthly Reports'
      ],
      bestFor: 'Growing Businesses'
    },
    {
      type: 'Enterprise SEO',
      description: 'Full-scale SEO for established businesses',
      icon: '🏢',
      price: '₹1,00,000',
      duration: '/month',
      features: [
        'Comprehensive SEO Audit',
        'Keyword Research (300+ Keywords)',
        'Advanced Technical SEO',
        'Content Strategy & Creation',
        'Aggressive Link Building',
        'Local SEO Optimization',
        'E-commerce SEO',
        'Weekly Progress Meetings',
        'Custom Analytics Dashboard'
      ],
      bestFor: 'Enterprises & E-commerce'
    }
  ];

  const keyMetrics = [
    {
      icon: '📈',
      title: 'Traffic Growth',
      description: 'Significant increase in organic search traffic'
    },
    {
      icon: '🏆',
      title: 'Higher Rankings',
      description: 'Improved search engine rankings for target keywords'
    },
    {
      icon: '💼',
      title: 'More Leads',
      description: 'Increased qualified leads and conversions'
    },
    {
      icon: '🔗',
      title: 'Quality Backlinks',
      description: 'Authoritative backlinks from reputable sites'
    },
    {
      icon: '⚡',
      title: 'Better Performance',
      description: 'Improved site speed and user experience'
    },
    {
      icon: '📊',
      title: 'Clear ROI',
      description: 'Measurable return on investment'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-600 via-red-600 to-purple-700 relative overflow-hidden">
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
                Professional <span className="text-yellow-300">SEO Services</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed text-orange-100">
                Drive qualified traffic, increase visibility, and grow your business with data-driven SEO strategies. 
                We help you dominate search results and outrank your competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg"
                >
                  Get Free SEO Audit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 shadow-lg"
                >
                  View Case Studies
                </motion.button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { number: '95%', text: 'Client Success Rate' },
                  { number: '300+', text: 'Websites Optimized' },
                  { number: 'Page 1', text: 'Average Ranking' },
                  { number: '24/7', text: 'Performance Monitoring' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.text}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-yellow-300">{stat.number}</div>
                    <div className="text-orange-100 text-xs sm:text-sm">{stat.text}</div>
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
                  <div className="text-5xl sm:text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Our SEO Services?</h3>
                  <div className="space-y-3 sm:space-y-4 text-left">
                    {[
                      'Data-Driven SEO Strategies',
                      'White-Hat Techniques Only',
                      'Transparent Reporting',
                      'Expert SEO Consultants',
                      'Proven Track Record',
                      'Customized Approach'
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

      {/* SEO Packages Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              SEO Service Packages
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect SEO package that matches your business goals and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {seoPackages.map((pkg, index) => (
              <motion.div
                key={pkg.type}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 text-center relative"
              >
                <div className="text-4xl sm:text-5xl mb-4">{pkg.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{pkg.type}</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600">{pkg.duration}</span>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-100 text-orange-800 text-sm px-3 py-2 rounded-lg mb-6">
                  Best for: {pkg.bestFor}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors duration-300"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Measurable SEO Results
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We focus on delivering tangible results that impact your bottom line
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-4">{metric.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{metric.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{metric.description}</p>
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
              Comprehensive SEO Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end SEO solutions covering every aspect of search engine optimization
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our SEO Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach that delivers consistent, sustainable results
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

      {/* Tools & Platforms Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-orange-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              SEO Tools & Platforms
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We use industry-leading tools to analyze, optimize, and track your SEO performance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {toolsPlatforms.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${tool.color} rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                <div className="font-bold text-xs sm:text-sm mb-1">{tool.name}</div>
                <div className="text-xs opacity-75">{tool.category}</div>
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
              SEO Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from our SEO campaigns across different industries
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
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl sm:text-6xl text-center mb-4">{project.image}</div>
                <div className="text-center">
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs sm:text-sm px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="bg-white text-orange-700 text-xs px-2 py-1 rounded border border-orange-200">
                        {metric}
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
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
              See what our clients have to say about their SEO transformation
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
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-orange-100">
              Let's transform your online visibility and drive qualified traffic to your website. 
              Get a free SEO audit and discover how we can help you outrank your competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Get Free SEO Audit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Book Strategy Call
              </motion.button>
            </div>
            <div className="text-orange-100 text-sm sm:text-base">
              <p className="mb-2">📞 Call us at: +1 (555) 123-4567</p>
              <p>✉️ Email: seo@example.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}