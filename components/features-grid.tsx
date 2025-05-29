import { ShoppingCart, Bot, LayoutGrid, CreditCard, Package, BarChart } from "lucide-react"

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Rail offers a comprehensive suite of features designed to power modern e-commerce businesses
          </p>
        </div>

        {/* Grid layout similar to the image structure */}
        <div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Large box - Main feature */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 row-span-2">
            <div className="bg-black text-white p-8 rounded-3xl h-full min-h-[400px] flex flex-col justify-between">
              <div>
                <ShoppingCart className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Multi-tenant E-commerce Platform</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Create and manage multiple online stores from a single platform. Built with microservices architecture
                  for ultimate scalability and performance.
                </p>
              </div>
              <div className="mt-8">
                <span className="text-sm text-zinc-400">Core Feature</span>
              </div>
            </div>
          </div>

          {/* Top right box */}
          <div className="col-span-12 md:col-span-6 lg:col-span-7">
            <div className="bg-zinc-100 p-6 rounded-3xl h-full min-h-[190px] flex flex-col justify-between">
              <div>
                <Bot className="h-10 w-10 mb-4 text-black" />
                <h3 className="text-xl font-semibold mb-2">Built-in AI Chatbot</h3>
                <p className="text-zinc-600">Intelligent customer support available 24/7 for every store</p>
              </div>
            </div>
          </div>

          {/* Middle left box */}
          <div className="col-span-6 md:col-span-3 lg:col-span-3">
            <div className="bg-zinc-900 text-white p-6 rounded-3xl h-full min-h-[190px] flex flex-col justify-between">
              <div>
                <LayoutGrid className="h-10 w-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Website Builder</h3>
                <p className="text-zinc-300 text-sm">Drag-and-drop interface</p>
              </div>
            </div>
          </div>

          {/* Middle right box */}
          <div className="col-span-6 md:col-span-3 lg:col-span-4">
            <div className="bg-white border-2 border-zinc-200 p-6 rounded-3xl h-full min-h-[190px] flex flex-col justify-between">
              <div>
                <CreditCard className="h-10 w-10 mb-4 text-black" />
                <h3 className="text-lg font-semibold mb-2">Advanced Payments</h3>
                <p className="text-zinc-600 text-sm">Paystack integration, escrow system, crypto payments</p>
              </div>
            </div>
          </div>

          {/* Bottom left box */}
          <div className="col-span-6 md:col-span-3 lg:col-span-4">
            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-3xl h-full min-h-[190px] flex flex-col justify-between">
              <div>
                <Package className="h-10 w-10 mb-4 text-black" />
                <h3 className="text-lg font-semibold mb-2">Inventory Management</h3>
                <p className="text-zinc-600 text-sm">Real-time stock tracking and management</p>
              </div>
            </div>
          </div>

          {/* Bottom right box */}
          <div className="col-span-6 md:col-span-3 lg:col-span-3">
            <div className="bg-black text-white p-6 rounded-3xl h-full min-h-[190px] flex flex-col justify-between">
              <div>
                <BarChart className="h-10 w-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-zinc-300 text-sm">Business insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
