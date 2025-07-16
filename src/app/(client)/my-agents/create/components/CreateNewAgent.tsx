import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateNewAgent() {
  return (
    <>
      <div>
        <h1 className="mainH1 ">Create New Agent</h1>
        <div>
          <div className="grid w-full  items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full gap-3">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
        </div>
      </div>
    </>
  );
}
