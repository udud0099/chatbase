import { agentsData } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = agentsData;
  return NextResponse.json(data, { status: 200 });
}



