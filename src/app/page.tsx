import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>
        <h1>ok ready - test</h1>
        <br />
        <Button>
          <Link href={"/my-agents"}>start button</Link>
        </Button>
      </div>
    </>
  );
}
