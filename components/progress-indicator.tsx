"use client"

import { useEffect, useState } from "react"
import io from "socket.io-client"
import { motion } from "framer-motion"
import { Users, Target, Rocket } from "lucide-react"

export default function ProgressIndicator() {
  const [currentCount, setCurrentCount] = useState<number>(0)
  const milestones = [
    { count: 5000, label: "Early Access Unlocked", icon: Users, completed: false },
    { count: 10000, label: "Beta Launch", icon: Target, completed: false, current: false },
    { count: 25000, label: "Public Launch", icon: Rocket, completed: false },
  ]

  useEffect(() => {
    // Fetch the initial count
    fetch("/api/waitlist/count")
      .then(res => res.json())
      .then(data => setCurrentCount(data.count || 0))

    // Set up socket connection
    const socket = io({ path: "/api/socket.io" })

    socket.on("waitlist:update", () => {
      fetch("/api/waitlist/count")
        .then(res => res.json())
        .then(data => setCurrentCount(data.count || 0))
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  // Calculate milestone completion
  milestones.forEach(m => {
    if (currentCount >= m.count) m.completed = true
    if (
      currentCount >= m.count &&
      (milestones.findIndex(ms => ms.count === m.count) === milestones.length - 1 ||
        currentCount < milestones[milestones.findIndex(ms => ms.count === m.count) + 1].count)
    ) {
      m.current = true
    } else {
      m.current = false
    }
  })

  const nextMilestone =
    milestones.find(m => !m.completed) || milestones[milestones.length - 1]
  const progressPercentage = nextMilestone
    ? Math.min((currentCount / nextMilestone.count) * 100, 100)
    : 100

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Movement</h2>
          <p className="text-xl text-zinc-600 mb-12">
            Help us reach our next milestone and unlock exclusive benefits for the community
          </p>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">{currentCount.toLocaleString()} entrepreneurs joined</span>
              <span className="text-lg font-semibold">{nextMilestone.count.toLocaleString()} goal</span>
            </div>
            <div className="w-full bg-zinc-200 rounded-full h-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="text-center mt-2 text-zinc-600">{Math.round(progressPercentage)}% complete</div>
          </div>

          {/* Milestones */}
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border-2 ${
                  milestone.completed
                    ? "bg-emerald-50 border-emerald-200"
                    : milestone.current
                      ? "bg-blue-50 border-blue-200"
                      : "bg-zinc-50 border-zinc-200"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    milestone.completed
                      ? "bg-emerald-500 text-white"
                      : milestone.current
                        ? "bg-blue-500 text-white"
                        : "bg-zinc-300 text-zinc-600"
                  }`}
                >
                  <milestone.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold mb-2">{milestone.count.toLocaleString()}</div>
                <div
                  className={`font-medium ${
                    milestone.completed ? "text-emerald-700" : milestone.current ? "text-blue-700" : "text-zinc-600"
                  }`}
                >
                  {milestone.label}
                </div>
                {milestone.completed && <div className="text-sm text-emerald-600 mt-2">✓ Unlocked</div>}
                {milestone.current && <div className="text-sm text-blue-600 mt-2">In Progress</div>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}