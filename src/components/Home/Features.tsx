import Image from "next/image"

export default function HomeFeatures() {

  const features = [
    {
      id: 1,
      title: "Fast",
      description: "Lamb Code is the fastest way to improve you tech skills, or just start a new career with us!",
      image: "/place.jpg"
    },
    {
      id: 2,
      title: "Easy",
      description: "Lamb Code is the easiest way to learn code, with the best teachers, and the best projects!",
      image: "/place.jpg"
    }
  ]

  return (
    <section className="section alter-bg flex flex-col items-center justify-evenly">
      {
        features.map((e, index) => (
          <article
            key={index} 
            className={`flex items-center flex-wrap justify-evenly my-10 ${e.id % 2 === 0? "flex-row-reverse" : ""}`}
          >
            <div className="image">
              <Image src={e.image} alt="Lamb Code" width={350} height={350} />
            </div>

            <div className="description flex flex-col gap-4 w-96 px-7 py-4">
              <h2 className="text-5xl font-bold">{e.title}</h2>
              <p className="text-lg w-full opacity-60">{e.description}</p>
            </div>
          </article>
        ))
      }
    </section>
  )
}