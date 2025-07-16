"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

export default function signUp() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
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
                Signup
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
              <div className="grid w-full  items-center gap-3 relative">
                <Label htmlFor="password" className="text-[#475569]">
                  Confirm Password
                </Label>
                <Input
                  type={show2 ? "text" : "password"}
                  id="password"
                  placeholder="Confirm Your Password"
                />
                <button
                  type="button"
                  onClick={() => setShow2(!show2)}
                  className="absolute right-2 top-11 -translate-y-1/2 text-muted-foreground  cursor-pointer"
                >
                  {show2 ? (
                    <FiEyeOff className="h-5 w-5" />
                  ) : (
                    <FiEye className="h-5 w-5" />
                  )}
                </button>
              </div>

              <Button variant="signIn" className="">
                Sign Up
              </Button>
              <div className="mt-4 text-center">
                <Link href="/sign-in" className="text-[#475569] text-sm">
                  By signing in to your Tri-netra Account, you agree to our
                  Terms and acknowledge our Privacy Statement.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
