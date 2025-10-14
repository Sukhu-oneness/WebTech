'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { useState, useEffect } from 'react';

export default function DigitalMarketingPage() {
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
title: 'SEO Optimization',
description: 'Comprehensive search engine optimization to improve your website rankings, increase organic traffic, and boost online visibility.',
icon: '🔍',
color: 'from-blue-500 to-cyan-500'
},
{
title: 'Social Media Marketing',
description: 'Strategic social media campaigns across all major platforms to engage your audience and build brand loyalty.',
icon: '📱',
color: 'from-purple-500 to-pink-500'
},
{
title: 'Content Marketing',
description: 'High-quality content creation and distribution to attract, engage, and retain your target audience.',
icon: '📝',
color: 'from-green-500 to-emerald-500'
},
{
title: 'PPC Advertising',
description: 'Targeted pay-per-click campaigns on Google, social media, and other platforms to drive immediate results.',
icon: '🎯',
color: 'from-orange-500 to-red-500'
},
{
title: 'Email Marketing',
description: 'Personalized email campaigns to nurture leads, retain customers, and drive conversions.',
icon: '✉️',
color: 'from-indigo-500 to-blue-500'
},
{
title: 'Analytics & Reporting',
description: 'Comprehensive tracking and analysis to measure campaign performance and optimize ROI.',
icon: '📊',
color: 'from-yellow-500 to-amber-500'
},
{
title: 'Influencer Marketing',
description: 'Strategic partnerships with influencers to amplify your brand reach and credibility.',
icon: '🌟',
color: 'from-teal-500 to-cyan-500'
},
{
title: 'Video Marketing',
description: 'Engaging video content creation and distribution across multiple platforms to tell your brand story.',
icon: '🎥',
color: 'from-red-500 to-pink-500'
}
];

const platforms = [
{ name: 'Google Ads', category: 'PPC', color: 'bg-blue-100 text-blue-800' },
{ name: 'Facebook Ads', category: 'Social Media', color: 'bg-indigo-100 text-indigo-800' },
{ name: 'Instagram', category: 'Social Media', color: 'bg-pink-100 text-pink-800' },
{ name: 'LinkedIn', category: 'Social Media', color: 'bg-blue-100 text-blue-800' },
{ name: 'Twitter', category: 'Social Media', color: 'bg-sky-100 text-sky-800' },
{ name: 'YouTube', category: 'Video', color: 'bg-red-100 text-red-800' },
{ name: 'TikTok', category: 'Social Media', color: 'bg-gray-100 text-gray-800' },
{ name: 'Google Analytics', category: 'Analytics', color: 'bg-green-100 text-green-800' },
{ name: 'Mailchimp', category: 'Email', color: 'bg-yellow-100 text-yellow-800' },
{ name: 'HubSpot', category: 'CRM', color: 'bg-orange-100 text-orange-800' },
{ name: 'SEMrush', category: 'SEO', color: 'bg-red-100 text-red-800' },
{ name: 'Ahrefs', category: 'SEO', color: 'bg-purple-100 text-purple-800' },
{ name: 'Canva', category: 'Design', color: 'bg-blue-100 text-blue-800' },
{ name: 'Hootsuite', category: 'Social Media', color: 'bg-orange-100 text-orange-800' },
{ name: 'Buffer', category: 'Social Media', color: 'bg-gray-100 text-gray-800' },
{ name: 'Google My Business', category: 'Local SEO', color: 'bg-blue-100 text-blue-800' }
];

const processSteps = [
{
step: '01',
title: 'Strategy & Planning',
description: 'We analyze your business, target audience, and competitors to create a customized digital marketing strategy.',
color: 'from-blue-500 to-purple-600'
},
{
step: '02',
title: 'Research & Analysis',
description: 'In-depth market research, keyword analysis, and audience insights to inform campaign decisions.',
color: 'from-purple-500 to-pink-600'
},
{
step: '03',
title: 'Campaign Setup',
description: 'Implementation of marketing campaigns across selected channels with precise targeting and optimization.',
color: 'from-green-500 to-teal-600'
},
{
step: '04',
title: 'Content Creation',
description: 'Development of compelling content, ads, and creatives that resonate with your target audience.',
color: 'from-orange-500 to-red-600'
},
{
step: '05',
title: 'Execution & Management',
description: 'Ongoing campaign management, monitoring, and optimization to ensure maximum performance.',
color: 'from-teal-500 to-blue-600'
},
{
step: '06',
title: 'Analysis & Reporting',
description: 'Comprehensive performance tracking and regular reporting with actionable insights for improvement.',
color: 'from-indigo-500 to-purple-600'
}
];

