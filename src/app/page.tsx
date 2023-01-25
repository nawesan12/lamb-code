import HomeFAQ from "@/components/Home/FAQ"
import HomeFeatures from "@/components/Home/Features"
import HomeFooter from "@/components/Home/Footer"
import HomeHeader from "@/components/Home/Header"
import HomeHero from "@/components/Home/Hero"
import HomePricing from "@/components/Home/Pricing"
import HomeStartToday from "@/components/Home/StartToday"
import ArticlePromotion from "@/components/Modals/ArticlePromotion"

export default function Home() {
  return (
    <main className="page">
      <ArticlePromotion link="article" blank/>
      <HomeHeader />
      <HomeHero />      
      <HomeFeatures />
      <HomePricing />
      <HomeFAQ />
      <HomeStartToday />
      <HomeFooter />
    </main>
  )
}
