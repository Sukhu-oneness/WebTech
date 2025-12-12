'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  if (loading) {
    return <Loading />;
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'info@SirsaTech.com',
      description: 'Send us an email anytime',
      link: 'mailto:info@SirsaTech.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Tech Street, Silicon Valley, CA 94025',
      description: 'Come say hello at our office',
      link: '#'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Start chatting',
      description: '24/7 customer support',
      link: '#'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, Silicon Valley, CA 94025',
      phone: '+1 (555) 123-4567',
      email: 'sf@SirsaTech.com'
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, Manhattan, NY 10001',
      phone: '+1 (555) 234-5678',
      email: 'ny@SirsaTech.com'
    },
    {
      city: 'London',
      address: '789 Digital Lane, London, UK EC1A 1BB',
      phone: '+44 20 7946 0958',
      email: 'london@SirsaTech.com'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your project? Contact us today and let's discuss how we can help 
              your business achieve its goals with cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600 hover:border-purple-500 transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 font-semibold mb-1">{method.details}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Send us a Message</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours. 
                We're excited to hear about your project!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="cyber-security">Cyber Security</option>
                      <option value="ai-ml">AI & ML Solutions</option>
                      <option value="data-analytics">Data Analytics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Offices</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We have offices around the world to serve our global clients. 
                Visit us or schedule a meeting at your convenience.
              </p>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600 hover:border-purple-500 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">{office.city}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {office.address}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {office.phone}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                        {office.email}
                      </div>
                    </div>
                    <button className="mt-4 text-purple-400 hover:text-purple-300 font-medium flex items-center group">
                      Get Directions
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Questions</h3>
                <div className="space-y-4">
                  {[
                    {
                      question: 'How long does a typical project take?',
                      answer: 'Project timelines vary based on complexity, but most projects range from 4-12 weeks.'
                    },
                    {
                      question: 'Do you provide ongoing support?',
                      answer: 'Yes, we offer comprehensive support and maintenance packages for all our clients.'
                    },
                    {
                      question: 'What industries do you serve?',
                      answer: 'We work with clients across various industries including healthcare, finance, e-commerce, and more.'
                    }
                  ].map((faq, index) => (
                    <motion.div
                      key={faq.question}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-slate-700/30 rounded-xl p-4 border border-slate-600"
                    >
                      <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}