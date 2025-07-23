"use client";
import { Button } from "@/components/ui/button";
import KnowledgeBase from "../../create/components/KnowledgeBase";
import { useState } from "react";

export default function Page() {
  const [someChange, setSomeChange] = useState<boolean>(false);
  return (
    <>
      <div>
        <div className="flex justify-between gap-2 items-start  h-16 mb-2">
          <h1 className="mainH1">Knowledgebase</h1>
          <div className="flex gap-1 justify-center flex-col text-center">
            <Button
              variant="navButton"
              onClick={() => setSomeChange(!someChange)}
            >
              Re-train Agent
            </Button>
            <span className="text-yellow-500 text-xs">
              {someChange ? "3 new files found" : ""}
            </span>
          </div>
        </div>
        <KnowledgeBase />
      </div>
    </>
  );
}
