import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sprout, Users, Shield } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-amber-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                  <Sprout className="h-3 w-3 mr-1" />
                  Direct Farm to Table
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                  <Shield className="h-3 w-3 mr-1" />
                  Web3 Enabled
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Buy Direct from <span className="text-green-600 font-caveat">Farmers</span>
                <br />
                <span className="text-blue-600">No Middlemen</span>, No Exploitation
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Connect directly with Indian farmers through blockchain technology. Fund crops, request custom growth,
                and watch your investment grow in real-time with <strong>Civic Auth</strong> verified transactions.
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
                className="text-lg px-8 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Link href="/web3" className="flex items-center">
                  Connect Wallet
                  <Shield className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button size="lg" variant="ghost" className="text-lg px-8 text-green-600 hover:bg-green-50">
                <Link href="/request-crop" className="flex items-center">
                  Request a Crop
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Web3 Features */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Powered by Web3 Technology
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-800">Civic Auth Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-blue-800">Smart Contract Escrow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-blue-800">NFT Crop Ownership</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">2,500+</div>
                <div className="text-sm text-gray-600">Verified Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50,000+</div>
                <div className="text-sm text-gray-600">Crops Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">₹2.5Cr+</div>
                <div className="text-sm text-gray-600">Smart Contract Value</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Indian farmer with blockchain technology"
                className="w-full h-[600px] object-cover"
              />

              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rajesh Kumar</h3>
                    <p className="text-sm text-gray-600">Civic Verified Farmer, Punjab</p>
                    <p className="text-xs text-green-600 font-medium">₹2.5L earned via smart contracts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-100 rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">100%</div>
                <div className="text-xs text-blue-600">Verified</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-purple-100 rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600">NFT</div>
                <div className="text-xs text-purple-600">Ownership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
