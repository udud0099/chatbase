"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiArrowsUpDown } from "react-icons/hi2";

const Navbar = () => {
  const navText = [
    {
      label: "Dashboard",
      url: "/admin/dashboard",
    },
    {
      label: "My Agents",
      url: "/admin/my-agents",
    },
    {
      label: "Marketplace",
      url: "/admin/marketplace",
    },
    {
      label: "Integrations",
      url: "/admin/integrations",
    },
  ];
  const pathname = usePathname();

  return (
    <>
      <nav className=" w-full  py-3 px-4    flex justify-between     items-center">
        <div className="flex gap-8 items-center">
          <div>
            <Link href="/admin/dashboard">
              <Image
                src="/images/TriNetraIcon.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-9"
              />
            </Link>
          </div>
          <div className=" flex   gap-2">
            {navText.map((item, index) => {
              const isActive = pathname === item.url;
              return (
                <Link
                  href={item.url}
                  key={index}
                  className={`   hover:border hover:border-[#E2E8F0] hover:rounded-full hover:px-4 hover:py-2 hover:bg-[#F8FAFC] ${
                    isActive
                      ? "  border border-[#E2E8F0] rounded-full px-4 py-2 bg-[#F8FAFC]"
                      : "px-4 py-2"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex gap-2">
          {/* variant="navButton" */}
          <Button variant="navButton" className="">
            Create New Agent
          </Button>
          <div>
            <div className="flex gap-1 items-center">
              <div className="flex gap-1 items-center">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-[14px] ">Fab Senchuri</h1>
                  <p className="text-[#94A3B8] text-[12px] font-light">
                    Senchurirohit@gmail.com
                  </p>
                </div>
              </div>
              <div>
                <HiArrowsUpDown />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
