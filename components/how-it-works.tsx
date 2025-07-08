import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, HandHeart, Truck, Smile } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Browse or Request",
      description: "Find fresh produce from local farmers or request specific crops to be grown",
      badge: "Step 1",
    },
    {
      icon: HandHeart,
      title: "Fund & Support",
      description: "Support farmers by funding their crops or pre-ordering produce directly",
      badge: "Step 2",
    },
    {
      icon: Truck,
      title: "Track Growth",
      description: "Watch your crops grow with real-time updates, photos, and farmer insights",
      badge: "Step 3",
    },
    {
      icon: Smile,
      title: "Receive Fresh",
      description: "Get the freshest produce delivered directly from farm to your doorstep",
      badge: "Step 4",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 mb-4">
            How It Works
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From Farm to Table in <span className="text-green-600 font-caveat">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most transparent and direct way to connect with farmers and get the freshest produce while
            supporting sustainable agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur"
            >
              <CardContent className="p-8 text-center">
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white border-green-600"
                >
                  {step.badge}
                </Badge>

                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors">
                  <step.icon className="h-8 w-8 text-green-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>

                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-200 transform -translate-y-1/2"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
