import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sprout, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-amber-50 to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <Sprout className="h-3 w-3 mr-1" />
                Direct Farm to Table
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Buy Direct from <span className="text-green-600 font-caveat">Farmers</span>
                <br />
                Grow What You Need
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Connect directly with Indian farmers, fund sustainable agriculture, and get the freshest produce
                delivered to your door. Support local farming communities while getting exactly what you want to eat.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                <Link href="/marketplace" className="flex items-center">
                  Browse Crops
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <Link href="/fund-farmer" className="flex items-center">
                  Fund a Farm
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button size="lg" variant="ghost" className="text-lg px-8 text-green-600 hover:bg-green-50">
                <Link href="/request-crop" className="flex items-center">
                  Request a Crop
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">2,500+</div>
                <div className="text-sm text-gray-600">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50,000+</div>
                <div className="text-sm text-gray-600">Crops Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹2.5Cr+</div>
                <div className="text-sm text-gray-600">Farmer Earnings</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Indian farmer in field"
                className="w-full h-[600px] object-cover"
              />

              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Sprout className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rajesh Kumar</h3>
                    <p className="text-sm text-gray-600">Organic Wheat Farmer, Punjab</p>
                    <p className="text-xs text-green-600 font-medium">₹2.5L earned this season</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-orange-100 rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">98%</div>
                <div className="text-xs text-orange-600">Fresh Delivery</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-green-100 rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">24h</div>
                <div className="text-xs text-green-600">Farm to Door</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
