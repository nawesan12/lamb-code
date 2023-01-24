import Image from "next/image";
import Link from "next/link";
import GetStartedBtn from "../Buttons/GetStarted";

export default function HomeHero() {
  return (
    <section className="section flex flex-col items-center justify-evenly">
      <h1 className='text-7xl font-bold'>Lamb Code</h1>

      <section className="hero-image-container">
        <Image src="/home-hero-image.png" alt="Lamb Code Teaser" width={600} height={500}/>
      </section>

      <section className="hero-teaser flex flex-col items-center justify-center gap-4">
        <p className="opacity-60 text-center text-lg font-medium">Learn everything you need, <br /> just to become the GOAT</p>
        <GetStartedBtn />
      </section>
    </section>
  )
}