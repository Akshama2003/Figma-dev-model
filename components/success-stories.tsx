import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, TrendingUp } from "lucide-react"

export function SuccessStories() {
  const stories = [
    {
      name: "Rajesh Kumar",
      location: "Punjab",
      crop: "Organic Wheat",
      earnings: "₹2.5L",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Kisan Booth helped me sell directly to customers and earn 40% more than traditional markets. My family's life has completely changed!",
      rating: 5,
      period: "This Season",
    },
    {
      name: "Meera Devi",
      location: "Maharashtra",
      crop: "Tomatoes & Onions",
      earnings: "₹1.8L",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The platform gave me confidence to grow what customers actually want. No more worrying about market prices!",
      rating: 5,
      period: "Last 6 Months",
    },
    {
      name: "Suresh Patel",
      location: "Gujarat",
      crop: "Cotton & Groundnut",
      earnings: "₹3.2L",
      image: "/placeholder.svg?height=80&width=80",
      quote: "Pre-orders and funding helped me invest in better seeds and equipment. My yield increased by 60%!",
      rating: 5,
      period: "Annual",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200 mb-4">
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Farmers Thriving with <span className="text-green-600 font-caveat">Kisan Booth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from farmers who transformed their lives through direct customer connections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                      <Quote className="h-6 w-6 text-green-600" />
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 text-center leading-relaxed italic">"{story.quote}"</blockquote>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Farmer Info */}
                  <div className="text-center space-y-3">
                    <div className="flex justify-center">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 font-caveat text-lg">{story.name}</h4>
                      <p className="text-sm text-gray-600">{story.location}</p>
                      <p className="text-sm text-green-600 font-medium">{story.crop}</p>
                    </div>

                    {/* Earnings Badge */}
                    <div className="flex items-center justify-center space-x-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {story.earnings} {story.period}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">Join thousands of farmers already earning more with Kisan Booth</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-green-600 border-green-600 px-4 py-2">
              Average 45% increase in farmer income
            </Badge>
            <Badge variant="outline" className="text-orange-600 border-orange-600 px-4 py-2">
              98% customer satisfaction rate
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
