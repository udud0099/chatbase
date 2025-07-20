"use client";
import CreditAgentsUsed from "./components/CreditAgentsUsed";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PiDiamondsFourThin } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";

export default function Page() {
  const router = useRouter();
  const agentsData = [
    {
      id: 1,
      title: "Retro Agent",
      topic: "Credits used",
      totalNo: 10,
      scoreNo: 200,
      tags: ["Files", "Text", "Website", "Q&A"],
    },
    {
      id: 2,
      title: "Modern Explorer",
      topic: "Credits remaining",
      totalNo: 15,
      scoreNo: 300,
      tags: ["Images", "Graphic", "Portfolio", "Feedback"],
    },
    {
      id: 3,
      title: "Classic Innovator",
      topic: "Credits pending",
      totalNo: 8,
      scoreNo: 150,
      tags: ["Documents", "Illustration", "Blog", "Support"],
    },
    {
      id: 4,
      title: "Futuristic Creator",
      topic: "Credits allocated",
      totalNo: 12,
      scoreNo: 250,
      tags: ["Videos", "Animation", "Showcase", "Discussion"],
    },
    {
      id: 5,
      title: "Urban Designer",
      topic: "Credits processed",
      totalNo: 20,
      scoreNo: 400,
      tags: ["Presentations", "Layouts", "Profile", "Inquiry"],
    },
    {
      id: 6,
      title: "Nature Artist",
      topic: "Credits withdrawn",
      totalNo: 5,
      scoreNo: 100,
      tags: ["Sketches", "Images", "Gallery", "Consultation"],
    },
    {
      id: 7,
      title: "Digital Artisan",
      topic: "Credits earned",
      totalNo: 18,
      scoreNo: 350,
      tags: ["Templates", "Vector", "Website", "Evaluation"],
    },
    {
      id: 8,
      title: "Visual Thinker",
      topic: "Credits used",
      totalNo: 22,
      scoreNo: 275,
      tags: ["Moodboard", "Style Guide", "Brand", "Icons"],
    },
    {
      id: 9,
      title: "Code Wizard",
      topic: "Credits allocated",
      totalNo: 30,
      scoreNo: 500,
      tags: ["Snippets", "Functions", "Hooks", "Components"],
    },
    {
      id: 10,
      title: "AI Assistant",
      topic: "Credits processed",
      totalNo: 17,
      scoreNo: 220,
      tags: ["Chat", "Automation", "Logic", "Workflow"],
    },
    {
      id: 11,
      title: "Pixel Pilot",
      topic: "Credits earned",
      totalNo: 9,
      scoreNo: 120,
      tags: ["UI", "UX", "Design", "Test"],
    },
  ];
  return (
    <>
      <div className="border-t border-gray-300 rounded-4xl px-16 py-4">
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
              className="h-full flex flex-col gap-2 justify-center items-center"
              onClick={() => router.push("/my-agents/create")}
            >
              <IoAddOutline className="text-4xl" />

              <span>Create</span>
            </Button>
            {agentsData.map((item) => (
              <div
                key={item.id}
                className="border border-border p-1 rounded-2xl"
              >
                <div className="w-full rounded-2xl bg-[#F8FAFC] h-[100px] flex justify-center items-center">
                  <PiDiamondsFourThin className="text-2xl" />
                </div>
                <div className="p-2 flex flex-col justify-between items-stretch   ">
                  <div className="">
                    <h1 className="mainH2">{item.title}</h1>
                    <span className="text-primary text-sm flex gap-0 items-end my-2">
                      <h1 className="mainH2">{item.totalNo}</h1>/{item.scoreNo}
                    </span>
                  </div>
                  <div>
                    {item.tags.map((item2, index) => (
                      <div
                        key={index}
                        className="px-2 py-1  border border-border inline-block mr-1 mb-1 text-xs rounded-full"
                      >
                        {item2}
                      </div>
                    ))}
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
