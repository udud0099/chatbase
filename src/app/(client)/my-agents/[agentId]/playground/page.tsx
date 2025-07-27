import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ChatBox from "./components/ChatBox";
export default function page() {
  return (
    <>
      <div className=" h-[calc(100vh-120px)] overflow-hidden   ">
        <div>
          <h1 className="mainH1 mb-4">Playground</h1>
        </div>
        <div className="w-full   h-[calc(100vh-170px)] overflow-y-auto border border-border rounded-md p-2">
          <div className="flex gap-4 ">
            <div className="flex-1">
              <div className="flex gap-2 justify-between items-center mb-4">
                <p className="text-sm text-subText">Status</p>

                <p className="text-sm text-green-600">Trained</p>
              </div>
              <div>
                <div className="flex flex-col gap-y-4">
                  <div className="grid w-full  items-center gap-3">
                    <Label htmlFor="Title" className="text-subText text-sm">
                      Model
                    </Label>
                    <Select>
                      <SelectTrigger className=" w-full">
                        <SelectValue placeholder="GPT-40" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>GPT-40</SelectLabel>
                          <SelectItem value="GPT-40">GPT-40</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid w-full  items-center gap-3">
                    <Label htmlFor="Title" className="text-subText text-sm">
                      Temperature
                    </Label>
                    <Slider defaultValue={[33]} max={100} step={1} />
                    <div className="flex gap-2 justify-between items-center">
                      <p className="text-subText text-sm">Reserved</p>
                      <p className="text-subText text-sm">Creative</p>
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-3">
                    <Label htmlFor="Title" className="text-subText text-sm">
                      Instruction
                    </Label>
                    <Textarea
                      placeholder="Type your Content here."
                      id="Content"
                      className=" h-[calc(100vh-430px)] max-h-[calc(100vh-430px)] overflow-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <ChatBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
