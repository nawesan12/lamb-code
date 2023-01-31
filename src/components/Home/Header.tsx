"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function HomeHeader() {

  const [navOpen, setNavOpen] = useState(false)

  const toggleNavOpen = () => {
    setNavOpen(!navOpen)
  }

  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4 ">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <section className="flex lg:w-0 lg:flex-1 text-black">
            <Link href="/"  title="Lamb Code">
              <span className="sr-only">Logo</span>
              <Image alt="team" className="ml-4" src="/lamb.webp" width={64} height={64}/>
            </Link>
          </section>

          <nav
            aria-label="Site Nav"
            className={`${navOpen ? "flex absolute top-20 left-0 flex-col bg-white p-8 shadow-md shadow-slate-400 w-screen transition-all z-50" : "hidden"} gap-8 text-lg font-medium md:flex`}
          >
            <Link className="text-gray-500 bg-white" href="/courses">Courses</Link>
            <Link className="text-gray-500 bg-white" href="/staff">Staff</Link>
            <Link className="text-gray-500 bg-white" href="/plans">Plans</Link>
            <Link className="text-gray-500 bg-white" href="/contact">Contact</Link>
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <Link
              className="rounded-lg bg-gray-100 px-5 py-2 text-md font-medium text-gray-500"
              href="/auth/login">
              Log in
            </Link>

            <Link
              className="rounded-lg bg-black px-5 py-2 text-md font-medium text-white"
              href="/auth/register">
              Sign up
            </Link>
          </div>

          <section className="lg:hidden">
            <button className="rounded-lg bg-gray-100 p-2 text-gray-600" type="button" onClick={toggleNavOpen}>
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </section>
        </div>
      </div>
    </header>
  )
}