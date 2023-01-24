import Image from "next/image"

export default function HomeFooter() {

  const actualYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white flex items-center justify-between py-10 px-8 text-sm">
      <p>© The Lamb Project {actualYear}</p>

      <Image src="/favicon.ico" alt="Lamb Code" width={25} height={25}/>

      <ul className="flex gap-4">
        <li className="opacity-80 hover:opacity-100">
          <a href="https://linkedin.com/in/company/lamb-code" target="_blank" rel="noreferrer">Linkedin</a>
        </li>
        <li className="opacity-80 hover:opacity-100">
          <a href="https://twitter.com/lamb-code" target="_blank" rel="noreferrer">Twitter</a>
        </li>        
      </ul>
    </footer>
  )
}