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
      included: ["Example", "Example", "Example", "Example"]
    }
  ]

  return (
    <section className="section flex flex-col justif-evenly">
      <h2 className="py-8 font-bold text-3xl text-center">Pricing</h2>
      <section className="pricing flex items-center justify-evenly flex-wrap whitespace-nowrap">
        {
          plans.map((e, index) => (
            <article key={index} className="card flex flex-col p-2 rounded-md bg-[var(--text-primary)] shadow-sm shadow-gray-400 h-3/4 min-w-min w-80">
              <span>{e.name}</span>
              <h4>{e.price}</h4>

              <ul>
                {e.included?.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
            </article>
          ))
        }
      </section>
      
    </section>
  )
}