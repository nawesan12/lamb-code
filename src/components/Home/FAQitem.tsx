export default function FAQitem({ question, answer }:{ question: string, answer: string}) {
  return (
    <article className="w-full p-1">
      <details className="py-4 pt-6 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 rounded-2xl shadow-10xl">
        <summary className="cursor-pointer mb-4 text-lg font-semibold leading-normal">{question}</summary> 
        <div className="flex flex-wrap justify-between -m-2">
          <div className="flex-1 p-2">
            <p className="text-gray-600 font-medium">{answer}</p>
          </div>
        </div>
      </details>
    </article>
  )
}