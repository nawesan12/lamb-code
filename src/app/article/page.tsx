import Image from "next/image";

export default function Page() {
  return (
    <section className="page flex flex-col items-center">
      <div className="mx-auto max-w-2xl space-y-12 px-6 py-16">
        <article className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl md:tracking-tight">
              Suspendisse ut magna et ipsum sodales accumsan.
            </h1>
            <div className="flex w-full flex-col items-start justify-between md:flex-row md:items-center ">
              <div className="flex items-center md:space-x-2">
                <Image
                  src="/staff/fiamma.webp"
                  alt=""
                  className="h-4 w-4 rounded-full border"
                  width={120}
                  height={120}
                />
                <p className="text-sm">Fiamma Muscari • Febrero 9, 2023</p>
              </div>
              <p className="mt-3 flex-shrink-0 text-sm md:mt-0">
                4 min read • 1,570 views
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6  my-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              lacinia nisi vel elit tempor, quis accumsan nibh blandit. Aliquam
              pellentesque egestas eros, quis varius arcu volutpat nec. Mauris
              sit amet ipsum tincidunt, egestas magna et, pellentesque quam.
              Morbi facilisis sodales interdum. Curabitur pulvinar consectetur
              efficitur. Mauris fringilla metus quis dolor consectetur, vel
              volutpat nisi auctor. Aliquam consectetur faucibus velit. Sed sed
              ligula est.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              lacinia nisi vel elit tempor, quis accumsan nibh blandit. Aliquam
              pellentesque egestas eros, quis varius arcu volutpat nec. Mauris
              sit amet ipsum tincidunt, egestas magna et, pellentesque quam.
              Morbi facilisis sodales interdum. Curabitur pulvinar consectetur
              efficitur. Mauris fringilla metus quis dolor consectetur, vel
              volutpat nisi auctor. Aliquam consectetur faucibus velit. Sed sed
              ligula est.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              lacinia nisi vel elit tempor, quis accumsan nibh blandit. Aliquam
              pellentesque egestas eros, quis varius arcu volutpat nec. Mauris
              sit amet ipsum tincidunt, egestas magna et, pellentesque quam.
              Morbi facilisis sodales interdum. Curabitur pulvinar consectetur
              efficitur. Mauris fringilla metus quis dolor consectetur, vel
              volutpat nisi auctor. Aliquam consectetur faucibus velit. Sed sed
              ligula est.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              lacinia nisi vel elit tempor, quis accumsan nibh blandit. Aliquam
              pellentesque egestas eros, quis varius arcu volutpat nec. Mauris
              sit amet ipsum tincidunt, egestas magna et, pellentesque quam.
              Morbi facilisis sodales interdum. Curabitur pulvinar consectetur
              efficitur. Mauris fringilla metus quis dolor consectetur, vel
              volutpat nisi auctor. Aliquam consectetur faucibus velit. Sed sed
              ligula est.
            </p>

            <Image className="w-full aspect-video object-cover my-4" src='/staff/nawe.webp' width={100} height={100} alt='article image'/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              lacinia nisi vel elit tempor, quis accumsan nibh blandit. Aliquam
              pellentesque egestas eros, quis varius arcu volutpat nec. Mauris
              sit amet ipsum tincidunt, egestas magna et, pellentesque quam.
              Morbi facilisis sodales interdum. Curabitur pulvinar consectetur
              efficitur. Mauris fringilla metus quis dolor consectetur, vel
              volutpat nisi auctor. Aliquam consectetur faucibus velit. Sed sed
              ligula est.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              lacinia nisi vel elit tempor, quis accumsan nibh blandit. Aliquam
              pellentesque egestas eros, quis varius arcu volutpat nec. Mauris
              sit amet ipsum tincidunt, egestas magna et, pellentesque quam.
              Morbi facilisis sodales interdum. Curabitur pulvinar consectetur
              efficitur. Mauris fringilla metus quis dolor consectetur, vel
              volutpat nisi auctor. Aliquam consectetur faucibus velit. Sed sed
              ligula est.
            </p>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap space-x-2 border-t border-dashed py-6">
            <a
              rel="noopener noreferrer"
              href="#"
              className="rounded-sm bg-violet-400 px-3 py-1 text-gray-900 hover:underline"
            >
              #MambaUI
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="rounded-sm bg-violet-400 px-3 py-1 text-gray-900 hover:underline"
            >
              #TailwindCSS
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="rounded-sm bg-violet-400 px-3 py-1 text-gray-900 hover:underline"
            >
              #Angular
            </a>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Nunc id magna mollis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Duis molestie, neque eget pretium lobortis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Mauris nec urna volutpat, aliquam lectus sit amet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
