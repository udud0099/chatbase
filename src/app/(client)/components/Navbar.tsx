// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";
// import ProfileSwitcher from "./profileSwitcher";

// const Navbar = () => {
//   const navText = [
//     {
//       label: "Dashboard",
//       url: "/dashboard",
//     },
//     {
//       label: "My Agents",
//       url: "/my-agents",
//     },
//     {
//       label: "Marketplace",
//       url: "/marketplace",
//     },
//     {
//       label: "Integrations",
//       url: "/integrations",
//     },
//   ];
//   const pathname = usePathname();

//   return (
//     <>
//       <nav className=" w-full  py-3 px-4    flex justify-between     items-center">
//         <div className="flex gap-8 items-center">
//           <div>
//             <Link href="/admin/dashboard">
//               <Image
//                 src="/images/TriNetraIcon.svg"
//                 alt="logo"
//                 width={100}
//                 height={100}
//                 className="w-9"
//               />
//             </Link>
//           </div>
//           <div className=" flex   gap-2">
//             {navText.map((item, index) => {
//               const isActive = pathname === item.url;
//               return (
//                 <Link
//                   href={item.url}
//                   key={index}
//                   className={`   hover:border hover:border-[#E2E8F0] hover:rounded-full hover:px-4 hover:py-2 hover:bg-[#F8FAFC] ${
//                     isActive
//                       ? "  border border-[#E2E8F0] rounded-full px-4 py-2 bg-[#F8FAFC]"
//                       : "px-4 py-2"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//         <div className="flex gap-3">
//           <Link
//             href="/my-agents/create"
//             className="px-3 py-2 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 text-[14px]"
//           >
//             Create New Agent
//           </Link>
//           <ProfileSwitcher
//             name="Fab Senchuri"
//             email="senchurirohit@gmail.com"
//             avatarUrl="https://github.com/shadcn.png"
//           />
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ProfileSwitcher from "./profileSwitcher";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", url: "/dashboard" },
  { label: "My Agents", url: "/my-agents" },
  { label: "Marketplace", url: "/marketplace" },
  { label: "Integrations", url: "/integrations" },
];

type NavItem = {
  label: string;
  url: string;
};

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const getLinkClasses = (url: string) => {
    const isActive = pathname === url;
    return `
      px-4 py-1.5 text-sm  border border-transparent
      ${isActive ? "bg-[#F8FAFC] border border-[#E2E8F0]! rounded-full" : ""}
      hover:border hover:border-[#E2E8F0] hover:rounded-full hover:bg-[#F8FAFC] 
    `;
  };

  return (
    <nav className="w-full py-3 px-4 flex justify-between items-center   bg-white">
      {/* Left: Logo + Navigation */}
      <div className="flex gap-8 items-center">
        <Link href="/dashboard">
          <Image
            src="/images/TriNetraIcon.svg"
            alt="logo"
            width={36}
            height={36}
            className="w-9 h-9"
          />
        </Link>

        <div className="flex gap-2 hidden  lg:flex">
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
      </div>

      <div className="flex gap-3 items-center ">
        <Button
          variant="navButton"
          onClick={() => router.push("/my-agents/create")}
        >
          Create New Agent
        </Button>

        <ProfileSwitcher
          name="Fab Senchuri"
          email="senchurirohit@gmail.com"
          avatarUrl="https://github.com/shadcn.png"
        />
      </div>
    </nav>
  );
};

export default Navbar;
