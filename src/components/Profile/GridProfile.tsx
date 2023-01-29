import Image from "next/image";

export default function GridProfile() {
  return (
    <div className="flex gap-4">
      <article className="flex flex-col  gap-3 rounded-2xl bg-white p-5">
        <h1>Plataform settings</h1>
        <label className="relative inline-flex cursor-pointer ">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Receive notifications by email
          </span>
        </label>
        <label className="relative inline-flex cursor-pointer ">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Receive email updates
          </span>
        </label>
      </article>
      <article className=" items-center gap-3 rounded-2xl bg-white p-5"></article>
      <article className=" items-center gap-3 rounded-2xl bg-white p-5"></article>
    </div>
  );
}
