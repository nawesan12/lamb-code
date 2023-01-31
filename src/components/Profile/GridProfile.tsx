import Image from "next/image";

export default function GridProfile() {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 flex flex-col gap-8" style={{ gridColumn: "2 / 5", gridRow: "2 / 5" }}>

      <article className="flex flex-col gap-20 rounded-2xl lg:gap-8 bg-white lg:py-4 lg:p-4 p-8 py-12">
        <h2 className="lg:p-2 lg:text-xl p-4 text-7xl font-bold">Platform settings</h2>

        <label className="relative inline-flex cursor-pointer gap-8">
          <input type="checkbox" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-white"></div>
          <span className="ml-3 lg:text-sm font-medium text-gray-900 text-4xl">
            Receive notifications
          </span>
        </label>

        <label className="relative inline-flex cursor-pointer gap-8">
          <input type="checkbox" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-white"></div>
          <span className="ml-3 lg:text-sm font-medium text-gray-900 text-4xl">
            Receive email updates
          </span>
        </label>
      </article>

      <article className="flex flex-col lg:items-center lg:gap-4 gap-20 rounded-2xl lg:py-4 lg:p-4 bg-white p-8 py-12">
        <h2 className="lg:p-2 lg:text-xl p-4 text-7xl font-bold">Courses</h2>

        <section className="flex items-center">
          <Image
            src="/place.jpg"
            alt="Course image | Lamb Code | The Lamb Project"
            className="rounded-2xl aspect-video"
            width={75}
            height={75}
          />
          <div className="p-4">
            <h3 className="lg:text-base font-bold text-4xl">Javascript for beginners</h3>
          </div>
        </section>

        <section className="flex items-center">
          <Image
            src="/place.jpg"
            alt="Course image | Lamb Code | The Lamb Project"
            className="rounded-2xl aspect-video"
            width={75}
            height={75}
          />
          <div className="p-4">
            <h3 className="lg:text-base font-bold text-4xl">Web Sockets with NodeJS</h3>
          </div>
        </section>
      </article>

      <article className="flex flex-col lg:items-center lg:gap-8 gap-20 rounded-2xl bg-white lg:py-4 p-8 py-12">
        <h2 className="lg:p-2 lg:text-xl p-4 text-7xl font-bold">Profile Information</h2>
        <p className="lg:text-lg text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          in turpis et blandit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae
        </p>
      </article>

    </div>
  );
}
