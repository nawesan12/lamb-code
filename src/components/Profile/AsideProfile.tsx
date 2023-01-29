import Image from "next/image";

export default function AsideProfile() {
  return (
    <aside className="basis-1/4 h-screen  items-center rounded-xl bg-white p-12">
      <a className="">
        <Image
          src="/lamb.webp"
          alt="main_logo"
          height={200}
          width={200}
        />
      </a>
    </aside>
  );
}
