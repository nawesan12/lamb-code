export default function LoginForm() {
  return (
      <main className="container mx-auto p-4 bg-white flex flex-col items-center justify-center text-gray-700">
    <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
      <h1 className="text-4xl font-semibold flex justify-center mb-4">Welcome back!</h1>
    </div>
    <div className="w-10/12 space-y-4 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
      <input
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
        type="text"
        placeholder="Email"
      />
      <input
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
        type="text"
        placeholder="Password"
      />

      <div className="flex items-center">
        <div className="w-1/2 flex items-center">
          <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
          <label htmlFor="remember-me">Remember me!</label>
        </div>
        <button
          className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
          type="submit"
        >
          Log In
        </button>
      </div>
    </div>
    <div className="text-right w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
      <a className="text-sm font-bold text-teal-500 hover:underline cursor-pointer"
        >Forgot your password?</a
      >
    </div>
</main>
  )
}