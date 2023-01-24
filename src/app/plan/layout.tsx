export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="page">
      {children}
    </section>
  )
}