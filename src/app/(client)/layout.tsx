// app/special/layout.tsx

import Navbar from "./components/Navbar";

export default function SpecialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="  min-h-screen w-screen ">
      <Navbar />
      {children}
    </section>
  );
}
