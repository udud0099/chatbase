"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", url: "/my-agents/1" },
  { label: "Playground", url: "/my-agents/1/playground" },
  { label: "Platforms", url: "/my-agents/1/platforms" },
  { label: "Knowledge Base", url: "/my-agents/1/knowledgebase" },
  { label: "Activity", url: "/my-agents/1/activity" },
  { label: "Credit Usage", url: "/my-agents/1/creditusage" },
  { label: "Integrations", url: "/my-agents/1/integrations" },
  { label: "Settings", url: "/my-agents/1/settings" },
];

type NavItem = {
  label: string;
  url: string;
};
export default function SideNav() {
  const pathname = usePathname();

  const getLinkClasses = (url: string) => {
    const isActive = pathname === url;
    return `
      px-4 py-2 text-sm  border border-transparent
      ${isActive ? "bg-[#F8FAFC] border border-[#E2E8F0]! rounded-full" : ""}
      hover:border hover:border-[#E2E8F0] hover:rounded-full hover:bg-[#F8FAFC] 
    `;
  };
  console.log(pathname);

  return (
    <>
      <div className="py-4 md:py-6 xl:py-8">
        <nav className="w-full py-3 px-4 flex justify-between      ">
          {/* Left: Logo + Navigation */}
          <div className="flex flex-col gap-2    lg:flex">
            {navItems.map((item: NavItem, index: number) => (
              <Link
                href={item.url}
                key={index}
                className={getLinkClasses(item.url)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
