import Image from "next/image"

export default function HomeFeatures() {

  const features = [
    {
      id: 1,
      title: "Fast",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/favicon.ico"
    },
    {
      id: 2,
      title: "Easy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/favicon.ico"
    }
  ]

  return (
    <section className="section alter-bg flex flex-col items-center justify-evenly">
      {
        features.map((e, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-evenly gap-48 ${e.id % 2 === 0? "flex-row-reverse" : ""}`}
          >
            <div className="image">
              <Image src={e.image} alt="" width={250} height={250} />
            </div>

            <div className="description flex flex-col gap-4">
              <h2 className="text-5xl font-bold">{e.title}</h2>
              <p className="text-lg w-3/4 opacity-60">{e.description}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}