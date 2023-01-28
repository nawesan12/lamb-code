export default function PodcastBubble() {
  return (
    <a href="https://open.spotify.com/show/4urcTYflMGixQUWNoG6v6X" title="La voz de la tecnologia - Lamb Code" target="_blank" rel="noreferrer" className="fixed bottom-4 right-4 bg-green-500 text-md flex items-center gap-4 font-medium rounded-3xl p-3 px-6 z-50 transition-all hover:scale-105 font-mono">
      <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
        <path d="M9 15c1.5 -1 4 -1 5 .5" />
        <path d="M7 9c2 -1 6 -2 10 .5" />
      </svg>
      Listen to our podcast!
    </a>
  )
}