"use client"
import { useRouter } from "next/navigation"

export default function GoBackBtn() {

  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <button onClick={goBack} className="fixed top-4 left-4 font-bold">
      <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="11" y2="18" />
        <line x1="5" y1="12" x2="11" y2="6" />
      </svg>
    </button>
  )
}