import Image from "next/image";

export default function GridProfile() {
  return (
    <div className="grid grid-cols-3 gap-4" style={{ gridColumn: "2 / 5", gridRow: "3 / 5" }}>

      <article className="flex flex-col gap-3 rounded-2xl bg-white p-5">
        <h2 className="p-2 text-xl font-bold">Platform settings</h2>

        <label className="relative inline-flex cursor-pointer ">
          <input type="checkbox" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-white"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-400">
            Receive notifications by email
          </span>
        </label>

        <label className="relative inline-flex cursor-pointer ">
          <input type="checkbox" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-white"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-400">
            Receive email updates
          </span>
        </label>
      </article>

      <article className="flex items-center gap-3 rounded-2xl bg-white p-5">
        <h2 className="p-2 text-xl font-bold">Courses</h2>
        <section className="flex items-center">
          <Image
            src="/lamb.webp"
            alt="Course image | Lamb Code | The Lamb Project"
            className="rounded-2xl"
            width={100}
            height={100}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">curso 1</h3>
          </div>
        </section>
        <section className="flex items-center">
          <Image
            src="/lamb.webp"
            alt="Course image | Lamb Code | The Lamb Project"
            className="rounded-2xl"
            width={100}
            height={100}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">curso 2</h3>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <Image
            src="/lamb.webp"
            alt="Course image | Lamb Code | The Lamb Project"
            className="rounded-2xl"
            width={100}
            height={100}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">curso 3</h3>
          </div>
        </section>
      </article>

      <article className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5">
        <h2 className="p-2 text-xl font-bold">Profile Information</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          in turpis et blandit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae
        </p>
      </article>

    </div>
  );
}
