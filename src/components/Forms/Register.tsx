export default function RegisterForm() {
  return (
    <main className="container mx-auto p-4 bg-white flex flex-col items-center justify-center text-gray-700">

      <header className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
        <h1 className="text-4xl font-semibold text-center">Welcome to Lamb Code</h1>
      </header>

      <form className="w-10/12 space-y-4 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
          type="text"
          placeholder="Email"
          required
        />
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
          type="tel"
          inputMode="tel"
          placeholder="Phone"
          required
        />
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
          type="password"
          placeholder="Password"
          required
        />
        <select
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
          placeholder="Gender"
        >
          <option value="">Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>

        <footer className="flex items-center">
          <div className="w-1/2 flex items-center">
            <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
            <label htmlFor="remember-me">Remember me!</label>
          </div>
          <button
            className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
            type="submit"
          >
            Register
          </button>
        </footer>
      </form>
      <div className="text-right w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
        <a className="text-sm font-bold text-teal-500 hover:underline cursor-pointer">Forgot your password?</a>
      </div>
    </main>
  )
}