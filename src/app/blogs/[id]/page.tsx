'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const params = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate API call
      const blogPost = {
        id: 1,
        title: 'The Future of Web Development: Trends to Watch in 2024',
        excerpt: 'Explore the latest web development trends including AI integration, serverless architecture, and progressive web apps that are shaping the future of digital experiences.',
        content: `
          <h2>Introduction</h2>
          <p>The web development landscape is evolving at an unprecedented pace. As we move into 2024, several key trends are emerging that will shape how we build and interact with digital experiences. In this comprehensive guide, we'll explore the most significant web development trends that every developer and business should be aware of.</p>
          
          <h2>1. Artificial Intelligence Integration</h2>
          <p>AI is no longer just a buzzword—it's becoming an integral part of web development. From AI-powered chatbots to personalized user experiences, machine learning algorithms are helping create more intelligent and responsive websites.</p>
          
          <h2>2. Serverless Architecture</h2>
          <p>Serverless computing continues to gain popularity due to its cost-effectiveness and scalability. Developers can focus on writing code without worrying about infrastructure management.</p>
          
          <h2>3. Progressive Web Apps (PWAs)</h2>
          <p>PWAs combine the best of web and mobile apps, offering offline functionality, push notifications, and app-like experiences without the need for app store downloads.</p>
          
          <h2>4. Web3 and Blockchain Integration</h2>
          <p>With the rise of decentralized technologies, we're seeing more websites integrating blockchain features for enhanced security and new business models.</p>
          
          <h2>5. Motion UI and Micro-interactions</h2>
          <p>Engaging user interfaces with smooth animations and micro-interactions are becoming standard for creating memorable user experiences.</p>
          
          <h2>Conclusion</h2>
          <p>Staying updated with these trends is crucial for developers and businesses alike. By embracing these technologies, you can create more engaging, efficient, and future-proof web applications.</p>
        `,
        category: 'Web Development',
        author: {
          name: 'Rajesh Kumar',
          role: 'Senior Web Developer',
          bio: 'Rajesh has over 10 years of experience in web development and has worked with numerous Fortune 500 companies.',
          image: '/api/placeholder/100/100'
        },
        date: 'Dec 15, 2024',
        readTime: '8 min read',
        image: '/api/placeholder/800/400',
        featured: true,
        tags: ['Web Development', 'Trends', 'Technology', 'AI', 'PWAs']
      };

      const related = [
        {
          id: 2,
          title: 'How to Improve Your Website SEO in 2024',
          category: 'SEO',
          date: 'Dec 12, 2024',
          readTime: '6 min read'
        },
        {
          id: 3,
          title: 'Building Scalable Mobile Apps with React Native',
          category: 'Mobile Apps',
          date: 'Dec 10, 2024',
          readTime: '10 min read'
        },
        {
          id: 7,
          title: 'The Rise of AI in Web Development',
          category: 'Web Development',
          date: 'Nov 30, 2024',
          readTime: '11 min read'
        }
      ];

      setPost(blogPost);
      setRelatedPosts(related);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [params.id]);

  if (loading || !post) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Article Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center text-blue-200 mb-4">
              <Link href="/blogs" className="hover:text-white transition-colors duration-300">
                ← Back to Blogs
              </Link>
            </div>
            
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-blue-200">{post.date}</span>
                <span className="text-blue-200">•</span>
                <span className="text-blue-200">{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-blue-200 text-sm">{post.author.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
              >
                {/* Featured Image */}
                <div className="h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article:</h3>
                  <div className="flex space-x-4">
                    {['Twitter', 'LinkedIn', 'Facebook', 'WhatsApp'].map((platform) => (
                      <button
                        key={platform}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-6 mb-8 sticky top-32"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {post.author.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author.name}</h3>
                  <p className="text-gray-600 mb-4">{post.author.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </motion.div>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blogs/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center text-gray-500 text-sm mt-1">
                            <span>{relatedPost.date}</span>
                            <span className="mx-1">•</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create something amazing
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-300"
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                View Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}