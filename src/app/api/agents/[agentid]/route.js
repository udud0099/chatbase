import { agentsData } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const agentsDataData = agentsData.filter((item) => item.id == content.params.id);
  return NextResponse.json(
    agentsDataData.length == 0
      ? { result: "no data found", success: false }
      : { result: agentsDataData[0], success: true },
    {
      status: 200,
    }
  );
}