import Link from "next/link";
import SectionTitle from "../Titles/Section";
import FAQitem from "./FAQitem";

export default function HomeFAQ() {

  const questions = [
    {
      question: "Do i have any advantage with the Complete plan?",
      answer: "Yes"
    },
    {
      question: "Can i start from total zero?",
      answer: "Totally yes."
    },
    {
      question: "What languages can i learn here?",
      answer: "Javascript and..."
    },
    {
      question: "Is there any free plan?",
      answer: "Yes"
    }
  ]  

  return (
    <section className="section">
      <header>
        <SectionTitle title="FAQ" />
      </header>
      <section className="container px-6 py-12 mx-auto">
        <main className="relative z-10 container px-4 mx-auto">
          <div className="md:max-w-4xl mx-auto">
            <div className="mb-11 flex flex-wrap -m-1">
            {
              questions.map((e, index) => <FAQitem key={index} question={e.question} answer={e.answer} />)
            }
            </div>
            <footer>
              <p className="text-gray-600 text-center font-medium">
                <span>Still have any questions?</span>
                &nbsp;
                <Link className="font-semibold text-indigo-600 hover:text-indigo-700" href="/contact">Contact us</Link>
              </p>
            </footer>
          </div>
        </main>
      </section>
    </section>
  )
}