export enum AuctionStatus {
  CLOSED = "CLOSED",
  CLOSING = "CLOSING!",
  BIDDING_NOW = "BIDDING NOW!",
  COMING_UP = "COMING UP!",
  CONGRATS = "CONGRATS!",
}

export interface Countdown {
  days: string
  hours: string
  mins: string
}

export interface Auction {
  id: string
  title: string
  startDate: string
  endDate: string
  location: string
  status: string
  imageUrl: string
  currentBid?: number | null
  highestBidder?: string | null
  displayStartDate?: string
  displayEndDate?: string
}

export interface SavedItem extends Auction {
  currentPrice: number
  bidType?: string
  isClosed?: boolean
  closedDate?: string
  countdown?: Countdown
  comingSoon?: boolean
  highestBid?: number
  startingBid?: number
  removalDate?: string
  removalTime?: string
}

export interface BidOption {
  type: "flat" | "proxy"
  increment: number
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatarUrl?: string
}

export interface Location {
  city: string
  state: string
  url: string
}

export interface Category {
  id: string
  name: string
  icon: string
  url: string
}

