export default function TopicPage({ params }:{ params: { topic: string } }) {
  
  const { topic } = params

  return (
    <section className="page">
      {topic}
    </section>
  )
}