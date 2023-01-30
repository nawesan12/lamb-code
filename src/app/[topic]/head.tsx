export default function Head({ params }: { params: { topic: string }}) {

  const { topic } = params

  return (
    <>
      <title>{topic} - Lamb Code</title>
    </>
  )
}