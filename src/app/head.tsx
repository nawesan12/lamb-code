export default function Head() {

  const actualYear = new Date().getFullYear()

  return (
    <>
      <title>The Lamb Project ~ {actualYear}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Lamb Code is an educational, collaborating and helpful page for developers and people that wants to start his career in IT." />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
