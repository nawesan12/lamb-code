import HomeFAQ from "@/components/Home/FAQ"
import HomeFeatures from "@/components/Home/Features"
import HomeFooter from "@/components/Home/Footer"
import HomeHeader from "@/components/Home/Header"
import HomeHero from "@/components/Home/Hero"
import HomePricing from "@/components/Home/Pricing"
import HomeStartToday from "@/components/Home/StartToday"
import HomeStats from "@/components/Home/Stats"

export default function Home() {
  return (
    <main className="page">
      <HomeHeader />
      <HomeHero />      
      <HomeFeatures />
      <HomeStats />
      <HomePricing />
      <HomeFAQ />
      <HomeStartToday />
      <HomeFooter />
    </main>
  )
}
