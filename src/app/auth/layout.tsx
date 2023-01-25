import GoBackBtn from "@/components/Buttons/GoBack";

export default function Layout({ children }:{ children: React.ReactNode }) {
  return (
    <section className="page">
      <GoBackBtn />
      {children}    
    </section>
  ) 
}