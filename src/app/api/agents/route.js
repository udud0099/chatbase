// import { db, posts } from '@/lib/db'

// export default async function Page() {
//   const allPosts = await db.select().from(posts)
//   return (
//     <ul>
//       {allPosts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   )
// }

import { agentsData } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await agentsData;
  return NextResponse.json(data, { status: 200 });
}
