import Image from "next/image"

export default function CardProfile() {
  return (
    <article className="flex items-center bg-white" style={{gridRow: "2 / 3", gridColumn: "2 / 5"}}>
      <Image
        src="/staff/fiamma.webp"
        alt="Profile image of..."
        className="rounded-2xl"
        width={100}
        height={100}
      />
      <section className="px-8">
        <h1 className="text-xl font-bold"> Fiamma Muscari</h1>
        <p>Estudiante</p>
      </section>
    </article>
  );
}
