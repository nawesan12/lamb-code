import Link from "next/link";

export default function PricingCard({ plan }: { plan: any }) {
  return (
    <article key={plan.id} className={`card flex p-7 items-center justify-center rounded-md bg-[var(--text-primary)] shadow-sm shadow-gray-400 h-3/4 min-w-min w-72 ${plan.id === 2 ? "scale-110" : ""}`}>
      <div className="card-info flex flex-col gap-6">
        <span className="font-semibold opacity-70 text-sm">{plan.name}</span>
        <h5><strong className="text-3xl font-bold">AR${plan.price}</strong> per month</h5>

        <ul className="flex flex-col gap-2">
          {plan.included?.map((e: string, index: number) => (
            <li key={index} className="flex gap-2 items-center font-medium text-gray-600">
              <svg width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
              {e}
            </li>
          ))}
        </ul>

        <Link href={`/plans/${plan.name.toLowerCase()}`} className="bg-black text-white font-semibold rounded-md px-4 py-2 shadow-black shadow-md max-w-max">
          Read more
        </Link>
      </div>
    </article>
  )
}