import Image from "next/image"

export default function Staff() {

  const people = [
    {
      name: "Fiamma Muscari",
      position: "Co-Founder | Frontend Developer | Quality Manager",
      description: "Full time mom and code lover",
      image: "/staff/fiamma.webp",
      socials: [
        { 
          link: "https://github.com/FiammaMuscari", 
          svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          )
        },
        { 
          link: "https://twitter.com/__Fiamy", 
          svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
          )
        }
      ]
    },
    {
      name: "Nahuel Santillan",
      position: "Founder | Fullstack Developer | Manager",
      description: "19yo lover of technology, code and future",
      image: "/staff/nawe.webp",
      socials: [
        { 
          link: "https://github.com/nawesan12", 
          svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          )
        },
        { 
          link: "https://twitter.com/habaneritx", 
          svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
          )
        }
      ]
    },
    {
      name: "Leandro Letoile",
      position: "Co-Founder | Community Manager | Podcast Voice",
      description: "Insert description here",
      image: "/staff/leandro.webp",
      socials: [
        { 
          link: "https://github.com/Leandroletoile", 
          svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          )
        },
        { 
          link: "https://twitter.com/thelambproject", 
          svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
          )
        }
      ]
    }
  ]

  return (
    <section className="text-gray-600 body-font">
      <header className="container px-5 pt-20 mx-auto">
        <section className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-bold title-font mb-4 text-gray-900">THE TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Have you heard about them?</p>
        </section>
      </header>

      <main className="flex flex-wrap justify-evenly -m-4">
        {
          people.map((e, index) => (
            <article className="p-4 lg:w-1/4 md:w-1/2" key={index}>
              <div className="h-full flex flex-col items-center text-center">
                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" src={e.image} width={200} height={200}/>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">{e.name}</h2>
                  <h3 className="text-gray-500 mb-3">{e.position}</h3>
                  <p className="mb-4">{e.description}</p>
                  <span className="inline-flex">
                    {
                      e.socials.map((e, index) => (
                        <a className="ml-2 text-gray-500" href={e.link} target="_blank" rel="noreferrer noopener" key={index}>
                          {e.svg}
                        </a>
                      ))
                    }
                  </span>
                </div>
              </div>
            </article>
          ))
        }
    </main>
  </section>
  )
}