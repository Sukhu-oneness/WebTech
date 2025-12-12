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
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern - Hidden on mobile to reduce complexity */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Slider */}
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl sm:shadow-2xl">
          {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
          <button 
            onClick={prevSlide}
            className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full items-center justify-center transition-all duration-300 group hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full items-center justify-center transition-all duration-300 group hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Content */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={service.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                      {/* Service Header */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`text-3xl sm:text-4xl lg:text-5xl p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent animate-bounce`}>
                            {service.icon}
                          </div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 sm:gap-3 group">
                            <div className={`min-w-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${service.gradient} rounded-full group-hover:scale-150 transition-transform duration-300`}></div>
                            <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 border-t border-white/10">
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center group">
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                              {value}
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className={`group bg-gradient-to-r ${service.gradient} text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden w-full sm:w-auto`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                          {service.cta}
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    {/* Image Box */}
                    <div className="relative order-1 lg:order-2 mb-6 lg:mb-0 w-full">
                      <div className={`relative bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl lg:rounded-3xl p-1 aspect-square max-w-sm sm:max-w-md mx-auto transform hover:scale-105 transition-transform duration-500 overflow-hidden`}>
                        {/* Image Container */}
                        <div className="w-full h-full bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden relative">
                          {/* Actual Image with Fallback */}
                          <div className="w-full h-full relative">
                            {/* Fallback content if image doesn't load */}
                            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                              <div className="text-center p-4 sm:p-6 md:p-8 z-10">
                                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{service.icon}</div>
                                <div className="text-white font-bold text-base sm:text-lg md:text-xl bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-3 border border-purple-400/30 mb-2">
                                  {service.title}
                                </div>
                                <div className="text-gray-300 text-xs sm:text-sm bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-1 inline-block">
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
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                  onError={(e) => {
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
                        
                        {/* Floating badge */}
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm z-20 shadow-lg">
                          Popular
                        </div>
                      </div>
                      
                      {/* Floating Elements - Hidden on mobile */}
                      <div className="hidden sm:block absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/10 rounded-2xl border border-purple-400/20 backdrop-blur-sm animate-float"></div>
                      <div className="hidden sm:block absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/10 rounded-2xl border border-purple-400/20 backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `bg-gradient-to-r ${services[index].gradient} w-6 sm:w-8` 
                    : 'bg-white/30 hover:bg-white/50 w-2 sm:w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => goToSlide(index)}
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 ${
                currentSlide === index 
                  ? `bg-gradient-to-r ${service.gradient} border-transparent text-white` 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-xl sm:text-2xl">{service.icon}</div>
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base md:text-lg">{service.title}</div>
                  <div className="text-xs sm:text-sm opacity-80">Learn more →</div>
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
        
        /* Custom breakpoint for extra small devices */
        @media (min-width: 475px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}