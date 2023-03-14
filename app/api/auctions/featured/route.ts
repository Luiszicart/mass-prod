import { NextResponse } from "next/server"
import { mockAuctions } from "@/data/mockAuctions"

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  const featured = mockAuctions.find((a) => a.featured)

  if (!featured) {
    return NextResponse.json({ error: "No featured auction found" }, { status: 404 })
  }

  return NextResponse.json(featured)
}

