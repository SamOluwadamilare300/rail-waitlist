import { NextResponse } from "next/server";
import WaitlistEntry from "@/models/WaitlistEntry";
import dbConnect from "@/lib/dbConnect";


export async function GET() {
  await dbConnect();
  const count = await WaitlistEntry.countDocuments();
  return NextResponse.json({ count });
}