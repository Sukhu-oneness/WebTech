'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogsPage() {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Digital Marketing', 'SEO', 'E-commerce', 'Technology', 'Business'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest web development trends including AI integration, serverless architecture, and progressive web apps that are shaping the future of digital experiences.',
      category: 'Web Development',
      author: 'Rajesh Kumar',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['Web Development', 'Trends', 'Technology']
    },
    {
      id: 2,
      title: 'How to Improve Your Website SEO in 2024',
      excerpt: 'Complete guide to implementing effective SEO strategies that will boost your website ranking and drive organic traffic to your business.',
      category: 'SEO',
      author: 'Priya Sharma',
      date: 'Dec 12, 2024',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['SEO', 'Digital Marketing', 'Optimization']
    },
    {
      id: 3,
      title: 'Building Scalable Mobile Apps with React Native',
      excerpt: 'Learn how to create high-performance mobile applications using React Native and best practices for cross-platform development.',
      category: 'Mobile Apps',
      author: 'Amit Patel',
      date: 'Dec 10, 2024',
      readTime: '10 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['React Native', 'Mobile Development', 'JavaScript']
    },
    {
      id: 4,
      title: 'E-commerce Conversion Rate Optimization Strategies',
      excerpt: 'Discover proven techniques to increase your e-commerce conversion rates and maximize your online store revenue.',
      category: 'E-commerce',
      author: 'Neha Gupta',
      date: 'Dec 8, 2024',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['E-commerce', 'CRO', 'Business']
    },
    {
      id: 5,
      title: 'Cloud Computing: Benefits for Small Businesses',
      excerpt: 'Understanding how cloud computing can help small businesses reduce costs and improve operational efficiency.',
      category: 'Technology',
      author: 'Sanjay Mehta',
      date: 'Dec 5, 2024',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Cloud Computing', 'Business', 'Technology']
    },
    {
      id: 6,
      title: 'Social Media Marketing Strategies That Actually Work',
      excerpt: 'Effective social media marketing strategies to engage your audience and grow your brand presence online.',
      category: 'Digital Marketing',
      author: 'Anjali Singh',
      date: 'Dec 3, 2024',
      readTime: '9 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Social Media', 'Marketing', 'Strategy']
    },
    {
      id: 7,
      title: 'The Rise of AI in Web Development',
      excerpt: 'How artificial intelligence is revolutionizing web development and what it means for developers and businesses.',
      category: 'Web Development',
      author: 'Vikram Joshi',
      date: 'Nov 30, 2024',
      readTime: '11 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['AI', 'Web Development', 'Innovation']
    },
    {
      id: 8,
      title: 'Mobile App Security Best Practices',
      excerpt: 'Essential security measures every mobile app developer should implement to protect user data and prevent breaches.',
      category: 'Mobile Apps',
      author: 'Rohit Verma',
      date: 'Nov 28, 2024',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Security', 'Mobile Apps', 'Development']
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const searchedPosts = searchTerm 
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : filteredPosts;

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
              Our <span className="text-yellow-300">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Insights, trends, and expert advice on web development, digital marketing, 
              and technology to help grow your business
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-lg"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {searchedPosts.filter(post => post.featured).length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Handpicked content to keep you updated with the latest trends and insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {searchedPosts
                .filter(post => post.featured)
                .map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/blogs/${post.id}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group"
                      >
                        Read More
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {searchTerm ? 'Search Results' : 'Latest Articles'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {searchTerm 
                ? `Found ${searchedPosts.length} articles matching "${searchTerm}"`
                : 'Browse our complete collection of articles and tutorials'
              }
            </p>
          </motion.div>

          {searchedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchedPosts
                .filter(post => !post.featured || searchedPosts.filter(p => p.featured).length === 0)
                .map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">{post.author}</span>
                        <Link
                          href={`/blogs/${post.id}`}
                          className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-300"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? `No articles found matching "${searchTerm}". Try different keywords.`
                  : 'No articles available in this category.'
                }
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View All Articles
              </button>
            </motion.div>
          )}

          {/* Load More Button */}
          {searchedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Load More Articles
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest tech insights and business tips delivered to your inbox
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-3">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}