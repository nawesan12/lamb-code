import Image from "next/image"

export default function CardProfile() {
  return (
    <article className="flex lg:flex-row items-center bg-white lg:p-4 p-8 rounded-2xl flex-col gap-8" style={{gridRow: "1 / 2", gridColumn: "2 / 5"}}>
      <Image
        src="/staff/fiamma.webp"
        alt="Profile image of..."
        className="lg:rounded-3xl lg:h-full lg:w-auto aspect-square h-96 w-96 rounded-full"
        width={100}
        height={100}
      />
      <section className="px-8 text-center space-y-4">
        <h1 className="lg:text-xl font-bold text-8xl">Fiamma Muscari</h1>
        <p className="lg:text-lg font-medium text-6xl">Estudiante</p>
      </section>
    </article>
  );
}
