import PricingCard from "../Cards/Pricing"
import SectionTitle from "../Titles/Section"

export default function HomePricing() {

  const plans = [
    {
      id: 1,
      name: "Free",
      price: 0,
      included: ["Some Courses", "Merit Rewards", "Example", "Diplomas"]
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
      included: ["Everything from Professional", "Free PDFs", "Real Projects", "Support 7/365"]
    }
  ]

  return (
    <section className="section flex flex-col justify-evenly">
      <SectionTitle title="Pricing" />
      <section className="pricing flex items-center justify-center flex-wrap whitespace-nowrap">
        {
          plans.map((e, index) => (
            <PricingCard plan={e} key={index}/>
          ))
        }
      </section>
      

      
    </section>
  )
}