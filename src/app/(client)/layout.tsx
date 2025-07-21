// app/special/layout.tsx

import Navbar from "./components/Navbar";

export default function SpecialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="      ">
      <Navbar />
      {children}
    </section>
  );
}
