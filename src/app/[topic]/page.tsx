const fetchTopic = async (topic: string) => {
  const res = await fetch(`${process.env.ACTUAL_ORIGIN}/api/topics/${topic}`)
  const data = await res.json()
  console.log(data)
  return data
}

export default async function TopicPage({ params }:{ params: { topic: string } }) {
  
  const { topic } = params
  const res = await fetchTopic(topic)

  return (
    <section className="page">
      {res.topic}
    </section>
  )
}