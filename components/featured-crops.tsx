import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export function FeaturedCrops() {
  const crops = [
    {
      id: 1,
      name: "Organic Basmati Rice",
      farmer: "Suresh Patel",
      location: "Punjab",
      price: "₹85/kg",
      originalPrice: "₹120/kg",
      harvestDate: "Dec 2024",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      badge: "Premium Quality",
      funded: 85,
    },
    {
      id: 2,
      name: "Fresh Tomatoes",
      farmer: "Meera Devi",
      location: "Maharashtra",
      price: "₹45/kg",
      originalPrice: "₹65/kg",
      harvestDate: "Nov 2024",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      badge: "Pesticide Free",
      funded: 92,
    },
    {
      id: 3,
      name: "Alphonso Mangoes",
      farmer: "Ravi Kumar",
      location: "Karnataka",
      price: "₹200/kg",
      originalPrice: "₹300/kg",
      harvestDate: "Mar 2025",
      rating: 5.0,
      image: "/placeholder.svg?height=200&width=300",
      badge: "Pre-Order",
      funded: 67,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200 mb-4">
            Featured Crops
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fresh from the <span className="text-green-600 font-caveat">Fields</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover premium quality crops directly from verified farmers across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {crops.map((crop) => (
            <Card key={crop.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={crop.image || "/placeholder.svg"}
                  alt={crop.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-green-600 text-white">{crop.badge}</Badge>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{crop.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">{crop.name}</h3>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="font-caveat text-green-600">{crop.farmer}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {crop.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">{crop.price}</span>
                      <span className="text-sm text-gray-500 line-through">{crop.originalPrice}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-3 w-3 mr-1" />
                      {crop.harvestDate}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Funding Progress</span>
                      <span className="font-medium text-green-600">{crop.funded}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${crop.funded}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 space-x-3">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">Buy Now</Button>
                <Button
                  variant="outline"
                  className="flex-1 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Fund
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
          >
            <Link href="/marketplace">View All Crops</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
