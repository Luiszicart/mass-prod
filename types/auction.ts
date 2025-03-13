export interface AuctionItem {
  id: string
  title: string
  description: string
  startDate: string // ISO date string
  endDate: string // ISO date string
  displayStartDate: string // Formatted for display (e.g., "1/25")
  displayEndDate: string // Formatted for display (e.g., "1/30")
  location: string
  status: AuctionStatus
  imageUrl: string
  currentBid: number
  startingBid: number
  bidIncrement: number
  highestBidder: string | null
  bids: Bid[]
  featured: boolean
}

export interface Bid {
  id: string
  auctionId: string
  amount: number
  bidder: string
  timestamp: string // ISO date string
  type: "flat" | "proxy"
  maxProxyAmount?: number // Only for proxy bids
}

export enum AuctionStatus {
  CLOSED = "CLOSED",
  CLOSING = "CLOSING!",
  BIDDING_NOW = "BIDDING NOW!",
  COMING_UP = "COMING UP!",
  CONGRATS = "CONGRATS!",
}

export interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number // Total milliseconds remaining
  formatted: {
    days: string
    hours: string
    minutes: string
    seconds: string
  }
}

