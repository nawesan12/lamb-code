import HomeFeatures from "@/components/Home/Features"
import HomeFooter from "@/components/Home/Footer"
import HomeHero from "@/components/Home/Hero"
import HomePricing from "@/components/Home/Pricing"
import HomeStartToday from "@/components/Home/StartToday"

export default function Home() {
  return (
    <main className="page">
      <HomeHero />      
      <HomeFeatures />
      <HomePricing />
      <HomeStartToday />
      <HomeFooter />
    </main>
  )
}
