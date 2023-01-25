"use client"
import { useRouter } from "next/navigation"

export default function GoBackBtn() {

  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <button onClick={goBack} className="fixed top-4 left-4 font-bold">
      {`<--`}
    </button>
  )
}