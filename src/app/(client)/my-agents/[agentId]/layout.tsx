import SideNav from "./components/SideNav";

export default function SpecialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" flex gap-8     ">
      <div className="bg-red-600 w-[300px]">
        <SideNav />
      </div>
      <div className="    h-full w-full flex justify-center    py-4 md:py-6 xl:py-8">
        <div className="   w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto max-w-[720px]">
          {children}
        </div>
      </div>
    </section>
  );
}
