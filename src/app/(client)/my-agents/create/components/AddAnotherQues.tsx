"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AddAnotherQues() {
  const [addQus, setAddQus] = useState<string[]>([""]);
  const AddAnotherQues = () => {
    setAddQus([...addQus, ""]);
  };
  return (
    <>
      {addQus.map((item, index) => (
        <div className="grid w-full  items-center gap-3" key={index}>
          <Label htmlFor="Question" className="text-subText text-sm">
            Question
          </Label>
          <Input type="text" id="Question" placeholder="Question" />
        </div>
      ))}
      <div className="grid w-full  items-center gap-3">
        <h1 className="mainH2 cursor-pointer" onClick={() => AddAnotherQues()}>
          + Add another question
        </h1>
      </div>
    </>
  );
}
