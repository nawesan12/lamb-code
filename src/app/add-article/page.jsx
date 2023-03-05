export default function Page() {
  return (
    <div class="min-w-screen flex min-h-screen items-center justify-center bg-gray-200 px-5 py-5">
      <div class="mx-auto w-full max-w-6xl rounded-xl bg-white p-5 text-black shadow-lg">
        <div class="overflow-hidden rounded-md border border-gray-200">
          <div class="flex w-full border-b border-gray-200 text-xl text-gray-600">
            <button class="h-10 w-10 border-r border-gray-200 outline-none hover:text-indigo-500 focus:outline-none active:bg-gray-50">
              <i class="mdi mdi-format-bold">
                <b>B</b>
              </i>
            </button>
            <button class="h-10 w-10 border-r border-gray-200 outline-none hover:text-indigo-500 focus:outline-none active:bg-gray-50">
              <i class="mdi mdi-format-italic">&</i>
            </button>
            <button class="mr-1 h-10 w-10 border-r border-gray-200 outline-none hover:text-indigo-500 focus:outline-none active:bg-gray-50">
              <i class="mdi mdi-format-underline underline">s</i>
            </button>
            <button class="h-10 w-10 border-l border-r border-gray-200 outline-none hover:text-indigo-500 focus:outline-none active:bg-gray-50">
              <i class="mdi mdi-format-paragraph ">H1</i>
            </button>
            <button class="h-10 w-10 border-r border-gray-200 outline-none hover:text-indigo-500 focus:outline-none active:bg-gray-50">
              <i class="mdi mdi-format-header-1">H2</i>
            </button>
            <button class="h-10 w-10 border-r border-gray-200 outline-none hover:text-indigo-500 focus:outline-none active:bg-gray-50">
              <i class="mdi mdi-format-header-2">H3</i>
            </button>
            <button class="mr-1 h-10 w-10 border-r border-gray-200 outline-none hover:text-indigo-500 focus:outline-none active:bg-gray-50">
              <i class="mdi mdi-format-header-3">H4</i>
            </button>
            <button class="h-10 w-10 border-l border-r border-gray-200 outline-none hover:text-indigo-500 focus:outline-none active:bg-gray-50">
              <i class="mdi mdi-format-list-bulleted">🖼️</i>
            </button>
            <button class="mr-1 h-10 w-10 border-r border-gray-200 outline-none hover:text-indigo-500 focus:outline-none active:bg-gray-50">
              <i class="mdi mdi-format-list-numbered">{`</>`}</i>
            </button>
          </div>
          <div class="w-full">
            <textarea class="h-96 w-full overflow-y-auto p-8 outline-none"></textarea>
          </div>
        </div>
        <button
        id="open-btn"
          type="submit"
          class="float-right m-4 inline-flex items-center rounded-lg bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        >
          Publicar articulo
        </button>
      </div>

      <div  class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-slate-800 bg-opacity-50">
        <div class="rounded-md bg-white px-16 py-14 text-center">
          <h1 class="mb-4 text-xl font-bold text-slate-500">
            ¿Subir nuevo artículo?
          </h1>
          <button class="text-md rounded-md bg-red-500 px-4 py-2 text-white">
            Cancelar
          </button>
          <button class="text-md ml-2 rounded-md bg-indigo-500 px-7 py-2 font-semibold text-white">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
