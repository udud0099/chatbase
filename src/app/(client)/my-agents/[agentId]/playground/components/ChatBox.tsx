"use client";
import { useEffect, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { IoMdRefresh } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Message = {
  senderName: string;
  senderInitials: string;
  avatarSrc?: string;
  message: string;
  time: string;
  isUser: boolean;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pendingStep, setPendingStep] = useState<number | null>(null);
  const [projectName, setProjectName] = useState("NextGen Pipeline");
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      senderName: "You",
      senderInitials: "Y",
      message: input,
      time: new Date().toLocaleTimeString(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    if (pendingStep !== null) {
      handleBotStep(pendingStep + 1
        // , input
      );
    } else {
      // Start bot process
      handleBotStep(0);
    }
  };
  // only for remove error.
  if(false){
    setProjectName("")
  }

  const addBotMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        senderName: "ChatGPT AI",
        senderInitials: "FA",
        message: text,
        time: new Date().toLocaleTimeString(),
        isUser: false,
      },
    ]);
  };

  const handleBotStep = async (
    step: number
    //  userResponse?: string
  ) => {
    setPendingStep(step);

    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    switch (step) {
      case 0:
        await delay(1000);
        addBotMessage("Analyzing input...");
        await delay(1200);
        addBotMessage("Surfing the platform...");
        await delay(1200);
        addBotMessage(`Creating a project called "${projectName}"`);
        await delay(1200);
        addBotMessage("Creating a source layout...");

        await delay(1000);
        addBotMessage(
          "Could you share me the name and description of the source layout?"
        );
        break;

      case 1:
        addBotMessage("Thanks for sharing the source layout.");
        await delay(1000);
        addBotMessage("Could you share me the source dictionary?");
        break;

      case 2:
        addBotMessage("Thanks for sharing the source dictionary.");
        await delay(1000);
        addBotMessage("Creating a destination layout...");
        await delay(1000);
        addBotMessage(
          "Could you share me the name and description of the destination layout?"
        );
        break;

      case 3:
        addBotMessage("Thank you for sharing the destination layout.");
        await delay(1000);
        addBotMessage("Could you share me the destination dictionary?");
        break;

      case 4:
        addBotMessage("Thanks for sharing the destination dictionary.");
        await delay(1000);
        addBotMessage("Touching up final refinements...");
        await delay(1000);
        addBotMessage("Almost done...");
        await delay(1500);
        addBotMessage(
          `✅ A project with source and destination layout has been created.\nYou can preview it on the right side or follow this link to view: [View Project](#)`
        );
        setPendingStep(null);
        break;

      default:
        setPendingStep(null);
    }
  };
  return (
    <>
      <div className=" h-full overflow-hidden flex flex-col w-full rounded-md border border-border  bg-[#F8FAFC]">
        <div className="py-1 px-4 flex gap-2 justify-between items-center bg-white h-8">
          <h1 className="mainH2">Retro Agent</h1>
          <IoMdRefresh />
        </div>
        <div className="flex-1 p-2">
          <div className=" h-[calc(100vh-270px)] max-h-[calc(100vh-270px)]  overflow-auto">
            <aside className="  w-full flex flex-col gap-3  ">
              <div
                ref={chatRef}
                className="flex flex-col gap-2   overflow-y-auto scrollbar-hide bg-white/4 border border-white/6  p-1 rounded-12"
              >
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`   border border-[#E2E8F0] flex gap-2 items-center w-[85%] py-2 px-3 rounded-md text-[#1E293B] text-sm font-semibold ${
                      msg.isUser
                        ? "flex-row-reverse bg-[#D1FAED]    ml-auto "
                        : "flex-row  bg-white   "
                    }`}
                  >
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div
                      className={`flex flex-col gap-0 items-${
                        msg.isUser ? "end" : "start"
                      }`}
                    >
                      <div
                        className={`       
                        }`}
                      >
                        {msg.message}
                      </div>
                      <div
                        className={`flex items-center gap-2 text-[12px] font-normal ${
                          msg.isUser ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <span>{msg.senderName}</span>
                        <span>{msg.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="w-full"
        >
          <div className="py-1 px-4 flex gap-2 justify-between items-center bg-white h-8 overflow-hidden">
            <Input
              type="text"
              title="Enter your message"
              placeholder="Enter your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className=" border-none! outline-none! focus:outline-none! focus:ring-0!  focus:border-transparent! focus:border-none! p-0  "
            />
            <RiSendPlaneLine
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
