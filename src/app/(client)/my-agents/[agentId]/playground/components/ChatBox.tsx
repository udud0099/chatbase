// import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { IoMdRefresh } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";

export default function ChatBox() {
  return (
    <>
      {/* <Textarea
        placeholder="Type your Content here."
        id="Content"
        className="min-h-[500px]"
      /> */}
      <div className="h-[500px] overflow-hidden flex flex-col w-full rounded-md border border-border  bg-[#F8FAFC]">
        <div className="py-1 px-4 flex gap-2 justify-between items-center bg-white h-8">
          <h1 className="mainH2">Retro Agent</h1>
          <IoMdRefresh />
        </div>
        <div className="flex-1 p-2">ok</div>
        <div className="py-1 px-4 flex gap-2 justify-between items-center bg-white h-8 overflow-hidden">
          <Input
            type="text"
            placeholder="Enter Message"
            className=" border-none! outline-none! focus:outline-none! focus:ring-0!  focus:border-transparent! focus:border-none! p-0  "
          />
          <RiSendPlaneLine className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}
