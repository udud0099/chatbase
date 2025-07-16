import Link from "next/link";

export default function page() {
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <Link href="/my-agents/1">Agent 1</Link>
      </div>
    </>
  );
}
