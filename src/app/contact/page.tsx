export default function Page() {
  return (
    <section className="bg-white page">
      <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact us</h2>
          <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Professional plan? Let us know.</p>
          <form action="#" className="space-y-6">
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-[color:var(--btn-primary)] focus:border-[color:var(--btn-primary)] block w-full p-2.5" placeholder="name@lambcode.com" required />
              </div>
              <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-[color:var(--btn-primary)] focus:border-[color:var(--btn-primary)]" placeholder="How can we help you?" required />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                  <textarea id="message" rows={6} className="block h-24 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:outline-none shadow-sm border border-gray-300  focus:ring-[color:var(--btn-primary)] focus:border-[color:var(--btn-primary)] resize-none" placeholder="Leave a comment"></textarea>
              </div>
              <button type="submit" className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900">Send message</button>
          </form>
      </div>
    </section>
  )
}