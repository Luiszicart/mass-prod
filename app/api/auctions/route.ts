import { NextResponse } from "next/server"
import { mockAuctions } from "@/data/mockAuctions"

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return NextResponse.json(mockAuctions)
}

