'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { useState, useEffect } from 'react';

export default function WebDevelopmentPage() {
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
      title: 'Custom Web Applications',
      description: 'Tailored solutions built from scratch to meet your specific business requirements with scalable architecture and modern design patterns.',
      icon: '⚡',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'E-commerce Development',
      description: 'Complete online store setup with secure payment integration, inventory management, and customer relationship management systems.',
      icon: '🛒',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'CMS Development',
      description: 'Custom content management systems for easy website updates, content management, and multi-user collaboration features.',
      icon: '📝',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with third-party services, RESTful APIs, and microservices architecture for enhanced functionality.',
      icon: '🔗',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect display on all devices with progressive enhancement and cross-browser compatibility.',
      icon: '📱',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Performance Optimization',
      description: 'Fast loading times, optimized user experience, and SEO-friendly structure to improve search engine rankings.',
      icon: '🚀',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'Progressive Web Apps',
      description: 'Transform your website into a mobile app-like experience with offline capabilities and push notifications.',
      icon: '📲',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Website Maintenance',
      description: 'Ongoing support, security updates, and performance monitoring to keep your website running smoothly.',
      icon: '🛠️',
      color: 'from-gray-500 to-blue-500'
    }
  ];

  const technologies = [
    { name: 'React.js', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
    { name: 'Next.js', category: 'Frontend', color: 'bg-gray-100 text-gray-800' },
    { name: 'Vue.js', category: 'Frontend', color: 'bg-green-100 text-green-800' },
    { name: 'Angular', category: 'Frontend', color: 'bg-red-100 text-red-800' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'Python/Django', category: 'Backend', color: 'bg-blue-100 text-blue-800' },
    { name: 'Laravel', category: 'Backend', color: 'bg-red-100 text-red-800' },
    { name: 'Express.js', category: 'Backend', color: 'bg-gray-100 text-gray-800' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-800' },
    { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-100 text-blue-800' },
    { name: 'MySQL', category: 'Database', color: 'bg-orange-100 text-orange-800' },
    { name: 'AWS', category: 'Cloud', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Firebase', category: 'Backend', color: 'bg-orange-100 text-orange-800' },
    { name: 'Docker', category: 'DevOps', color: 'bg-blue-100 text-blue-800' },
    { name: 'GraphQL', category: 'API', color: 'bg-pink-100 text-pink-800' },
    { name: 'TypeScript', category: 'Language', color: 'bg-blue-100 text-blue-800' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project plan.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Our designers create intuitive user interfaces and engaging user experiences that convert visitors into customers.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our developers bring designs to life using the latest technologies and best coding practices.',
      color: 'from-green-500 to-teal-600'
    },
    {
      step: '04',
      title: 'Testing & Quality',
      description: 'Rigorous testing across devices and browsers to ensure flawless performance and user experience.',
      color: 'from-orange-500 to-red-600'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Smooth deployment to production environment with zero downtime and proper configuration.',
      color: 'from-teal-500 to-blue-600'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your website secure and up-to-date.',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const portfolioProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack online store with payment integration, inventory management, and admin dashboard.',
      image: '🛍️',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Corporate Website',
      description: 'Modern corporate website with CMS, blog system, and contact management.',
      image: '🏢',
      category: 'Business',
      technologies: ['Next.js', 'Tailwind', 'GraphQL']
    },
    {
      title: 'SaaS Application',
      description: 'Cloud-based software solution with user management and real-time features.',
      image: '☁️',
      category: 'SaaS',
      technologies: ['Vue.js', 'Firebase', 'AWS']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc',
      comment: 'The web application they built for us increased our conversion rate by 40%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Global Solutions',
      comment: 'Professional team, delivered on time and exceeded our expectations. Great communication throughout.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'Innovate Labs',
      comment: 'Their attention to detail and technical expertise made all the difference in our project success.',
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
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
                Professional <span className="text-yellow-300">Web Development</span> Services
              </h1>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed text-blue-100">
                We create stunning, high-performance websites and web applications that drive business growth. 
                From concept to deployment, we deliver digital experiences that engage your audience and convert visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg"
                >
                  Get Free Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 shadow-lg"
                >
                  View Portfolio
                </motion.button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { number: '500+', text: 'Projects Completed' },
                  { number: '10+', text: 'Years Experience' },
                  { number: '99%', text: 'Client Satisfaction' },
                  { number: '24/7', text: 'Support Available' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.text}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-yellow-300">{stat.number}</div>
                    <div className="text-blue-100 text-xs sm:text-sm">{stat.text}</div>
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
                  <div className="text-5xl sm:text-6xl mb-4">💻</div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Choose Us?</h3>
                  <div className="space-y-3 sm:space-y-4 text-left">
                    {[
                      'Custom-coded solutions (no templates)',
                      'Mobile-responsive design',
                      'SEO-optimized structure',
                      'Fast loading speeds',
                      'Secure & scalable',
                      'Ongoing support & maintenance'
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
              Our Web Development Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web solutions tailored to help businesses establish a strong online presence and achieve digital goals
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Development Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure quality, transparency, and timely delivery
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
              Technologies We Use
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We work with modern technologies and frameworks to deliver robust, scalable, and future-proof solutions
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Recent Work
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of our successfully delivered web development projects
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
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl sm:text-6xl text-center mb-4">{project.image}</div>
                <div className="text-center">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm px-3 py-1 rounded-full mb-3">
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
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
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
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Let's transform your ideas into a powerful web presence. Get a free consultation and project estimate today. 
              We'll help you create a website that not only looks great but also drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Start Your Project Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Schedule Free Consultation
              </motion.button>
            </div>
            <div className="text-blue-100 text-sm sm:text-base">
              <p className="mb-2">📞 Call us at: +1 (555) 123-4567</p>
              <p>✉️ Email: hello@example.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}