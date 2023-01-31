import AsideProfile from "@/components/Profile/AsideProfile";
import CardProfile from "@/components/Profile/CardProfile";
import GridProfile from "@/components/Profile/GridProfile";

export default function Page() {
  return (
    <section className="page bg-slate-100 p-10">
      <section className="lg:grid lg:max-h-screen lg:grid-cols-4 lg:grid-rows-4 lg:gap-4 flex flex-col gap-12">
        <AsideProfile />
        <CardProfile />
        <GridProfile />
      </section>
    </section>
  );
}
