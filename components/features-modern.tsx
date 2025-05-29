"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Smartphone, MessageCircle, CreditCard, BarChart3, Globe, Zap, ShoppingCart, Bot, LayoutGrid, Package } from "lucide-react"
import { JSX } from "react"

export default function FeaturesModern() {
  const mainFeature = {
    icon: <ShoppingCart className="h-14 w-14" />,
    title: "Multi-tenant E-commerce Platform",
    description: "Create and manage multiple online stores from a single platform. Built for ultimate scalability and performance.",
    benefit: "Core Feature",
    color: "black"
  }

  type FeatureColor = keyof typeof colorClasses;

  const gridFeatures: {
    icon: JSX.Element;
    title: string;
    description: string;
    benefit: string;
    color: FeatureColor;
    size: string;
  }[] = [
    {
      icon: <Bot className="h-10 w-10" />,
      title: "Built-in AI Chatbot",
      description: "Intelligent customer support available 24/7 for every store",
      benefit: "Always Available",
      color: "zinc",
      size: "large"
    },
    {
      icon: <LayoutGrid className="h-10 w-10" />,
      title: "Website Builder",
      description: "Drag-and-drop interface for beautiful stores",
      benefit: "Easy Setup",
      color: "dark",
      size: "small"
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Advanced Payments",
      description: "Paystack integration, escrow system, crypto payments",
      benefit: "Fast Payments",
      color: "white",
      size: "medium"
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "Inventory Management",
      description: "Real-time stock tracking and management",
      benefit: "Smart Tracking",
      color: "light",
      size: "medium"
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Analytics Dashboard",
      description: "Business insights and performance metrics",
      benefit: "Data-Driven",
      color: "dark",
      size: "small"
    }
  ]

  const additionalFeatures: {
    icon: JSX.Element;
    title: string;
    description: string;
    benefit: string;
    color: FeatureColor;
  }[] = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increase Your Sales",
      description: "Boost revenue by up to 300% with AI-powered recommendations and smart upselling",
      benefit: "More Revenue",
      color: "emerald",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Reach More Customers",
      description: "Connect with millions of African shoppers through our integrated marketplace",
      benefit: "Bigger Audience",
      color: "blue",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Sell Anywhere, Anytime",
      description: "Mobile-first design ensures your customers can shop seamlessly on any device",
      benefit: "24/7 Sales",
      color: "purple",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Go Global Easily",
      description: "Expand beyond borders with built-in international shipping and currency support",
      benefit: "Global Reach",
      color: "teal",
    }
  ]

  const colorClasses = {
    emerald: "bg-emerald-500 text-white",
    blue: "bg-blue-500 text-white",
    purple: "bg-purple-500 text-white",
    teal: "bg-teal-500 text-white",
    black: "bg-black text-white",
    zinc: "bg-zinc-900 text-white",
    dark: "bg-zinc-800 text-white",
    white: "bg-white text-black border-2 border-zinc-200",
    light: "bg-zinc-50 text-black border border-zinc-200"
  }

  const bgColorClasses = {
    emerald: "bg-emerald-50 border-emerald-200",
    blue: "bg-blue-50 border-blue-200",
    purple: "bg-purple-50 border-purple-200",
    teal: "bg-teal-50 border-teal-200",
  }



  const getGridClasses = (size: string) => {
    switch(size) {
      case "large": return "col-span-12 md:col-span-6 lg:col-span-7"
      case "medium": return "col-span-6 md:col-span-3 lg:col-span-4"
      case "small": return "col-span-6 md:col-span-3 lg:col-span-3"
      default: return "col-span-6"
    }
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-zinc-50 to-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Everything You Need to Succeed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Platform Features
            <br />
            <span className="text-zinc-400">Built for Modern Business</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Rail offers a comprehensive suite of features designed to power modern e-commerce businesses across Africa
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto mb-16">
          {/* Large Main Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 lg:col-span-5 row-span-2"
          >
            <div className="bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white p-8 rounded-3xl h-full min-h-[400px] flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Background gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
                    {mainFeature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{mainFeature.title}</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {mainFeature.description}
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <span className="inline-flex items-center px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium rounded-full">
                  {mainFeature.benefit}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Grid Features */}
          {gridFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={getGridClasses(feature.size)}
            >
              <div className={`p-6 rounded-3xl h-full min-h-[190px] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colorClasses[feature.color]}`}>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-4">
                    {feature.color === 'white' || feature.color === 'light' ? (
                      <div className="p-2 bg-zinc-100 rounded-xl w-fit">
                        {feature.icon}
                      </div>
                    ) : (
                      <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl w-fit">
                        {feature.icon}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className={`text-sm ${feature.color === 'white' || feature.color === 'light' ? 'text-zinc-600' : 'text-zinc-300'}`}>
                    {feature.description}
                  </p>
                </div>
                
                <div className="mt-4 relative z-10">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                    feature.color === 'white' || feature.color === 'light' 
                      ? 'bg-zinc-100 text-zinc-700' 
                      : 'bg-white/10 text-white/80'
                  }`}>
                    {feature.benefit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
       {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Rail?</h3>
            <p className="text-xl text-zinc-600">Every feature is designed with one goal: your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glassmorphic card container */}
                <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-zinc-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating background blur effect */}
                  <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${
                    feature.color === "emerald" ? "bg-emerald-400" :
                    feature.color === "blue" ? "bg-blue-400" :
                    feature.color === "purple" ? "bg-purple-400" : "bg-teal-400"
                  }`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon container with enhanced styling */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${colorClasses[feature.color]}`}>
                        {feature.icon}
                      </div>
                    </div>

                    {/* Badge with glassmorphic effect */}
                    <div className="mb-4">
                      <span className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                        feature.color === "emerald"
                          ? "bg-emerald-100/70 border-emerald-200/50 text-emerald-700 group-hover:bg-emerald-100 group-hover:shadow-emerald-200/50"
                          : feature.color === "blue"
                            ? "bg-blue-100/70 border-blue-200/50 text-blue-700 group-hover:bg-blue-100 group-hover:shadow-blue-200/50"
                            : feature.color === "purple"
                              ? "bg-purple-100/70 border-purple-200/50 text-purple-700 group-hover:bg-purple-100 group-hover:shadow-purple-200/50"
                              : "bg-teal-100/70 border-teal-200/50 text-teal-700 group-hover:bg-teal-100 group-hover:shadow-teal-200/50"
                      } shadow-sm group-hover:shadow-md`}>
                        {feature.benefit}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 text-zinc-800 group-hover:text-zinc-900 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    feature.color === "emerald" ? "bg-gradient-to-r from-emerald-400 to-emerald-500" :
                    feature.color === "blue" ? "bg-gradient-to-r from-blue-400 to-blue-500" :
                    feature.color === "purple" ? "bg-gradient-to-r from-purple-400 to-purple-500" : 
                    "bg-gradient-to-r from-teal-400 to-teal-500"
                  }`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-emerald-600/10 opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                Join thousands of African entrepreneurs who are already building their success story with Rail
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                onClick={() => {
                  const element = document.getElementById("waitlist")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Join the Waitlist Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}