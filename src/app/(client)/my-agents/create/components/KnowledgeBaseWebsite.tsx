"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaRegEdit } from "react-icons/fa";
import DeleteAgent from "../../[agentId]/components/DeleteAgent";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";

export default function KnowledgeBaseWebsite() {
  const [text, setText] = useState([
    {
      url: "https://amoebalabs.co",
    },
    {
      url: "https://amoebalabs.co",
    },
  ]);
  // console.log(text, setText);

  const [title, setTitle] = useState("");

  const addData = () => {
    if (!title) {
      return;
    }
    setText([...text, { url: title }]);
    setTitle("");
  };

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="grid w-full  items-center gap-3">
          <h1 className="mainH2 mb-1">Add Links</h1>
          <Label htmlFor="Title" className="text-subText text-sm">
            URL
          </Label>
          <Input
            type="text"
            id="Title"
            placeholder="e.g. www.example.com"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="  w-full  text-right">
          <Button variant="navButton" onClick={addData}>
            Fetch Link
          </Button>
        </div>
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
                    <DeleteAgent />
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
