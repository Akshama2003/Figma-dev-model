import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Star, TrendingUp, Heart, Share2 } from "lucide-react"

export function CropGrid() {
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
      reviews: 124,
      image: "/placeholder.svg?height=200&width=300",
      badge: "Premium Quality",
      funded: 85,
      available: "2.5 tons",
      organic: true,
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
      reviews: 89,
      image: "/placeholder.svg?height=200&width=300",
      badge: "Pesticide Free",
      funded: 92,
      available: "1.2 tons",
      organic: false,
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
      reviews: 156,
      image: "/placeholder.svg?height=200&width=300",
      badge: "Pre-Order",
      funded: 67,
      available: "800 kg",
      organic: true,
    },
    {
      id: 4,
      name: "Red Onions",
      farmer: "Lakshmi Reddy",
      location: "Andhra Pradesh",
      price: "₹35/kg",
      originalPrice: "₹50/kg",
      harvestDate: "Jan 2025",
      rating: 4.7,
      reviews: 67,
      image: "/placeholder.svg?height=200&width=300",
      badge: "Bulk Available",
      funded: 78,
      available: "5 tons",
      organic: false,
    },
    {
      id: 5,
      name: "Organic Spinach",
      farmer: "Ramesh Yadav",
      location: "Uttar Pradesh",
      price: "₹60/kg",
      originalPrice: "₹80/kg",
      harvestDate: "Dec 2024",
      rating: 4.6,
      reviews: 43,
      image: "/placeholder.svg?height=200&width=300",
      badge: "Fresh Harvest",
      funded: 95,
      available: "300 kg",
      organic: true,
    },
    {
      id: 6,
      name: "Black Wheat",
      farmer: "Priya Sharma",
      location: "Rajasthan",
      price: "₹120/kg",
      originalPrice: "₹160/kg",
      harvestDate: "Feb 2025",
      rating: 4.8,
      reviews: 78,
      image: "/placeholder.svg?height=200&width=300",
      badge: "Rare Variety",
      funded: 56,
      available: "1 ton",
      organic: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-600">Showing {crops.length} crops from verified farmers</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
            <option>Harvest Date</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <Card key={crop.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative">
              <img
                src={crop.image || "/placeholder.svg"}
                alt={crop.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 left-3 bg-green-600 text-white">{crop.badge}</Badge>
              {crop.organic && <Badge className="absolute top-3 right-3 bg-orange-600 text-white">Organic</Badge>}
              <div className="absolute bottom-3 right-3 flex space-x-2">
                <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{crop.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="font-caveat text-green-600 font-medium">{crop.farmer}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {crop.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">{crop.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({crop.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">{crop.price}</span>
                    <span className="text-sm text-gray-500 line-through">{crop.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-600">{crop.available} available</div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {crop.harvestDate}
                  </div>
                  <span className="font-medium text-green-600">{crop.funded}% funded</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${crop.funded}%` }}
                  ></div>
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

      <div className="flex justify-center pt-8">
        <Button variant="outline" size="lg">
          Load More Crops
        </Button>
      </div>
    </div>
  )
}
