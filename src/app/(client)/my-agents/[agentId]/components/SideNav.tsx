"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiBox1Line } from "react-icons/ri";
import { HiArrowsUpDown } from "react-icons/hi2";

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
      whitespace-nowrap px-2 py-1 md:px-4 md:py-2 text-sm  border border-transparent flex gap-2  flex-nowrap  items-center  
      ${isActive ? "bg-[#F8FAFC] border border-[#E2E8F0]! rounded-md" : ""}
      hover:border hover:border-[#E2E8F0] hover:rounded-md hover:bg-[#F8FAFC] 
    `;
  };
  console.log(pathname);

  return (
    <>
      <div className="p-4 md:p-6 xl:p-8">
        <div className="border border-gray-200 rounded-md p-1">
          <div className="w-full bg-activeBG p-2 flex justify-between ">
            <div>
              <h1 className="mainH2 text-lg">Retro Agent</h1>
              <span className="text-primary text-sm flex gap-0 items-end  ">
                <h1 className="mainH2">10</h1>/200 Credits used
              </span>
            </div>
            <div>
              <HiArrowsUpDown />
            </div>
          </div>
          <div>
            <nav className="w-full py-3  flex justify-between      ">
              {/* Left: Logo + Navigation */}
              <div className="flex    w-full  gap-0.5  md:h-auto h-[40px] sm:h-[50px]   overflow-x-auto overflow-y-hidden no-scrollbar flex-row md:flex-col">
                {navItems.map((item: NavItem, index: number) => (
                  <Link
                    href={item.url}
                    key={index}
                    className={getLinkClasses(item.url)}
                  >
                    <RiBox1Line className="min-w-4 w-4 h-4" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
