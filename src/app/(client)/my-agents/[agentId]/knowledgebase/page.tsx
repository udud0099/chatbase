import { Button } from "@/components/ui/button";
import KnowledgeBase from "../../create/components/KnowledgeBase";

export default function page() {
  return (
    <>
      <div>
        <div className="flex justify-between gap-2 items-center mb-2">
          <h1 className="mainH1">Knowledgebase</h1>
          <Button variant="navButton">Re-train Agent</Button>
        </div>
        <KnowledgeBase />
      </div>
    </>
  );
}
