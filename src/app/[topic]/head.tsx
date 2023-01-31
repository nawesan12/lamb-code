export default function Head({ params }: { params: { topic: string } }) {

  const title = params.topic + " | Lamb Code"

  return (
    <>
      <title>{title}</title>
    </>
  )
}