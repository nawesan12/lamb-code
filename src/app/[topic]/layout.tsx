import GoBackBtn from "@/components/Buttons/GoBack";

export default function Layout({ children, params }: { children: React.ReactNode, params: { topic: string }}) {
  
  const { topic } = params

  return (
    <>
      <head/>
      <GoBackBtn />
      {children}
    </>
  )
}