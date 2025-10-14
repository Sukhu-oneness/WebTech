'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      client: 'FashionHub',
      duration: '3 months',
      teamSize: '5 members',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      description: 'A full-stack e-commerce solution with advanced inventory management, payment processing, and customer analytics.',
      challenge: 'Building a scalable platform that could handle 10,000+ concurrent users during peak sales seasons.',
      solution: 'Implemented microservices architecture with cloud-native technologies and optimized database queries.',
      results: [
        '40% increase in conversion rate',
        '60% faster page load times',
        '99.9% uptime during Black Friday sales'
      ],
      image: '/api/placeholder/600/400',
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      liveUrl: 'https://fashionhub-demo.com',
      githubUrl: 'https://github.com/techweb/fashionhub'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      client: 'SecureBank',
      duration: '6 months',
      teamSize: '8 members',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Plaid API', 'Biometric Auth'],
      description: 'A secure mobile banking application with real-time transactions, biometric authentication, and financial insights.',
      challenge: 'Ensuring bank-level security while maintaining excellent user experience across iOS and Android.',
      solution: 'Implemented end-to-end encryption, secure key management, and comprehensive testing protocols.',
      results: [
        '4.8-star rating on app stores',
        '500k+ downloads in first month',
        'Zero security breaches reported'
      ],
      image: '/api/placeholder/600/400',
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      liveUrl: 'https://apps.apple.com/securebank',
      githubUrl: null
    },
    {
      id: 3,
      title: 'Cloud Migration',
      category: 'Cloud Services',
      client: 'Global Retail Corp',
      duration: '4 months',
      teamSize: '6 members',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python'],
      description: 'Complete migration of legacy on-premise systems to AWS cloud infrastructure with zero downtime.',
      challenge: 'Migrating critical retail systems without disrupting daily operations during holiday season.',
      solution: 'Implemented blue-green deployment strategy with comprehensive rollback procedures.',
      results: [
        '70% reduction in infrastructure costs',
        '50% improvement in system performance',
        'Zero downtime during migration'
      ],
      image: '/api/placeholder/600/400',
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      liveUrl: null,
      githubUrl: null
    },
    {
      id: 4,
      title: 'AI Analytics Dashboard',
      category: 'AI/ML',
      client: 'DataInsight Inc',
      duration: '5 months',
      teamSize: '7 members',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI'],
      description: 'Real-time business intelligence dashboard with predictive analytics and machine learning insights.',
      challenge: 'Processing large datasets in real-time and providing actionable insights through intuitive visualizations.',
      solution: 'Built distributed data processing pipeline and custom visualization components for complex data.',
      results: [
        '30% improvement in decision-making speed',
        'Accurate sales predictions (95%+ accuracy)',
        'Reduced manual reporting by 80%'
      ],
      image: '/api/placeholder/600/400',
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      liveUrl: 'https://datainsight-demo.com',
      githubUrl: 'https://github.com/techweb/ai-dashboard'
    },
    {
      id: 5,
      title: 'Healthcare Portal',
      category: 'Web Development',
      client: 'MediCare Solutions',
      duration: '4 months',
      teamSize: '5 members',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebRTC', 'HIPAA Compliance'],
      description: 'Secure patient portal with telemedicine capabilities, appointment scheduling, and medical records management.',
      challenge: 'Ensuring HIPAA compliance while providing seamless user experience for patients and doctors.',
      solution: 'Implemented end-to-end encryption, audit trails, and strict access controls.',
      results: [
        '200+ healthcare providers onboarded',
        '50k+ patient records securely managed',
        '100% HIPAA compliance achieved'
      ],
      image: '/api/placeholder/600/400',
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      liveUrl: 'https://medicare-portal.com',
      githubUrl: null
    },
    {
      id: 6,
      title: 'IoT Smart Home',
      category: 'IoT Solutions',
      client: 'SmartLiving Tech',
      duration: '8 months',
      teamSize: '10 members',
      technologies: ['React Native', 'AWS IoT', 'Python', 'Raspberry Pi', 'MQTT'],
      description: 'Comprehensive smart home ecosystem with mobile control, automation, and energy management.',
      challenge: 'Creating reliable connectivity between 50+ different IoT devices with low latency requirements.',
      solution: 'Implemented custom IoT protocol and edge computing for real-time device management.',
      results: [
        '99.5% device connectivity reliability',
        '30% energy savings for users',
        'Support for 100+ IoT devices'
      ],
      image: '/api/placeholder/600/400',
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      liveUrl: 'https://smartliving-app.com',
      githubUrl: 'https://github.com/techweb/smart-home'
    },
    {
      id: 7,
      title: 'Supply Chain Management',
      category: 'Web Development',
      client: 'LogiChain Global',
      duration: '6 months',
      teamSize: '8 members',
      technologies: ['Vue.js', 'Node.js', 'MySQL', 'Redis', 'WebSockets'],
      description: 'End-to-end supply chain management platform with real-time tracking and predictive logistics.',
      challenge: 'Handling real-time data from multiple sources and providing accurate ETAs for shipments.',
      solution: 'Built event-driven architecture with real-time data processing and machine learning for predictions.',
      results: [
        '25% reduction in delivery times',
        '40% improvement in inventory accuracy',
        'Real-time tracking for 10k+ shipments'
      ],
      image: '/api/placeholder/600/400',
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      liveUrl: 'https://logichain-demo.com',
      githubUrl: null
    },
    {
      id: 8,
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      client: 'FitLife Pro',
      duration: '3 months',
      teamSize: '4 members',
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'Charts'],
      description: 'Cross-platform fitness app with workout tracking, social features, and personalized recommendations.',
      challenge: 'Synchronizing data across multiple health platforms while maintaining battery efficiency.',
      solution: 'Optimized background processes and implemented efficient data sync algorithms.',
      results: [
        '4.9-star rating on app stores',
        '1M+ active users',
        'Featured in "App of the Day"'
      ],
      image: '/api/placeholder/600/400',
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      liveUrl: 'https://apps.apple.com/fitlife',
      githubUrl: 'https://github.com/techweb/fitlife'
    }
  ];

  const filters = ['All', 'Web Development', 'Mobile Development', 'Cloud Services', 'AI/ML', 'IoT Solutions'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const selectedProjectData = selectedProject 
    ? projects.find(project => project.id === selectedProject)
    : null;

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
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our successful projects and see how we've helped businesses transform 
              their ideas into powerful digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '150+', label: 'Happy Clients' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Awards Won' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
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
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600 hover:border-purple-500 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(project.id)}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      View Details
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{project.duration}</span>
                    <span>{project.teamSize}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              Load More Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Trusted By</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We've had the privilege of working with amazing companies across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              'FashionHub', 'SecureBank', 'Global Retail', 'DataInsight', 
              'MediCare', 'SmartLiving', 'LogiChain', 'FitLife',
              'TechCorp', 'InnovateLabs', 'DigitalPlus', 'NextGen'
            ].map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600 hover:border-purple-500 transition-all duration-300 text-center h-24 flex items-center justify-center"
              >
                <span className="text-gray-300 font-semibold text-lg">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Share your project ideas with us and we'll bring them to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProjectData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="relative">
              <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-t-2xl relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-slate-900/80 rounded-full flex items-center justify-center text-white hover:bg-slate-900 transition-colors duration-300"
                >
                  ×
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProjectData.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <h2 className="text-4xl font-bold text-white mb-4">{selectedProjectData.title}</h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProjectData.description}</p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Client</h4>
                      <p className="text-gray-300">{selectedProjectData.client}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Duration</h4>
                      <p className="text-gray-300">{selectedProjectData.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Team Size</h4>
                      <p className="text-gray-300">{selectedProjectData.teamSize}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Category</h4>
                      <p className="text-gray-300">{selectedProjectData.category}</p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-white font-semibold text-xl mb-3">The Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProjectData.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xl mb-3">Our Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProjectData.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-white font-semibold text-xl mb-4">Key Results</h4>
                    <div className="space-y-2">
                      {selectedProjectData.results.map((result, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3">Project Links</h4>
                    <div className="space-y-3">
                      {selectedProjectData.liveUrl && (
                        <a
                          href={selectedProjectData.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 transition-colors duration-300 group"
                        >
                          <span className="text-white font-medium">Live Demo</span>
                          <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                      )}
                      {selectedProjectData.githubUrl && (
                        <a
                          href={selectedProjectData.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 transition-colors duration-300 group"
                        >
                          <span className="text-white font-medium">GitHub Repository</span>
                          <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Gallery */}
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3">Project Gallery</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedProjectData.gallery.map((image, index) => (
                        <div
                          key={index}
                          className="aspect-square bg-slate-700/50 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                        >
                          {/* Image placeholder */}
                          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center text-white text-sm">
                            Image {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t border-slate-700">
                <button
                  onClick={closeModal}
                  className="flex-1 border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Close
                </button>
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Start Similar Project
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  );
}