'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { useState, useEffect } from 'react';

export default function CloudServicesPage() {
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
title: 'Cloud Migration',
description: 'Seamless migration of your applications and data to the cloud with zero downtime and complete data integrity.',
icon: '☁️',
color: 'from-blue-500 to-cyan-500'
},
{
title: 'Cloud Infrastructure',
description: 'Design and implementation of scalable, secure, and cost-effective cloud infrastructure solutions.',
icon: '🏗️',
color: 'from-purple-500 to-pink-500'
},
{
title: 'DevOps & CI/CD',
description: 'Automated deployment pipelines, containerization, and infrastructure as code for faster delivery.',
icon: '⚙️',
color: 'from-green-500 to-emerald-500'
},
{
title: 'Cloud Security',
description: 'Comprehensive security solutions including identity management, encryption, and compliance monitoring.',
icon: '🔒',
color: 'from-orange-500 to-red-500'
},
{
title: 'Cloud Monitoring',
description: '24/7 monitoring, alerting, and performance optimization for your cloud environments.',
icon: '📊',
color: 'from-indigo-500 to-blue-500'
},
{
title: 'Disaster Recovery',
description: 'Robust backup and disaster recovery solutions to ensure business continuity and data protection.',
icon: '🛡️',
color: 'from-yellow-500 to-amber-500'
},
{
title: 'Serverless Architecture',
description: 'Build and deploy serverless applications for maximum scalability and cost efficiency.',
icon: '🚀',
color: 'from-teal-500 to-cyan-500'
},
{
title: 'Cloud Cost Optimization',
description: 'Monitor and optimize your cloud spending while maintaining performance and reliability.',
icon: '💰',
color: 'from-green-500 to-blue-500'
}
];

const platforms = [
{ name: 'AWS', category: 'Cloud Provider', color: 'bg-orange-100 text-orange-800' },
{ name: 'Microsoft Azure', category: 'Cloud Provider', color: 'bg-blue-100 text-blue-800' },
{ name: 'Google Cloud', category: 'Cloud Provider', color: 'bg-green-100 text-green-800' },
{ name: 'Kubernetes', category: 'Container', color: 'bg-blue-100 text-blue-800' },
{ name: 'Docker', category: 'Container', color: 'bg-indigo-100 text-indigo-800' },
{ name: 'Terraform', category: 'IaC', color: 'bg-purple-100 text-purple-800' },
{ name: 'Ansible', category: 'Automation', color: 'bg-red-100 text-red-800' },
{ name: 'Jenkins', category: 'CI/CD', color: 'bg-gray-100 text-gray-800' },
{ name: 'GitLab CI', category: 'CI/CD', color: 'bg-orange-100 text-orange-800' },
{ name: 'Prometheus', category: 'Monitoring', color: 'bg-red-100 text-red-800' },
{ name: 'Grafana', category: 'Monitoring', color: 'bg-orange-100 text-orange-800' },
{ name: 'ELK Stack', category: 'Logging', color: 'bg-yellow-100 text-yellow-800' },
{ name: 'Redis', category: 'Database', color: 'bg-red-100 text-red-800' },
{ name: 'MongoDB Atlas', category: 'Database', color: 'bg-green-100 text-green-800' },
{ name: 'PostgreSQL', category: 'Database', color: 'bg-blue-100 text-blue-800' },
{ name: 'Redis Cloud', category: 'Database', color: 'bg-red-100 text-red-800' }
];

const processSteps = [
{
step: '01',
title: 'Assessment & Planning',
description: 'Comprehensive analysis of your current infrastructure and business requirements for cloud adoption.',
color: 'from-blue-500 to-purple-600'
},
{
step: '02',
title: 'Architecture Design',
description: 'Design scalable and secure cloud architecture tailored to your specific needs and budget.',
color: 'from-purple-500 to-pink-600'
},
{
step: '03',
title: 'Migration Strategy',
description: 'Develop and execute a phased migration plan with minimal disruption to your business operations.',
color: 'from-green-500 to-teal-600'
},
{
step: '04',
title: 'Implementation',
description: 'Deploy cloud infrastructure, applications, and services following best practices and security standards.',
color: 'from-orange-500 to-red-600'
},
{
step: '05',
title: 'Testing & Optimization',
description: 'Rigorous testing, performance tuning, and cost optimization of your cloud environment.',
color: 'from-teal-500 to-blue-600'
},
{
step: '06',
title: 'Support & Management',
description: 'Ongoing monitoring, maintenance, and support to ensure optimal cloud performance and security.',
color: 'from-indigo-500 to-purple-600'
}
];

