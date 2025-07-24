"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { BsChatLeftQuote } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import DeleteAgent from "../../[agentId]/components/DeleteAgent";

export default function AddAnotherQues() {
  const [addQus, setAddQus] = useState<string[]>([""]);
  const [text, setText] = useState([
    {
      title: "Title 1",
      questions: ["addQus1", "addQus2", "addQus3", "addQus4", "addQus5"],
      ans: "ansss",
    },
    {
      title: "Title 2",
      questions: ["addQus1", "addQus2", "addQus3"],
      ans: "ansss",
    },
    // {
    //   title: "Title 1",
    //   questions: addQus,
    //   ans: "ansss",
    // },
  ]);
  const AddAnotherQues = () => {
    setAddQus([...addQus, ""]);
  };
  const addData = () => {
    // if (!title) {
    //   return;
    // }
    setText([{}]);
    // setTitle("");
    console.log("ok");
  };
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="grid w-full  items-center gap-3">
          <Label htmlFor="Title" className="text-subText text-sm">
            Title
          </Label>
          <Input type="text" id="Title" placeholder="Title" />
        </div>
        {addQus.map((item, index) => (
          <div className="grid w-full  items-center gap-3" key={index}>
            <Label htmlFor="Question" className="text-subText text-sm">
              Question
            </Label>
            <Input type="text" id="Question" placeholder="Question" />
          </div>
        ))}
        <div className="grid w-full  items-center gap-3">
          <h1
            className="mainH2 cursor-pointer"
            onClick={() => AddAnotherQues()}
          >
            + Add another question
          </h1>
        </div>
        <div className="grid w-full gap-3">
          <Label htmlFor="Answer" className="text-subText text-sm">
            Answer
          </Label>
          <Textarea placeholder="Type your Answer here." id="Answer" />
        </div>
        <div className="  w-full text-right">
          <Button variant="navButton" onClick={addData}>
            Add QnA
          </Button>
        </div>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="mainH3">Added Q & A Sources</h3>
            <div className="text-sm text-gray-600">
              Total Q&A: <span className="font-medium">{text.length}</span>
            </div>
          </div>

          <div className="space-y-2">
            {text.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3  rounded-lg border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <BsChatLeftQuote className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.questions.length} Questions{" "}
                      <ul className="inline-block list-inside list-disc ml-2">
                        <li>1 Answer</li>
                      </ul>
                    </p>
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
