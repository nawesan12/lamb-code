const fetchTopic = async (topic: string) => {
  const res = `${process.env.ACTUAL_ORIGIN}/topics/${topic}`
}

export default async function TopicPage({ params }:{ params: { topic: string } }) {
  
  const { topic } = params
  const res = await fetchTopic(topic)

  return (
    <section className="page">
      {JSON.stringify(res)}
    </section>
  )
}