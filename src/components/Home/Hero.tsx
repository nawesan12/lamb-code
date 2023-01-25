import Image from "next/image"
import GetStartedBtn from "../Buttons/GetStarted"

export default function HomeHero() {
  return (
    <section className="section flex flex-col items-center justify-evenly">
      <header>
        <h1 title="Lamb Code - The Lamb Project" className='text-6xl font-bold text-center whitespace-nowrap'>Lamb Code <br /> <small className="text-sm text-center block drop-shadow-sm shadow-green-600">The Lamb Project</small> </h1>
      </header>

      <section className="hero-teaser flex flex-col items-center justify-center gap-4">
        <p className="opacity-60 text-center text-lg font-medium w-4/5">Learn everything you need just to become the GOAT</p>
        <GetStartedBtn />
      </section>
    </section>
  )
}