import Image from "next/image";

export default function GridProfile() {
  return (
    <div className="flex gap-4">
      <article className="flex w-1/3 flex-col  gap-3 rounded-2xl bg-white p-5">
        <h1 className="p-2 text-xl font-bold">Platform settings</h1>
        <label className="relative inline-flex cursor-pointer ">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-white"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-400">
            Receive notifications by email
          </span>
        </label>
        <label className="relative inline-flex cursor-pointer ">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-white"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-400">
            Receive email updates
          </span>
        </label>
      </article>
      <article className="w-1/3  items-center gap-3 rounded-2xl bg-white p-5">
        <h1 className="p-2 text-xl font-bold">Courses</h1>
        <section className="flex items-center">
          <Image
            src="/lamb.webp"
            alt="course"
            className="rounded-2xl"
            width={100}
            height={100}
          />
          <div className="p-4">
            <h1 className="text-xl font-bold">curso 1</h1>
          </div>
        </section>
        <section className="flex items-center">
          <Image
            src="/lamb.webp"
            alt="course"
            className="rounded-2xl"
            width={100}
            height={100}
          />
          <div className="p-4">
            <h1 className="text-xl font-bold">curso 2</h1>
          </div>
        </section>
        <section className="flex items-center">
          <Image
            src="/lamb.webp"
            alt="course"
            className="rounded-2xl"
            width={100}
            height={100}
          />
          <div className="p-4">
            <h1 className="text-xl font-bold">curso 3</h1>
          </div>
        </section>
      </article>
      <article className="w-1/3  items-center gap-3 rounded-2xl bg-white p-5">
        <h1 className="p-2 text-xl font-bold">Profile Information</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          in turpis et blandit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae
        </p>
      </article>
    </div>
  );
}
