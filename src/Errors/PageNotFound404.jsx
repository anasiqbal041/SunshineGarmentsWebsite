import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function PageNotFound() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-500 overflow-hidden">
      <Helmet>
        <title>Lost in Space | Sunshine Premium</title>
      </Helmet>
      <Navbar />

      <style dangerouslySetInnerHTML={{
        __html: `
        .rocket-launch {
            animation: launch 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes launch {
            from { transform: translateY(100vh) scale(0.5); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
        }

        .stars-twinkle {
            animation: twinkling 4s ease-in-out infinite alternate;
        }

        @keyframes twinkling {
            from { opacity: 0.3; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1.1); }
        }

        .text-appear {
            opacity: 0;
            animation: appear 1.5s ease-out forwards;
            animation-delay: 2s;
        }

        @keyframes appear {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      ` }} />

      <main className="container mx-auto px-6 pt-40 pb-24 text-center">
        <div className="relative inline-block mb-12">
          {/* SVG Illustration - Simplified and polished */}
          <div className="rocket-launch max-w-[500px] mx-auto opacity-0">
            <svg viewBox="0 0 1123 837" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
              <g id="sky">
                <rect x="150" y="50" width="823" height="737" rx="40" fill="gray" fillOpacity="0.05" className="dark:fill-white/5" />
                <g id="stars" className="stars-twinkle">
                  {[...Array(20)].map((_, i) => (
                    <circle key={i} cx={Math.random() * 800 + 150} cy={Math.random() * 500 + 100} r={Math.random() * 2 + 1} fill="currentColor" className="text-gray-200 dark:text-gray-700" />
                  ))}
                </g>
                <g id="rocket_minimal">
                  <path d="M561 200 C580 100 620 100 639 200 L639 500 L561 500 Z" fill="#ec4899" />
                  <rect x="561" y="500" width="78" height="20" fill="#db2777" />
                  <path d="M561 520 L550 550 L570 550 Z" fill="#f43f5e" />
                  <path d="M639 520 L650 550 L630 550 Z" fill="#f43f5e" />
                </g>
              </g>
            </svg>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-[180px] font-black text-gray-900/5 dark:text-white/5 leading-none select-none">404</span>
          </div>
        </div>

        <div className="text-appear relative z-10">
          <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block animate-bounce">Out of Orbit</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">Lost in the Sunshine?</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium max-w-lg mx-auto mb-12 leading-relaxed italic">
            "Beauty is in the path we take, even if we wander a little off course."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/" className="px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all shadow-xl active:scale-95">
              Return to Home
            </Link>
            <Link to="/shop" className="px-12 py-5 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:border-pink-500 hover:text-pink-500 transition-all active:scale-95">
              Visit Shop
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PageNotFound;
