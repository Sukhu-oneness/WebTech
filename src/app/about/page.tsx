'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: 'Aarav Sharma',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      bio: '10+ years in tech industry. Passionate about innovation and digital transformation.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Priya Patel',
      role: 'CTO',
      image: '/api/placeholder/300/300',
      bio: 'Cloud architecture expert. Loves building scalable solutions and mentoring teams.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Rohan Kumar',
      role: 'Lead Developer',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack developer specializing in React, Node.js, and cloud technologies.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Neha Gupta',
      role: 'UI/UX Designer',
      image: '/api/placeholder/300/300',
      bio: 'Creative designer focused on creating intuitive and beautiful user experiences.',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const milestones = [
    { year: '2014', event: 'Company Founded', description: 'Started with 5 team members' },
    { year: '2016', event: 'First 100 Clients', description: 'Reached milestone of 100 satisfied clients' },
    { year: '2018', event: 'International Expansion', description: 'Started serving clients globally' },
    { year: '2020', event: 'AI Division Launch', description: 'Established dedicated AI and ML team' },
    { year: '2023', event: '500+ Projects', description: 'Completed over 500 successful projects' }
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
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SirsaTech</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate innovators dedicated to transforming businesses 
              through cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and digital transformation. We believe in creating lasting partnerships 
                with our clients and delivering exceptional value.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team of experts is committed to staying at the forefront of technology 
                trends and delivering solutions that make a real impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white h-32 flex items-end">
                  <div>
                    <div className="text-2xl font-bold mb-1">10+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white h-48 flex items-end">
                  <div>
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-cyan-100">Projects Completed</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white h-48 flex items-end">
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-purple-100">Team Members</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl p-6 text-white h-32 flex items-end">
                  <div>
                    <div className="text-2xl font-bold mb-1">25+</div>
                    <div className="text-green-100">Countries Served</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted technology partner
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-2xl font-bold text-white mb-2">{milestone.year}</div>
                    <div className="text-xl text-gray-300 font-semibold mb-2">{milestone.event}</div>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-purple-500 rounded-full mx-8 relative">
                  <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping"></div>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate professionals dedicated to delivering excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600 hover:border-purple-500 transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    LinkedIn
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    Twitter
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Innovation',
                description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
              },
              {
                icon: '🤝',
                title: 'Partnership',
                description: 'We build long-term relationships with our clients based on trust and mutual success.'
              },
              {
                icon: '⭐',
                title: 'Excellence',
                description: 'We strive for excellence in every project, ensuring the highest quality standards.'
              },
              {
                icon: '🔒',
                title: 'Integrity',
                description: 'We maintain transparency and honesty in all our business dealings.'
              },
              {
                icon: '🌍',
                title: 'Impact',
                description: 'We focus on creating solutions that make a positive impact on businesses and society.'
              },
              {
                icon: '📚',
                title: 'Learning',
                description: 'We foster a culture of continuous learning and professional growth.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-purple-500 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}