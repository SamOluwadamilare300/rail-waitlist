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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border-2 ${(feature.color in bgColorClasses ? bgColorClasses[feature.color as keyof typeof bgColorClasses] : "bg-zinc-50 border-zinc-200")} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClasses[feature.color]}`}>
                  {feature.icon}
                </div>

                <div className="mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    feature.color === "emerald"
                      ? "bg-emerald-200 text-emerald-800"
                      : feature.color === "blue"
                        ? "bg-blue-200 text-blue-800"
                        : feature.color === "purple"
                          ? "bg-purple-200 text-purple-800"
                          : "bg-teal-200 text-teal-800"
                  }`}>
                    {feature.benefit}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{feature.description}</p>
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