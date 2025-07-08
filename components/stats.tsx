import { TrendingUp, Users, Sprout, MapPin } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "2,500+",
      label: "Farmers Onboarded",
      description: "Verified farmers across India",
    },
    {
      icon: Sprout,
      value: "50,000+",
      label: "Produce Delivered",
      description: "Fresh crops delivered to customers",
    },
    {
      icon: TrendingUp,
      value: "₹2.5Cr+",
      label: "Farmer Earnings",
      description: "Direct income to farming families",
    },
    {
      icon: MapPin,
      value: "28",
      label: "States Covered",
      description: "Pan-India farming network",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Empowering India's Agricultural Revolution</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building a sustainable future where farmers thrive and consumers get the freshest produce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
