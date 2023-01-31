import Image from "next/image"
import Link from "next/link"

export default function AsideProfile() {
  return (
    <aside className="lg:h-screen lg:flex-col lg:items-center lg:rounded-xl bg-white lg:p-8 h-80 soverflow-auto flex items-center" style={{ gridRow:"1 / 4", gridColumn:"1 / 2"}}>
      <Link href="/">
        <Image
          src="/lamb.webp"
          alt="Lamb Code | The Lamb Project"
          height={125}
          width={125}
        />
      </Link>

      <nav>

      </nav>
    </aside>
  );
}
