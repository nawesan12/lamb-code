import Image from "next/image";
import GridProfile from "./GridProfile";

export default function CardProfile() {
  return (
    <>
      <article className="flex items-center">
        <Image
          src="/staff/fiamma.webp"
          alt="profileimage"
          className="rounded-2xl"
          width={100}
          height={100}
        />
        <div className="p-4">
          <h1 className="text-xl"> Fiamma Muscari</h1>
          <p>Estudiante</p>
        </div>
      </article>
    </>
  );
}
