"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen bg-black rounded-b-lg py-8 px-4">
      <div className="max-w-9xl mx-auto">
        {/* Container with rounded corners like the reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
         className="bg-white rounded-3xl shadow-sm border border-zinc-200 overflow-hidden"
        >
          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-between z-50 sticky top-4 p-6 md:p-8 bg-white/80 backdrop-blur-lg rounded-2xl mx-6 shadow-lg border border-white/20"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">Rail</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-zinc-600 hover:text-black text-md transition-colors">
                Solutions
              </a>
              <a href="#" className="text-zinc-600 hover:text-black text-lg transition-colors">
                Success Stories
              </a>
              <a href="#" className="text-zinc-600 hover:text-black text-lg transition-colors">
                Resources
              </a>
              <a href="#" className="text-zinc-600 hover:text-black text-lg transition-colors">
                Pricing
              </a>
            </div>
            <Button
              className="bg-black text-white hover:bg-zinc-800 rounded-xl px-6"
              onClick={() => {
                const element = document.getElementById("waitlist")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Join Waitlist
            </Button>
          </motion.nav>

          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 p-6 md:p-8 pt-0">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col mt-10 justify-center space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  the only solution
                  <br />
                  you need to
                  <br />
                  <span className="text-zinc-400">
                    grow your business
                    <br />
                    online
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-600 max-w-lg leading-relaxed">
                  Launch your online store in minutes, reach more customers, and increase sales with our all-in-one
                  e-commerce platform designed for African entrepreneurs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-4 text-lg font-medium"
                  onClick={() => {
                    const element = document.getElementById("waitlist")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Start Selling Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 rounded-xl px-8 py-4 text-lg font-medium"
                  onClick={() => {
                    const element = document.getElementById("features")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  See How It Works
                </Button>
              </div>

              {/* Rating Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-3 bg-orange-50 rounded-2xl p-4 w-fit"
              >
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold">Coming Soon</span>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-600">Built for Africa</span>
              </motion.div>
            </motion.div>

            {/* Right Visual - Mobile Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Main Mobile Device */}
                <div className="relative z-10 bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-black h-8 rounded-t-[2.5rem] flex items-center justify-center">
                      <div className="w-20 h-1 bg-white rounded-full"></div>
                    </div>

                    {/* App Content */}
                    <div className="p-4 space-y-4 h-96">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">R</span>
                          </div>
                          <span className="font-bold">My Store</span>
                        </div>
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <span className="text-emerald-600 text-xs">●</span>
                        </div>
                      </div>

                      {/* Sales Stats */}
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-4 text-white">
                        <div className="text-sm opacity-90">Today's Sales</div>
                        <div className="text-2xl font-bold">₦847,500</div>
                        <div className="text-sm opacity-90">+23% from yesterday</div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-zinc-100 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold">156</div>
                          <div className="text-xs text-zinc-600">Orders</div>
                        </div>
                        <div className="bg-zinc-100 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold">2.4k</div>
                          <div className="text-xs text-zinc-600">Visitors</div>
                        </div>
                      </div>

                      {/* Recent Order */}
                      <div className="bg-white border border-zinc-200 rounded-xl p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-bold">AO</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">New Order #1247</div>
                            <div className="text-xs text-zinc-500">Adebayo Ogundimu</div>
                          </div>
                          <div className="text-emerald-600 font-bold text-sm">₦15,000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Mobile Device (Background) */}
                <div className="absolute -right-8 top-12 z-0 bg-zinc-300 rounded-[3rem] p-2 shadow-xl opacity-60 scale-75">
                  <div className="bg-white rounded-[2.5rem] w-64 h-96">
                    <div className="bg-zinc-200 h-8 rounded-t-[2.5rem] flex items-center justify-center">
                      <div className="w-16 h-1 bg-zinc-400 rounded-full"></div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-zinc-200 rounded"></div>
                      <div className="h-20 bg-zinc-100 rounded-xl"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-12 bg-zinc-100 rounded-lg"></div>
                        <div className="h-12 bg-zinc-100 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Success Notification */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -top-4 -left-4 bg-emerald-500 text-white rounded-xl p-3 shadow-lg z-20"
                >
                  <div className="text-xs font-medium">Store Live!</div>
                </motion.div>

                {/* Floating Order Notification */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-zinc-200 z-20"
                >
                  <div className="text-xs text-zinc-500 mb-1">New Sale</div>
                  <div className="text-sm font-semibold">₦25,000</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
