"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AiOutlineDelete } from "react-icons/ai";

const formSchema = z.object({
  URLlist: z.string().min(1, { message: "URL shoud not be empty" }).min(4, {
    message: "Username must be at least 4 characters.",
  }),
});

export default function KnowledgeBaseWebsite() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      URLlist: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { URLlist } = values;

    console.log(values);
    setText([...text, { url: URLlist }]);

    form.reset();
  }

  const [text, setText] = useState([
    {
      url: "https://amoebalabs.co",
    },
    {
      url: "https://amoebalabs.co",
    },
  ]);

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <h1 className="mainH2 mb-1">Add Links</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="URLlist"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="Title" className="text-subText text-sm">
                    URL
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. www.example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="  w-full  text-right">
              <Button variant="navButton" type="submit">
                Fetch Link
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="mainH3">Added Website Sources</h3>
            <div className="text-sm text-gray-600">
              Total Website: <span className="font-medium">{text.length}</span>
            </div>
          </div>

          <div className="space-y-2">
            {text.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between p-3  rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <CiGlobe className="h-6 w-6 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                        {item.url}
                      </p>
                      <div className="text-xs text-gray-500 flex gap-2">
                        <p>Last crawled just now </p>
                        <ul className="inline-block list-inside list-disc ml-2">
                          <li>1 link(s) found</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <FaRegEdit className="text-xl text-primary" />
                    <AiOutlineDelete className="text-xl text-[#E11D48] cursor-pointer" />
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
