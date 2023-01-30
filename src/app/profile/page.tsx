import AsideProfile from "@/components/Profile/AsideProfile";
import CardProfile from "@/components/Profile/CardProfile";
import GridProfile from "@/components/Profile/GridProfile";

export default function Page() {
  return (
    <section className="page bg-slate-100 p-10">
      <section className="flex flex-grow gap-8">
        <AsideProfile />
        <section className=" max-h-36 w-screen basis-3/4 items-center grid gap-8 rounded-2xl  bg-white p-5">
          <CardProfile />
          <GridProfile />
        </section>
      </section>
    </section>
  );
}
