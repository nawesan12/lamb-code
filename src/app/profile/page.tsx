import AsideProfile from "@/components/Profile/AsideProfile";
import CardProfile from "@/components/Profile/CardProfile";
import GridProfile from "@/components/Profile/GridProfile";

export default function Page() {
  return (
    <section className="page bg-slate-100 p-10">
      <section className="grid max-h-screen grid-cols-4 grid-rows-4 gap-8">
        <AsideProfile />
        <CardProfile />
        <GridProfile />
      </section>
    </section>
  );
}
