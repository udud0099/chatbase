import Link from "next/link";
import CreditAgentsUsed from "./components/CreditAgentsUsed";

export default function Page() {
  return (
    <>
      <div className="border-t border-gray-300 rounded-4xl px-16 py-4">
        <div>
          <div>
            <CreditAgentsUsed />
          </div>
        </div>
        <h1>Dashboard</h1>
        <Link href="/my-agents/1">Agent 1</Link>
      </div>
    </>
  );
}
