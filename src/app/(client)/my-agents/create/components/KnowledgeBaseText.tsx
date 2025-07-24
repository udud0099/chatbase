"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import DeleteAgent from "../../[agentId]/components/DeleteAgent";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function KnowledgeBaseText() {
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
  console.log(text, setText);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addData = () => {
    if (!title || !desc) {
      return;
    }
    setText([...text, { title: title, des: desc }]);
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="grid w-full  items-center gap-3">
          <Label htmlFor="Title" className="text-subText text-sm">
            Title
          </Label>
          <Input
            type="text"
            id="Title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid w-full gap-3">
          <Label htmlFor="Content" className="text-subText text-sm">
            Content
          </Label>
          <Textarea
            placeholder="Type your Content here."
            id="Content"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className=" w-full  text-right">
          <Button variant="navButton" onClick={addData}>
            Add Content{" "}
          </Button>
        </div>
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
                  <DeleteAgent />
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
