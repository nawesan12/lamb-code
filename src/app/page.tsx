import PodcastBubble from "@/components/Bubbles/Podcast"
import HomeFAQ from "@/components/Home/FAQ"
import HomeFeatures from "@/components/Home/Features"
import HomeFooter from "@/components/Home/Footer"
import HomeHeader from "@/components/Home/Header"
import HomeHero from "@/components/Home/Hero"
import HomePricing from "@/components/Home/Pricing"
import HomeStartToday from "@/components/Home/StartToday"
import HomeStats from "@/components/Home/Stats"
import AlterStatus from "@/components/Misc/AlterStatus"
import Status from "@/components/Misc/Status"

export default function Home() {
  return (
    <main className="page">
      <PodcastBubble />
      <HomeHeader />
      <HomeHero />      
      <HomeFeatures />
      <HomePricing />
      <HomeStats />
      <HomeFAQ />
      <HomeStartToday />
      <HomeFooter />
    </main>
  )
}
