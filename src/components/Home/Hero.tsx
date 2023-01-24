import Image from "next/image"
import GetStartedBtn from "../Buttons/GetStarted"

export default function HomeHero() {
  return (
    <section className="section flex flex-col items-center justify-evenly">
      <h1 title="Lamb Code - The Lamb Project" className='text-6xl font-bold text-center whitespace-nowrap'>{`{ Lamb Code }`} <br /> <small className="text-sm text-center block">The Lamb Project</small> </h1>

      <section className="hero-image-container">
        <Image src="/favicon.ico" title="Lamb Code - The Lamb Project" alt="Lamb Code Teaser" width={250} height={250}/>
      </section>

      <section className="hero-teaser flex flex-col items-center justify-center gap-4">
        <p className="opacity-60 text-center text-lg font-medium">Learn everything you need <br /> just to become the GOAT</p>
        <GetStartedBtn />
      </section>
    </section>
  )
}