import Image from "next/image"

export default function AsideProfile() {
  return (
    <aside className="lg:h-screen lg:items-center lg:rounded-xl lg:bg-white lg:p-8 h-80 soverflow-auto" style={{ gridRow:"1 / 4", gridColumn:"1 / 2"}}>
      <a>
        <Image
          src="/lamb.webp"
          alt="Lamb Code | The Lamb Project"
          height={200}
          width={200}
        />
      </a>
    </aside>
  );
}
