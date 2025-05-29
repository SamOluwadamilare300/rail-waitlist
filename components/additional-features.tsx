import {
  Smartphone,
  Search,
  Users,
  Bitcoin,
  Mic,
  Glasses,
  TrendingUp,
  Truck,
  Bell,
  HardDrive,
  Globe,
} from "lucide-react"

export default function AdditionalFeatures() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Responsive",
      description: "Optimized for all devices",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Built-in SEO tools",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-vendor Support",
      description: "Multiple vendors per platform",
    },
    {
      icon: <Bitcoin className="h-8 w-8" />,
      title: "Crypto Services",
      description: "Bitcoin/Ethereum, NFT marketplace",
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Voice Commerce",
      description: "Speech recognition ordering",
    },
    {
      icon: <Glasses className="h-8 w-8" />,
      title: "AR Services",
      description: "3D models, virtual try-on",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Intelligence",
      description: "Real-time metrics",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics Integration",
      description: "GIG, Kwik, DHL integration",
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Notifications",
      description: "Real-time alerts",
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "File Storage",
      description: "AWS S3 and CDN",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Domain Management",
      description: "Custom domains, SSL",
    },
  ]

  return (
    <section className="py-20 bg-zinc-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Features</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Comprehensive tools and integrations for modern e-commerce
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-zinc-200 hover:shadow-md transition-shadow"
            >
              <div className="text-black mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
