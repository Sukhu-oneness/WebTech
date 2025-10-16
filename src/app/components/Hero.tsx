'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "We offer specialized website development options tailored to your specific needs and objectives. Our end-to-end web development solutions empower businesses to enhance their operations by incorporating the latest technology and industry best practices.",
      features: ["Responsive Design", "Latest Technology", "Scalable Solutions", "Industry Best Practices"],
      icon: "🌐",
      gradient: "from-blue-500 to-cyan-500",
      stats: { projects: "500+", satisfaction: "99%", support: "24/7" },
      cta: "Discover More",
      image: "/img/website-design.jpg"
    },
    {
      id: 2,
      title: "App Development",
      description: "We create powerful, user-friendly mobile applications for iOS and Android platforms. Our app development services focus on delivering seamless user experiences with cutting-edge features and robust performance.",
      features: ["iOS & Android", "User-Friendly Design", "Cutting-Edge Features", "Robust Performance"],
      icon: "📱",
      gradient: "from-purple-500 to-pink-500",
      stats: { projects: "300+", satisfaction: "98%", support: "24/7" },
      cta: "View Apps",
      image: "/img/mobile-app.jpg"
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies. From SEO to social media marketing, we help businesses reach their target audience and achieve remarkable growth.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Growth Analytics"],
      icon: "🚀",
      gradient: "from-orange-500 to-red-500",
      stats: { projects: "400+", satisfaction: "97%", support: "24/7" },
      cta: "Explore Plans",
      image: "/img/digital-marketing.jpg"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        {/* Main Slider */}
        <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Content */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={service.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                      {/* Service Header */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className={`text-5xl p-4 rounded-2xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent animate-bounce`}>
                            {service.icon}
                          </div>
                          <h3 className="text-4xl md:text-5xl font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 group">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full group-hover:scale-150 transition-transform duration-300`}></div>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center group">
                            <div className="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                              {value}
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className={`group bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative flex items-center gap-3">
                          {service.cta}
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    {/* Image Box */}
                    <div className="relative">
                      <div className={`relative bg-gradient-to-br ${service.gradient} rounded-3xl p-1 aspect-square max-w-md mx-auto transform hover:scale-105 transition-transform duration-500 overflow-hidden`}>
                        {/* Image Container */}
                        <div className="w-full h-full bg-slate-900 rounded-2xl overflow-hidden relative">
                          {/* Actual Image with Fallback */}
                          <div className="w-full h-full relative">
                            {/* If image exists, show it */}
                            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                              {/* Fallback content if image doesn't load */}
                              <div className="text-center p-8 z-10">
                                <div className="text-6xl mb-4">{service.icon}</div>
                                {/* YAHAN TITLE KA COLOR PURPLE KAR DIYA HAI */}
                                <div className="text-white font-bold text-xl bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-purple-400/30">
                                  {service.title}
                                </div>
                                <div className="text-gray-300 text-sm bg-black/30 backdrop-blur-sm rounded-full px-4 py-1 inline-block">
                                  {service.title === "Website Development" && "Modern & Responsive"}
                                  {service.title === "App Development" && "iOS & Android"}
                                  {service.title === "Digital Marketing" && "Growth & Analytics"}
                                </div>
                              </div>
                              
                              {/* Try to load actual image */}
                              <div className="absolute inset-0">
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  className="object-cover"
                                  onError={(e) => {
                                    // If image fails to load, hide the image element
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          {/* Image overlay gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-purple-900/40 via-purple-900/10 to-transparent`}></div>
                          
                          {/* Additional Purple Overlay */}
                          <div className="absolute inset-0 bg-purple-900/10 hover:bg-purple-900/20 transition-all duration-300"></div>
                        </div>
                        
                        {/* Floating badge - Purple Theme */}
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm z-20 shadow-lg">
                          Popular
                        </div>
                      </div>
                      
                      {/* Floating Elements - Purple Theme */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/10 rounded-2xl border border-purple-400/20 backdrop-blur-sm animate-float"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-2xl border border-purple-400/20 backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `bg-gradient-to-r ${services[index].gradient} w-8` 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => goToSlide(index)}
              className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 ${
                currentSlide === index 
                  ? `bg-gradient-to-r ${service.gradient} border-transparent text-white` 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{service.icon}</div>
                <div className="text-left">
                  <div className="font-semibold text-lg">{service.title}</div>
                  <div className="text-sm opacity-80">Learn more →</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}