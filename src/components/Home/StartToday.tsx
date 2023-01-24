import GetStartedBtn from "../Buttons/GetStarted"

export default function HomeStartToday() {
  return (
    <section className="alter-bg py-20 flex flex-col items-center gap-10">
      <h2 className="text-7xl font-bold">Start learning today</h2>
      <GetStartedBtn />
    </section>
  )
}