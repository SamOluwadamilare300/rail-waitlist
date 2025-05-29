import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 rounded-2xl text-zinc-400 py-12 mb-3 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/5 to-transparent opacity-50"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="group">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-300 bg-clip-text text-transparent mb-4 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                Rail
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
            <p className="mb-6 text-zinc-300 leading-relaxed">
              The next-generation e-commerce platform built for the African market, empowering businesses with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group relative p-3 bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700/50 hover:border-blue-500/50 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10">
                <FaXTwitter className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                <span className="sr-only">X</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/10 group-hover:to-purple-600/10 transition-all duration-300"></div>
              </a>
              
              <a href="#" className="group relative p-3 bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700/50 hover:border-pink-500/50 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/10">
                <AiFillTikTok className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                <span className="sr-only">Tiktok</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/0 to-red-500/0 group-hover:from-pink-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
              </a>
              
              <a href="#" className="group relative p-3 bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700/50 hover:border-purple-500/50 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/10">
                <FaInstagram className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                <span className="sr-only">Instagram</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group">
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">Download App</h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent rounded-full mb-4 group-hover:w-12 transition-all duration-300"></div>
            </div>
            <div className="space-y-4">
              {/* App Store Button */}
              <div className="group relative overflow-hidden">
                <div className="flex items-center px-4 py-3 bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 backdrop-blur-sm rounded-xl border border-zinc-600/30 cursor-not-allowed opacity-70 transition-all duration-300">
                  <div className="flex-shrink-0 mr-3">
                    <svg className="w-8 h-8 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.19 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-zinc-400 leading-tight mb-0.5">Coming Soon on</div>
                    <div className="text-sm font-semibold text-zinc-300 leading-tight">App Store</div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400 font-medium">
                  Soon
                </div>
              </div>

              {/* Google Play Button */}
              <div className="group relative overflow-hidden">
                <div className="flex items-center px-4 py-3 bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 backdrop-blur-sm rounded-xl border border-zinc-600/30 cursor-not-allowed opacity-70 transition-all duration-300">
                  <div className="flex-shrink-0 mr-3">
                    <svg className="w-8 h-8 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-zinc-400 leading-tight mb-0.5">Coming Soon on</div>
                    <div className="text-sm font-semibold text-zinc-300 leading-tight">Google Play</div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400 font-medium">
                  Soon
                </div>
              </div>

              {/* QR Code Section */}
              <div className="mt-6 p-4 bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-zinc-700/30">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg p-2 flex items-center justify-center">
                    <div className="w-full h-full bg-zinc-900 rounded grid grid-cols-4 gap-px">
                      {Array.from({length: 16}).map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-zinc-900'} rounded-sm`}></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Scan to get notified when our mobile app launches
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group">
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Platform</h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-4 group-hover:w-12 transition-all duration-300"></div>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="group flex items-center py-2 px-3 rounded-lg hover:bg-zinc-800/30 hover:text-white transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mr-3 group-hover:bg-blue-500 transition-colors duration-300"></span>
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center py-2 px-3 rounded-lg hover:bg-zinc-800/30 hover:text-white transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mr-3 group-hover:bg-blue-500 transition-colors duration-300"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center py-2 px-3 rounded-lg hover:bg-zinc-800/30 hover:text-white transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mr-3 group-hover:bg-blue-500 transition-colors duration-300"></span>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center py-2 px-3 rounded-lg hover:bg-zinc-800/30 hover:text-white transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mr-3 group-hover:bg-blue-500 transition-colors duration-300"></span>
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="group">
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Company</h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full mb-4 group-hover:w-12 transition-all duration-300"></div>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="group flex items-center py-2 px-3 rounded-lg hover:bg-zinc-800/30 hover:text-white transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mr-3 group-hover:bg-purple-500 transition-colors duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center py-2 px-3 rounded-lg hover:bg-zinc-800/30 hover:text-white transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mr-3 group-hover:bg-purple-500 transition-colors duration-300"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center py-2 px-3 rounded-lg hover:bg-zinc-800/30 hover:text-white transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mr-3 group-hover:bg-purple-500 transition-colors duration-300"></span>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center py-2 px-3 rounded-lg hover:bg-zinc-800/30 hover:text-white transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mr-3 group-hover:bg-purple-500 transition-colors duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-zinc-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Subtle glow effect on the border */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          
          <p className="text-zinc-400 font-medium">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Rail</span>. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="group relative py-2 px-4 rounded-lg hover:bg-zinc-800/30 hover:text-white transition-all duration-300">
              Privacy Policy
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="group relative py-2 px-4 rounded-lg hover:bg-zinc-800/30 hover:text-white transition-all duration-300">
              Terms of Service
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}