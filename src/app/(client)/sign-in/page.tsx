"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

export default function signIn() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="p-[20px] h-screen w-screen  ">
        <div className="absolute top-4 left-4">
          <Image
            src="/images/TriNetra.svg"
            alt="logo"
            width={150}
            height={150}
          />
        </div>
        <div className="    h-full w-full flex justify-center items-center">
          <div className="   w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto max-w-[520px]">
            <div className="text-center">
              <h1 className="text-[#0D318F] xl:text-4xl lg:text-3xl md:text-2xl text-2xl mb-2">
                Login
              </h1>
              <p className="text-[#475569] xl:text-lg text-sm font-semibold">
                Login to your account
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <div className="grid w-full   items-center gap-3">
                <Label htmlFor="email" className="text-[#475569]">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="e.g. john@doe.com"
                />
              </div>
              <div className="grid w-full  items-center gap-3 relative">
                <Label htmlFor="password" className="text-[#475569]">
                  Password
                </Label>
                <Input
                  type={show ? "text" : "password"}
                  id="password"
                  placeholder="Your Password"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-11 -translate-y-1/2 text-muted-foreground  cursor-pointer"
                >
                  {show ? (
                    <FiEyeOff className="h-5 w-5" />
                  ) : (
                    <FiEye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="flex justify-between items-center gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="terms"
                    className="data-[state=checked]:bg-[#475569] data-[state=checked]:border-[#475569]"
                  />
                  <Label htmlFor="terms" className="text-[#475569]">
                    Remember me
                  </Label>
                </div>
                <div>
                  <Link href="/sign-in" className="text-[#475569]">
                    Forgot Password ?
                  </Link>
                </div>
              </div>
              <Button variant="signIn" className="">
                Login
              </Button>
              <div className="mt-4 text-center">
                <Link href="/sign-up" className="text-[#475569] text-sm">
                  Don’t Have Account ?{" "}
                  <span className="text-[#1D58D8]">Signup Here</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
