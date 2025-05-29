import { Card, CardContent } from "@/components/ui/card"

export default function Architecture() {
  const services = [
    { name: "API Gateway", port: 3000, description: "Request routing, authentication, rate limiting" },
    { name: "Auth Service", port: 3001, description: "User authentication and authorization" },
    { name: "Store Service", port: 3002, description: "Store management and configuration" },
    { name: "Product Service", port: 3003, description: "Product catalog and inventory" },
    { name: "Order Service", port: 3004, description: "Order processing and management" },
    { name: "Payment Service", port: 3005, description: "Payment processing and escrow" },
    { name: "Logistics Service", port: 3006, description: "Shipping and delivery management" },
    { name: "Analytics Service", port: 3007, description: "Business intelligence and reporting" },
    { name: "Notification Service", port: 3008, description: "Multi-channel notifications" },
    { name: "Chatbot Service", port: 3009, description: "AI-powered customer support" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#B09FD6]/10 via-[#F7D4EA]/10 to-[#87A9AB]/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A652AA]">Microservices Architecture</h2>
          <p className="text-xl text-[#87A9AB] max-w-3xl mx-auto">
            Rail is built as a distributed microservices architecture for scalability, resilience, and flexibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-[#B09FD6]/30 hover:border-[#A652AA]/50 transition-colors bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#A652AA]">{service.name}</h3>
                  <span className="px-2 py-1 bg-[#EAB6FE] text-[#A652AA] text-xs rounded-full font-medium">
                    Port {service.port}
                  </span>
                </div>
                <p className="text-[#87A9AB]">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#87A9AB]">
            Plus 10+ additional specialized services for advanced features like cryptocurrency, AR, voice commerce, and
            more.
          </p>
        </div>
      </div>
    </section>
  )
}
