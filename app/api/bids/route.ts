import { NextResponse } from "next/server"
import { mockAuctions } from "@/data/mockAuctions"

export async function POST(request: Request) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  try {
    const body = await request.json()
    const { auctionId, amount, bidder, type, maxProxyAmount } = body

    if (!auctionId || !amount || !bidder || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const auctionIndex = mockAuctions.findIndex((a) => a.id === auctionId)

    if (auctionIndex === -1) {
      return NextResponse.json({ error: "Auction not found" }, { status: 404 })
    }

    const auction = mockAuctions[auctionIndex]

    // Validate bid amount
    if (amount < auction.currentBid + auction.bidIncrement) {
      return NextResponse.json(
        { error: `Bid must be at least ${auction.currentBid + auction.bidIncrement}` },
        { status: 400 },
      )
    }

    // Create new bid
    const newBid = {
      id: `bid${Date.now()}`,
      auctionId,
      amount,
      bidder,
      timestamp: new Date().toISOString(),
      type,
      ...(type === "proxy" && maxProxyAmount ? { maxProxyAmount } : {}),
    }

    // Update auction
    const updatedAuction = {
      ...auction,
      currentBid: amount,
      highestBidder: bidder,
      bids: [newBid, ...auction.bids],
    }

    // Update mock database
    mockAuctions[auctionIndex] = updatedAuction

    return NextResponse.json(updatedAuction)
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