const caseStudies = [
{
title: 'E-commerce Brand Growth',
description: 'Increased online sales by 300% through targeted social media and SEO strategies.',
image: '📈',
category: 'E-commerce',
results: ['300% Sales Increase', '50% Lower CAC', '400% ROI']
},
{
title: 'Local Business Expansion',
description: 'Helped local service business expand to national market through digital campaigns.',
image: '🏪',
category: 'Local Business',
results: ['5x Lead Generation', '200% Revenue Growth', 'National Reach']
},
{
title: 'SaaS Product Launch',
description: 'Successful product launch with targeted PPC and content marketing strategy.',
image: '🚀',
category: 'SaaS',
results: ['10,000+ Signups', '40% Conversion Rate', '$2M ARR']
}
];

const testimonials = [
{
name: 'Jessica Martinez',
company: 'Fashion Retail Co',
comment: 'Their digital marketing strategy increased our online sales by 250% in just 6 months. Exceptional results!',
rating: 5
},
{
name: 'David Kim',
company: 'Tech Solutions Inc',
comment: 'Professional team that delivered measurable ROI. Their PPC campaigns generated high-quality leads consistently.',
rating: 5
},
{
name: 'Amanda Thompson',
company: 'Health & Wellness',
comment: 'Outstanding content strategy and social media management. Our engagement rates have never been higher.',
rating: 5
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
            Results-Driven <span className="text-yellow-300">Digital Marketing</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed text-green-100">
            We create data-driven digital marketing strategies that deliver measurable results. 
            From SEO and social media to PPC and content marketing, we help businesses grow their online presence and revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg"
            >
              Get Free Audit
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
              { number: '500+', text: 'Campaigns Managed' },
              { number: '15M+', text: 'Leads Generated' },
              { number: '200%', text: 'Average ROI' },
              { number: '24/7', text: 'Campaign Monitoring' }
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
              <div className="text-5xl sm:text-6xl mb-4">🎯</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Choose Us?</h3>
              <div className="space-y-3 sm:space-y-4 text-left">
                {[
                  'Data-driven strategy & analytics',
                  'Transparent reporting & results',
                  'Customized marketing solutions',
                  'Expert campaign management',
                  'Proven track record of success',
                  'Continuous optimization & testing'
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

  {/* Services Section */}
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Our Digital Marketing Services
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Comprehensive digital marketing solutions designed to drive growth, increase visibility, and maximize your ROI
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-xl p-6 sm:p-8 text-white relative overflow-hidden group cursor-pointer h-full`}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-white/90 leading-relaxed text-xs sm:text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Process Section */}
  <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-green-100">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Our Marketing Process
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          A systematic approach to ensure campaign success and maximum return on investment
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full"
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

  {/* Platforms Section */}
  <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-green-900">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Platforms & Tools We Master
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          We leverage industry-leading platforms and tools to execute successful marketing campaigns
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

  {/* Case Studies Section */}
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Success Stories
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Real results from our digital marketing campaigns across various industries
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {caseStudies.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-5xl sm:text-6xl text-center mb-4">{project.image}</div>
            <div className="text-center">
              <span className="inline-block bg-green-100 text-green-800 text-xs sm:text-sm px-3 py-1 rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
              <div className="space-y-2">
                {project.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="bg-white text-gray-700 text-xs sm:text-sm px-3 py-2 rounded-lg shadow">
                    ✅ {result}
                  </div>
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
          Client Testimonials
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Hear from businesses that have transformed their growth with our digital marketing strategies
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
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-green-100">
          Let's create a digital marketing strategy that drives real results. Get a free marketing audit and discover how we can help you achieve your business goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            Get Free Marketing Audit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            Book Strategy Session
          </motion.button>
        </div>
        <div className="text-green-100 text-sm sm:text-base">
          <p className="mb-2">📞 Call us at: +1 (555) 123-4567</p>
          <p>✉️ Email: marketing@example.com</p>
        </div>
      </motion.div>
    </div>
  </section>

  <Footer />
</main>

);
}