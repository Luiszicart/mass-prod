import { NextResponse } from "next/server"
import { mockAuctions } from "@/data/mockAuctions"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  const auction = mockAuctions.find((a) => a.id === params.id)

  if (!auction) {
    return NextResponse.json({ error: "Auction not found" }, { status: 404 })
  }

  return NextResponse.json(auction)
}

