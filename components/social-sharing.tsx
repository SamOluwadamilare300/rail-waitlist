"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, Link, Check } from "lucide-react"
import { motion } from "framer-motion"

interface SocialSharingProps {
  show: boolean
}

export default function SocialSharing({ show }: SocialSharingProps) {
  const [copied, setCopied] = useState(false)

  const shareText =
    "I just joined the waitlist for Rail - the revolutionary e-commerce platform for African entrepreneurs! 🚀"
  const shareUrl = "https://rail-ecommerce.com"

  const handleShare = (platform: string) => {
    const encodedText = encodeURIComponent(shareText)
    const encodedUrl = encodeURIComponent(shareUrl)

    let url = ""
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
        break
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`
        break
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodedText}`
        break
    }

    if (url) {
      window.open(url, "_blank", "width=600,height=400")
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6 p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200"
    >
      <h4 className="text-lg font-semibold mb-3 text-center">Spread the word and help us grow! 🎉</h4>
      <p className="text-sm text-zinc-600 text-center mb-4">
        Share Rail with your network and help more entrepreneurs discover the future of e-commerce
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {/* <Button
          onClick={() => handleShare("twitter")}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
          size="sm"
        >
          <Twitter className="w-4 h-4 mr-2" />
          Twitter
        </Button> */}

        {/* <Button
          onClick={() => handleShare("facebook")}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
          size="sm"
        >
          <Facebook className="w-4 h-4 mr-2" />
          Facebook
        </Button> */}

        {/* <Button
          onClick={() => handleShare("linkedin")}
          className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl"
          size="sm"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </Button> */}

        <Button
          onClick={copyToClipboard}
          variant="outline"
          className="border-zinc-300 hover:bg-zinc-50 rounded-xl"
          size="sm"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2 text-emerald-600" />
              Copied!
            </>
          ) : (
            <>
              <Link className="w-4 h-4 mr-2" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </motion.div>
  )
}
