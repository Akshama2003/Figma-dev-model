import { Hero } from "@/components/hero"
import { FeaturedCrops } from "@/components/featured-crops"
import { HowItWorks } from "@/components/how-it-works"
import { SuccessStories } from "@/components/success-stories"
import { Stats } from "@/components/stats"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <HowItWorks />
      <FeaturedCrops />
      <SuccessStories />
    </div>
  )
}
