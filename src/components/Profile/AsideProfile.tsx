import Image from "next/image"

export default function AsideProfile() {
  return (
    <aside className="h-screen items-center rounded-xl bg-white p-8" style={{ gridRow:"1 / 4", gridColumn:"1 / 2"}}>
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
