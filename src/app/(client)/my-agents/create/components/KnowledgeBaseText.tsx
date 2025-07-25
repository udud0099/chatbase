"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

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
  title: z.string().min(1, { message: "URL shoud not be empty" }).min(4, {
    message: "Username must be at least 4 characters.",
  }),
  des: z.string().min(1, { message: "URL shoud not be empty" }).min(4, {
    message: "Username must be at least 4 characters.",
  }),
});

export default function KnowledgeBaseText() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      des: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { title, des } = values;

    console.log(values);
    setText([...text, { title: title, des: des }]);

    form.reset();
  }

  const [text, setText] = useState([
    {
      title: "Content title 1",
      des: "Content Des",
    },
    {
      title: "Content title 2",
      des: "Content Des222 22222",
    },
  ]);

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-subText text-sm">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. john@doe.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="des"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-subText text-sm">
                    Content
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="  w-full  text-right">
              <Button variant="navButton" type="submit">
                Add Content
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="mainH3">Added Content Sources</h3>
            <div className="text-sm text-gray-600">
              Total No.: <span className="font-medium">{text.length}</span>
            </div>
          </div>

          <div className="space-y-2">
            {text.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3  rounded-lg border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <BsFileEarmarkPlus className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">{item.des}</p>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <FaRegEdit className="text-xl text-primary" />
                  <AiOutlineDelete className="text-xl text-[#E11D48] cursor-pointer" />

                  <IoIosArrowForward />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
