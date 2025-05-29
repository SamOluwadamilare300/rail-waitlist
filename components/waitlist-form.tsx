"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Loader2, Mail, User, ArrowRight, Sparkles } from "lucide-react"
import { joinWaitlist } from "@/app/actions"
import { motion } from "framer-motion"
import SocialSharing from "./social-sharing"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    try {
      const result = await joinWaitlist(email, name)
      if (result.success) {
        setStatus("success")
        setMessage("You've been added to our waitlist! Check your email for confirmation.")
        setEmail("")
        setName("")
      } else {
        setStatus("error")
        setMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("An unexpected error occurred. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="waitlist" className="py-20 bg-zinc-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Early Access Available</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Success Story
              <br />
              <span className="text-zinc-400">Today</span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Be among the first entrepreneurs to experience Rail's game-changing platform. Your business transformation
              starts here.
            </p>
          </motion.div>

          {/* Main Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-zinc-200 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Form */}
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Secure Your Spot</h3>
                  <p className="text-zinc-600">Join 8,500+ entrepreneurs building the future of African e-commerce</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="pl-12 h-14 text-lg border-zinc-200 rounded-xl focus:border-emerald-500 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-12 h-14 text-lg border-zinc-200 rounded-xl focus:border-emerald-500 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold text-lg rounded-xl shadow-lg transition-all duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Securing Your Spot...
                      </>
                    ) : (
                      <>
                        Join the Revolution
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert className="mt-6 bg-emerald-50 border-emerald-200 rounded-xl">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <AlertDescription className="text-emerald-700 font-medium">{message}</AlertDescription>
                    </Alert>
                    <SocialSharing show={true} />
                  </motion.div>
                )}

                {status === "error" && (
                  <Alert className="mt-6 bg-red-50 border-red-200 rounded-xl">
                    <AlertDescription className="text-red-600 font-medium">{message}</AlertDescription>
                  </Alert>
                )}

                <div className="mt-8 pt-6 border-t border-zinc-100">
                  <p className="text-sm text-zinc-500 text-center">
                    Join 8,500+ entrepreneurs already building their success story
                  </p>
                </div>
              </div>

              {/* Right Side - Benefits */}
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 text-white">
                <div className="h-full flex flex-col justify-center">
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold mb-4">What you'll get:</h4>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">First Access</h5>
                        <p className="text-zinc-300 text-sm">Launch your store before anyone else</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">50% Launch Discount</h5>
                        <p className="text-zinc-300 text-sm">Exclusive pricing for early supporters</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Personal Onboarding</h5>
                        <p className="text-zinc-300 text-sm">1-on-1 setup assistance from our team</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Exclusive Community</h5>
                        <p className="text-zinc-300 text-sm">Connect with fellow entrepreneurs</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">8,500+</div>
                      <div className="text-zinc-300">Entrepreneurs waiting</div>
                      <div className="text-sm text-emerald-400 mt-2">85% to beta launch!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
