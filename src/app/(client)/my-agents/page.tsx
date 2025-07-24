"use client";
import CreditAgentsUsed from "./components/CreditAgentsUsed";
import { Button } from "@/components/ui/button";
import { PiDiamondsFourThin } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
import Link from "next/link";

import { agentsData } from "@/util/db";

// interface Agent {
//   id: string;
//   title: string;
//   topic: string;
//   totalNo: number;
//   scoreNo: number;
//   tags: string[];
// }

export default function Page() {
  // const [users, setUsers] = useState<Agent[]>([]);
  const router = useRouter();

  // useEffect(() => {
  //   async function getUsers() {
  //     const res = await fetch("http://localhost:3000/api/agents");
  //     const data = await res.json();
  //     setUsers(data);
  //   }
  //   getUsers();
  // }, []);

  return (
    <>
      <div className="topRoundBorder px-4 md:px-8 lg:px-16 py-4 overflow-x-hidden">
        <div className="flex justify-between   gap-4">
          <div className="flex gap-4">
            <CreditAgentsUsed topic="Credit Used" totalNo={20} scoreNO={10} />
            <CreditAgentsUsed topic="Agents Used" totalNo={10} scoreNO={2} />
          </div>

          <Button
            variant="normalButton"
            onClick={() => router.push("/my-agents/create")}
          >
            Create New Agent
          </Button>
        </div>
        <h1 className="mainH2 my-4">My Agents</h1>
        {/* <Link href="/my-agents/1">Agent 1</Link> */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4 xl:gap-6">
            <Button
              variant="navButton"
              className="h-full flex flex-col gap-2 justify-center items-center border-dashed"
              onClick={() => router.push("/my-agents/create")}
            >
              <IoAddOutline className="text-4xl" />

              <span>Create</span>
            </Button>
            {agentsData.map((item) => (
              <Link
                href={`/my-agents/${item.id}`}
                key={item.id}
                target="_blank"
                className="border border-border p-1 rounded-2xl"
              >
                <div className="w-full rounded-2xl bg-[#F8FAFC] h-[100px] flex justify-center items-center">
                  <PiDiamondsFourThin className="text-2xl" />
                </div>
                <div className="p-2 flex flex-col justify-between items-stretch   ">
                  <div className="">
                    <h1 className="mainH2">{item.title}</h1>
                    <span className="text-primary text-xs flex gap-0 items-center my-1">
                      <h1 className="mainH2">
                        {" "}
                        {item.totalNo < 10 ? `0${item.totalNo}` : item.totalNo}
                      </h1>
                      /{item.scoreNo} {item.topic}
                    </span>
                  </div>
                  <div className="flex gap-1 flex-wrap mt-2">
                    {item.tags.map((item2, index) => (
                      <div
                        key={index}
                        className="px-2 py-1  border border-border inline-block  bg-[#F8FAFC]  text-xs rounded-full"
                      >
                        {item2}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
