"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoLogoBuffer } from "react-icons/io";
import { RiHome5Line } from "react-icons/ri";
import { MdOutlineContactEmergency } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineShowChart } from "react-icons/md";
import { LuBookmarkMinus } from "react-icons/lu";
import { HiOutlineShare } from "react-icons/hi";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";

export default function Navbar() {
  const navText = [
    {
      label: (
        <RiHome5Line className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32]" />
      ),
      url: "/",
    },
    {
      label: (
        <MdOutlineContactEmergency className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32]" />
      ),
      url: "/",
    },
    {
      label: (
        <IoChatboxOutline className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32]" />
      ),
      url: "/",
    },
    {
      label: (
        <BsLightningCharge className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32]" />
      ),
      url: "/",
    },
    {
      label: (
        <IoCalendarNumberOutline className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32]" />
      ),
      url: "/",
    },
    {
      label: (
        <RiSearch2Line className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32]" />
      ),
      url: "/",
    },
    {
      label: (
        <MdOutlineShowChart className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32]" />
      ),
      url: "/",
    },
    {
      label: (
        <LuBookmarkMinus className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32]" />
      ),
      url: "/",
    },
    {
      label: (
        <HiOutlineShare className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32]" />
      ),
      url: "/",
    },
    {
      label: (
        <HiOutlineDocumentPlus className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32]" />
      ),
      url: "/",
    },
    {
      label: (
        <IoBookOutline className="text-4xl group-hover:bg-action rounded p-2 text-[#292D32] " />
      ),
      url: "/",
    },
  ];
  const pathname = usePathname();
  return (
    <>
      <nav className="h-screen bg-gray-200 p-3 fixed  flex   flex-col items-center">
        <div>
          <Link href="/">
            <IoLogoBuffer className="text-3xl" />
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {navText.map((item, index) => {
            const isActive = pathname === item.url;
            return (
              <Link
                href={item.url}
                key={index}
                className={`   hover:text-red-500  rounded  group ${
                  isActive ? "  bg-action" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
