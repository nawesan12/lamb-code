import Link from "next/link"
import PricingCard from "../Cards/Pricing"
import SectionTitle from "../Titles/Section"

export default function HomePricing() {

  const plans = [
    {
      id: 1,
      name: "Starter",
      price: 1000,
      included: ["Example", "Example", "Example", "Example"]
    },
    {
      id: 2,
      name: "Professional",
      price: 2000,
      included: ["Example", "Example", "Example", "Example"]
    },
    {
      id: 3,
      name: "Complete",
      price: 2500,
      included: ["Example", "Example", "Real Projects", "Example"]
    }
  ]

  return (
    <section className="section flex flex-col justify-evenly">
      <SectionTitle title="Pricing" />
      <section className="pricing flex items-center justify-evenly flex-wrap whitespace-nowrap">
        {
          plans.map((e, index) => (
            <PricingCard plan={e} key={index}/>
          ))
        }
      </section>
      
    </section>
  )
}