const caseStudies = [
{
title: 'Enterprise Cloud Migration',
description: 'Migrated 200+ servers to AWS with 99.9% uptime and 40% cost reduction.',
image: '🏢',
category: 'Enterprise',
results: ['40% Cost Reduction', '99.9% Uptime', '200+ Servers Migrated']
},
{
title: 'E-commerce Scalability',
description: 'Implemented auto-scaling solution handling 10x traffic during peak seasons.',
image: '🛒',
category: 'E-commerce',
results: ['10x Traffic Handling', 'Zero Downtime', 'Auto-scaling']
},
{
title: 'Healthcare Compliance',
description: 'HIPAA compliant cloud infrastructure for healthcare data management.',
image: '🏥',
category: 'Healthcare',
results: ['HIPAA Compliant', 'Secure Data', '24/7 Monitoring']
}
];

const testimonials = [
{
name: 'Robert Chen',
company: 'FinTech Solutions',
comment: 'Their cloud migration expertise helped us reduce infrastructure costs by 50% while improving performance and scalability.',
rating: 5
},
{
name: 'Sarah Martinez',
company: 'HealthCare Plus',
comment: 'Outstanding security implementation and compliance management for our sensitive healthcare data in the cloud.',
rating: 5
},
{
name: 'Michael Thompson',
company: 'E-commerce Global',
comment: 'The auto-scaling solution they implemented handled Black Friday traffic seamlessly. Zero downtime, excellent performance.',
rating: 5
}
];

return (
<main className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
<Header />
  {/* Hero Section */}
  <section className="pt-32 pb-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 relative overflow-hidden">
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
            Enterprise <span className="text-yellow-300">Cloud Services</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed text-cyan-100">
            Transform your business with scalable, secure, and cost-effective cloud solutions. 
            From migration to optimization, we provide end-to-end cloud services that drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg"
            >
              Get Cloud Assessment
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
              { number: '500+', text: 'Cloud Projects' },
              { number: '99.9%', text: 'Uptime SLA' },
              { number: '50%', text: 'Cost Savings' },
              { number: '24/7', text: 'Cloud Support' }
            ].map((stat, index) => (
              <motion.div
                key={stat.text}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="text-xl sm:text-2xl font-bold text-yellow-300">{stat.number}</div>
                <div className="text-cyan-100 text-xs sm:text-sm">{stat.text}</div>
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
              <div className="text-5xl sm:text-6xl mb-4">⚡</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Cloud Benefits</h3>
              <div className="space-y-3 sm:space-y-4 text-left">
                {[
                  'Scalable infrastructure on demand',
                  'Pay-as-you-go pricing model',
                  'Enhanced security & compliance',
                  'Global availability & reliability',
                  'Disaster recovery & backup',
                  'Automatic software updates'
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
          Our Cloud Services
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Comprehensive cloud solutions designed to optimize performance, enhance security, and reduce costs
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
  <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-cyan-100">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Our Cloud Adoption Process
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          A structured approach to ensure successful cloud transformation and maximum ROI
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
  <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-cyan-900">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Technologies & Platforms
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          We work with leading cloud platforms and modern technologies to deliver robust solutions
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
          Cloud Success Stories
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Real-world examples of how we've helped businesses transform with cloud technology
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
            className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-5xl sm:text-6xl text-center mb-4">{project.image}</div>
            <div className="text-center">
              <span className="inline-block bg-cyan-100 text-cyan-800 text-xs sm:text-sm px-3 py-1 rounded-full mb-3">
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
  <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
          Hear from businesses that have successfully transformed with our cloud services
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
  <section className="py-16 sm:py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 relative overflow-hidden">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-white"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Ready to Transform Your Infrastructure?
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-cyan-100">
          Let's migrate your business to the cloud and unlock new levels of scalability, security, and cost efficiency. 
          Get a free cloud assessment and discover the potential savings for your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            Get Free Cloud Assessment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'rgb(17, 24, 39)' }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            Schedule Consultation
          </motion.button>
        </div>
        <div className="text-cyan-100 text-sm sm:text-base">
          <p className="mb-2">📞 Call us at: +1 (555) 123-4567</p>
          <p>✉️ Email: cloud@example.com</p>
        </div>
      </motion.div>
    </div>
  </section>

  <Footer />
</main>
);
}