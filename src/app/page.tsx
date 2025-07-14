"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const screenshots = [
  "/images/home-dashboard.png",
  "/images/dining-hall-hours.png",
  "/images/nutrition-tracking.png",
  "/images/meal-log.png",
  "/images/about.png",
];

const screenshotTitles = [
  "Home Dashboard",
  "Dining Hall Hours",
  "Nutrition Tracking",
  "Meal Log",
  "About"
];

// Simple scroll-reveal animation
function useSectionReveal() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('[data-section]').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add("animate-section");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useSectionReveal();

  return (
    <div className="min-h-screen relative font-sans bg-gradient-to-br from-blue-200 via-white to-blue-300 overflow-x-hidden">
      {/* Animated Hero Background */}
      <div className="absolute inset-0 -z-10 animate-gradient-move bg-gradient-to-tr from-blue-400/40 via-blue-200/30 to-purple-200/40 blur-2xl" />
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-tr from-blue-300/40 via-blue-100/0 to-transparent rounded-b-[50%] blur-2xl z-0" />
      <div className="absolute bottom-0 right-0 w-1/2 h-64 bg-gradient-to-tl from-blue-200/60 via-white/0 to-transparent rounded-tl-[60%] blur-2xl z-0" />

      {/* Floating Pill Navbar - Mobile Responsive */}
      <nav className="absolute left-1/2 -translate-x-1/2 top-4 sm:top-8 z-20 flex items-center bg-gradient-to-r from-blue-600/90 to-purple-500/90 backdrop-blur-md text-white rounded-full shadow-2xl px-4 sm:px-10 py-3 w-[95vw] sm:w-[90vw] max-w-3xl sm:min-w-[500px] border border-white/20">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight">Bfuel</span>
        </div>
        {/* Center: Nav Links - Desktop */}
        <div className="hidden md:flex gap-x-4 items-center justify-center">
          <a href="#features" className="px-6 py-2 rounded-full text-base font-medium hover:bg-white/20 transition">Features</a>
          <a href="#gallery" className="px-6 py-2 rounded-full text-base font-medium hover:bg-white/20 transition">Gallery</a>
          <a href="#testimonial" className="px-6 py-2 rounded-full text-base font-medium hover:bg-white/20 transition">Testimonial</a>
        </div>
        {/* Right: About Button - Desktop */}
        <div className="hidden md:flex flex-1 items-center justify-end">
          <a href="#about" className="px-6 py-2 rounded-full text-base font-medium bg-white text-blue-700 border border-white hover:bg-blue-50 transition">About</a>
        </div>
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-8 h-8"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40 p-4 w-[90vw] max-w-[300px]">
          <div className="flex flex-col gap-2">
            <a href="#features" className="px-4 py-2 rounded-lg text-blue-700 font-medium hover:bg-blue-50 transition" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#gallery" className="px-4 py-2 rounded-lg text-blue-700 font-medium hover:bg-blue-50 transition" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
            <a href="#testimonial" className="px-4 py-2 rounded-lg text-blue-700 font-medium hover:bg-blue-50 transition" onClick={() => setIsMobileMenuOpen(false)}>Testimonial</a>
            <a href="#about" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          </div>
        </div>
      )}

      {/* Hero Section - Mobile Responsive */}
      <section data-section className="relative w-full max-w-3xl text-center py-16 sm:py-20 px-4 mx-auto z-10 opacity-0 translate-y-8 transition-all duration-700 mt-20 sm:mt-24" id="hero">
        {/* Animated SVG background shape */}
        <svg className="absolute inset-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[450px] sm:h-[600px] -z-10 animate-pulse-slow blur-xl" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="400" cy="300" rx="380" ry="280" fill="url(#heroGradient)" fillOpacity="0.18" />
          <ellipse cx="400" cy="300" rx="350" ry="250" fill="url(#heroGradient)" fillOpacity="0.12" />
          <ellipse cx="400" cy="300" rx="320" ry="220" fill="url(#heroGradient)" fillOpacity="0.08" />
          <defs>
            <linearGradient id="heroGradient" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60a5fa" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
        {/* Badge */}
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-400 text-white font-semibold text-sm shadow-md animate-fade-in">For College Students</div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-700 mb-4 drop-shadow-lg animate-hero-title">Bfuel</h1>
        <p className="text-lg sm:text-2xl text-gray-700 mb-4 sm:mb-6 animate-hero-sub">Smart meal planning for college dining</p>
        <p className="text-sm sm:text-md text-gray-500 mb-6 sm:mb-8 animate-hero-desc px-2">
          Effortlessly log your meals, track calories, snap food photos, and monitor your nutrition goals—all in one sleek app. Stay on top of your health and make the most of your campus dining experience.
        </p>
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 animate-hero-btn px-4">
          <a href="#gallery" className="w-full sm:w-auto inline-block bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold shadow-xl hover:scale-105 hover:from-blue-700 hover:to-purple-600 transition-transform duration-300 text-center">See App Screenshots</a>
          <a href="#about" className="w-full sm:w-auto inline-block bg-white text-blue-700 border border-blue-700 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold shadow hover:bg-blue-50 transition text-center">Contact Us</a>
        </div>
        {/* Animated scroll-down indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 animate-bounce">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </section>

      {/* Features Section - Mobile Responsive */}
      <section data-section className="relative w-full max-w-4xl py-12 sm:py-16 px-4 mx-auto z-10 opacity-0 translate-y-8 transition-all duration-700" id="features">
        {/* Section background shape */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100/60 via-purple-100/40 to-transparent rounded-3xl blur-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Snap & Log Meals */}
          <div className="rounded-3xl bg-white/30 backdrop-blur-md shadow-xl border border-white/40 p-6 sm:p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <div className="mb-4 flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-green-300 via-blue-200 to-blue-400 shadow-md">
              {/* Camera SVG */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="sm:w-8 sm:h-8"><rect width="24" height="24" rx="12" fill="none"/><path d="M12 17a3 3 0 100-6 3 3 0 000 6z" fill="#2563eb"/><path d="M4 8.5A2.5 2.5 0 016.5 6h1.086a1 1 0 00.707-.293l.914-.914A2 2 0 0110.914 4h2.172a2 2 0 011.414.586l.914.914a1 1 0 00.707.293H17.5A2.5 2.5 0 0120 8.5v7A2.5 2.5 0 0117.5 18h-11A2.5 2.5 0 014 15.5v-7z" fill="#60a5fa"/></svg>
            </div>
            <h3 className="font-extrabold text-lg sm:text-xl text-blue-800 mb-2 text-center">Snap & Log Meals</h3>
            <p className="text-gray-600 text-center mb-4 text-sm sm:text-base">Take pictures of your food and log your meals in seconds.</p>
            <a href="#gallery" className="text-blue-600 hover:text-blue-800 font-medium text-sm transition">Learn More →</a>
          </div>
          {/* Track Nutrition */}
          <div className="rounded-3xl bg-white/30 backdrop-blur-md shadow-xl border border-white/40 p-6 sm:p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <div className="mb-4 flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-purple-300 via-blue-200 to-blue-400 shadow-md">
              {/* Chart SVG */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="sm:w-8 sm:h-8"><rect width="24" height="24" rx="12" fill="none"/><path d="M7 17V9a1 1 0 112 0v8a1 1 0 11-2 0zm4 0V7a1 1 0 112 0v10a1 1 0 11-2 0zm4 0v-4a1 1 0 112 0v4a1 1 0 11-2 0z" fill="#a78bfa"/></svg>
            </div>
            <h3 className="font-extrabold text-lg sm:text-xl text-blue-800 mb-2 text-center">Track Nutrition</h3>
            <p className="text-gray-600 text-center mb-4 text-sm sm:text-base">Monitor calories, protein, carbs, and fat with daily targets and progress bars.</p>
            <a href="#gallery" className="text-blue-600 hover:text-blue-800 font-medium text-sm transition">Learn More →</a>
          </div>
          {/* Made for College */}
          <div className="rounded-3xl bg-white/30 backdrop-blur-md shadow-xl border border-white/40 p-6 sm:p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <div className="mb-4 flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-blue-300 via-green-200 to-purple-300 shadow-md">
              {/* Graduation Cap SVG */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="sm:w-8 sm:h-8"><rect width="24" height="24" rx="12" fill="none"/><path d="M12 6l8 4-8 4-8-4 8-4zm0 8v4m0 0a2 2 0 104 0" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="font-extrabold text-lg sm:text-xl text-blue-800 mb-2 text-center">Made for College</h3>
            <p className="text-gray-600 text-center mb-4 text-sm sm:text-base">Designed for campus dining halls—personalized stats and goals just for you.</p>
            <a href="#gallery" className="text-blue-600 hover:text-blue-800 font-medium text-sm transition">Learn More →</a>
          </div>
        </div>
      </section>

      {/* Gallery Section - Mobile Responsive */}
      <section data-section className="relative w-full max-w-5xl py-16 sm:py-20 px-4 mx-auto z-10 opacity-0 translate-y-8 transition-all duration-700" id="gallery">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 sm:mb-6">App Screenshots</h2>
          <p className="text-base sm:text-lg text-gray-600">See how Bfuel transforms your dining experience</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {screenshots.map((src, i) => (
            <div key={src} className="text-center">
              {/* Phone Frame - Responsive */}
              <div className="w-[180px] sm:w-[200px] lg:w-[220px] h-[360px] sm:h-[400px] lg:h-[450px] rounded-[32px] sm:rounded-[40px] bg-white/30 backdrop-blur-md shadow-2xl border border-white/40 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300 mb-3 sm:mb-4">
                <Image 
                  src={src} 
                  alt={`Bfuel ${screenshotTitles[i]}`} 
                  width={192} 
                  height={410} 
                  className="object-cover w-[160px] sm:w-[176px] lg:w-[192px] h-[340px] sm:h-[380px] lg:h-[410px] rounded-[24px] sm:rounded-[28px] border border-blue-200" 
                />
              </div>
              
              {/* Simple Title - Responsive */}
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-1">{screenshotTitles[i]}</h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-[180px] sm:max-w-[220px] mx-auto leading-relaxed">
                {i === 0 && "Your personalized dashboard with daily nutrition overview"}
                {i === 1 && "Check dining hall hours and plan your meals"}
                {i === 2 && "Track your daily nutrition goals and progress"}
                {i === 3 && "Snap photos and let AI log your nutrition"}
                {i === 4 && "Learn more about Bfuel and get support"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* UCLA First Campus Section */}
      <section data-section className="relative w-full max-w-2xl py-12 sm:py-16 px-4 mx-auto z-10 opacity-0 translate-y-8 transition-all duration-700" id="testimonial">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 sm:p-8 relative overflow-hidden text-center">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-8 sm:-translate-y-10 translate-x-8 sm:translate-x-10 opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full translate-y-6 sm:translate-y-8 -translate-x-6 sm:-translate-x-8 opacity-60"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">First Campus to Do This</h2>
            <p className="text-lg sm:text-xl font-semibold text-gray-700">UCLA</p>
          </div>
        </div>
      </section>

      {/* About Section - Mobile Responsive */}
      <section data-section className="relative w-full max-w-4xl py-16 sm:py-20 px-4 mx-auto z-10 opacity-0 translate-y-8 transition-all duration-700" id="about">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 sm:mb-6">About Bfuel</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Bfuel is built to help college students make smarter dining choices, track their nutrition, and reach their fitness goals—all in a fun, easy-to-use app. We&apos;re expanding to more campuses soon!
          </p>
        </div>
        
        {/* Contact & Social */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Contact Info */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700">Get in Touch</h3>
              <div className="flex flex-col gap-3 sm:gap-4 items-center w-full">
                <a href="mailto:ahmadwajid@ucla.edu" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Developer</span>
                </a>
                <a href="#about" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <span>Learn More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Connect With Me</h3>
              <div className="flex gap-4 justify-center">
                <a href="mailto:ahmadwajid@ucla.edu" className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg" title="Email">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a href="https://github.com/AhmadWajid" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg" title="GitHub">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ahmad-wajid/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg" title="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Responsive */}
      <section data-section className="relative w-full max-w-4xl py-16 sm:py-20 px-4 mx-auto z-10 opacity-0 translate-y-8 transition-all duration-700">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 sm:mb-6">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-gray-600">Everything you need to know about Bfuel</p>
        </div>
        
        <div className="grid gap-4 sm:gap-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/40 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">How does Bfuel work?</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Simply take a photo of your meal, and Bfuel will help you log it and track your nutrition goals automatically. Our AI-powered system recognizes food items and calculates nutritional information for you.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/40 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">Is Bfuel free to use?</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Bfuel offers both free and premium features to help you achieve your nutrition goals. Start with our free tier and upgrade when you&apos;re ready for advanced analytics and personalized recommendations.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/40 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">Can I use Bfuel at any dining hall?</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Bfuel is currently available at UCLA and designed to work with any college dining hall. We&apos;re actively expanding to more campuses to help students everywhere track their nutrition goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-6 sm:py-8 text-center text-gray-400 text-xs sm:text-sm mt-auto z-10 bg-white/30 backdrop-blur-md border-t border-white/40">
        <div className="max-w-4xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Bfuel. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-3 sm:mt-4">
            <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
