"use client";

import { Switch } from "@/components/ui/switch";
import { FaRegEdit } from "react-icons/fa";
import DeleteAgent from "./components/DeleteAgent";

export default function AgentPage() {
  return ( 
        <div className="  flex justify-between">
          <div>
            <h1 className="mainH1">Retro Agent</h1>
            <span className="text-primary text-sm flex gap-0 items-end  ">
              <h1 className="mainH2">10</h1>/200
            </span>
            <div className="flex gap-1 flex-wrap my-4">
              <div className="px-2 py-1  border border-border inline-block   text-xs rounded-full">
                Images
              </div>
              <div className="px-2 py-1  border border-border inline-block   text-xs rounded-full">
                Portfolio
              </div>
              <div className="px-2 py-1  border border-border inline-block   text-xs rounded-full">
                Feedback
              </div>
              <div className="px-2 py-1  border border-border inline-block   text-xs rounded-full">
                Blog
              </div>
            </div>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <Switch
              id="airplane-mode"
              defaultChecked // Makes it ON by default
              className="data-[state=checked]:bg-green-500"
            />
            <FaRegEdit className="text-xl text-primary" />
            <DeleteAgent />
          </div>
        </div> 
  );
}
