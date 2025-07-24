import SideNav from "./components/SideNav";

export default function SpecialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" flex gap-8   topRoundBorder      ">
      <div className="  w-[400px] block">
        <SideNav />
      </div>
      <div className="    heightAdg w-full flex justify-center    py-4 md:py-6 xl:py-8">
        <div className=" h-full   w-[90%] md:w-[80%] lg:w-[80%] xl:w-[80%] mx-auto max-w-[920px]">
          {children}
        </div>
      </div>
    </section>
  );
}
