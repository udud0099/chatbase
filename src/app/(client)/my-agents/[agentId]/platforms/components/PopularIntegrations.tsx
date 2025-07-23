import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { LiaFacebookMessenger } from "react-icons/lia";
import { CiGlobe } from "react-icons/ci";
import { LuMailOpen } from "react-icons/lu";

export default function PopularIntegrations() {
  return (
    <>
      <h1 className="mainH2 my-4">My Agents</h1>
      {/* <Link href="/my-agents/1">Agent 1</Link> */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-4 xl:gap-6">
          <div className="border border-border p-1 rounded-2xl">
            <div className="w-full rounded-2xl bg-[#F8FAFC] h-[100px] flex justify-center items-center">
              <FaWhatsapp className="text-2xl" />
            </div>
            <div className="p-2 flex flex-col justify-between items-stretch   ">
              <h1 className="mainH3">WhatsApp</h1>

              <Button variant="navButton" className="w-full text-center mt-4">
                Setup
              </Button>
            </div>
          </div>

          <div className="border border-border p-1 rounded-2xl">
            <div className="w-full rounded-2xl bg-[#F8FAFC] h-[100px] flex justify-center items-center">
              <LiaFacebookMessenger className="text-2xl" />
            </div>
            <div className="p-2 flex flex-col justify-between items-stretch   ">
              <h1 className="mainH3">Messenger</h1>

              <Button variant="navButton" className="w-full text-center mt-4">
                Setup
              </Button>
            </div>
          </div>

          <div className="border border-border p-1 rounded-2xl">
            <div className="w-full rounded-2xl bg-[#F8FAFC] h-[100px] flex justify-center items-center">
              <CiGlobe className="text-2xl" />
            </div>
            <div className="p-2 flex flex-col justify-between items-stretch   ">
              <h1 className="mainH3">Website</h1>

              <Button variant="navButton" className="w-full text-center mt-4">
                Setup
              </Button>
            </div>
          </div>

          <div className="border border-border p-1 rounded-2xl">
            <div className="w-full rounded-2xl bg-[#F8FAFC] h-[100px] flex justify-center items-center">
              <LuMailOpen className="text-2xl" />
            </div>
            <div className="p-2 flex flex-col justify-between items-stretch   ">
              <h1 className="mainH3">Email</h1>

              <Button variant="navButton" className="w-full text-center mt-4">
                Setup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
