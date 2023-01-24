import SectionTitle from "../Titles/Section";

export default function HomeFAQ() {
  return (
    <section className="section">
      <SectionTitle title="FAQ" />
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-2">
        
        <div>
            <h1 className="text-xl font-semibold text-gray-700">What can i expect at my first consultation?</h1>

            <p className="mt-2 text-sm text-gray-500 p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.
            </p>
        </div>
 
        <div>
            <h1 className="text-xl font-semibold text-gray-700">What are your opening house?</h1>

            <p className="mt-2 text-sm text-gray-500 p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.
            </p>
        </div>

        <div>
            <h1 className="text-xl font-semibold text-gray-700">Do i need a referral?</h1>

            <p className="mt-2 text-sm text-gray-500 p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.
            </p>
        </div>

        <div>
            <h1 className="text-xl font-semibold text-gray-700">Is covered by private health insurance?</h1>

            <p className="mt-2 text-sm text-gray-500 p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.
            </p>
            </div>
        </div>
      </div>
    </section>
  )
}