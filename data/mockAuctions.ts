import { type AuctionItem, AuctionStatus } from "@/types/auction"

// Helper to add hours to a date
const addHours = (date: Date, hours: number): Date => {
  const newDate = new Date(date)
  newDate.setHours(newDate.getHours() + hours)
  return newDate
}

// Helper to format date for display
const formatDateForDisplay = (date: Date): string => {
  return `${date.getMonth() + 1}/${date.getDate()}`
}

// Create dates relative to now for realistic timers
const now = new Date()
const inOneHour = addHours(now, 1)
const inTwoHours = addHours(now, 2)
const inOneDay = addHours(now, 24)
const inTwoDays = addHours(now, 48)
const yesterday = addHours(now, -24)
const lastWeek = addHours(now, -168)

export const mockAuctions: AuctionItem[] = [
  {
    id: "1",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: lastWeek.toISOString(),
    endDate: inOneHour.toISOString(),
    displayStartDate: "1/25",
    displayEndDate: "1/30",
    location: "Woodland, CA",
    status: AuctionStatus.BIDDING_NOW,
    imageUrl: "/placeholder.svg?height=300&width=400",
    currentBid: 15000.0,
    startingBid: 10000.0,
    bidIncrement: 100.0,
    highestBidder: "user123",
    bids: [
      {
        id: "bid1",
        auctionId: "1",
        amount: 15000.0,
        bidder: "user123",
        timestamp: addHours(now, -2).toISOString(),
        type: "flat",
      },
      {
        id: "bid2",
        auctionId: "1",
        amount: 14900.0,
        bidder: "user456",
        timestamp: addHours(now, -3).toISOString(),
        type: "flat",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    title: "2021 Tesla Model S PLAID",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: lastWeek.toISOString(),
    endDate: inTwoHours.toISOString(),
    displayStartDate: "1/25",
    displayEndDate: "1/30",
    location: "Sacramento, CA",
    status: AuctionStatus.BIDDING_NOW,
    imageUrl: "/placeholder.svg?height=300&width=400",
    currentBid: 5000.0,
    startingBid: 1000.0,
    bidIncrement: 100.0,
    highestBidder: "user789",
    bids: [
      {
        id: "bid3",
        auctionId: "2",
        amount: 5000.0,
        bidder: "user789",
        timestamp: addHours(now, -1).toISOString(),
        type: "proxy",
        maxProxyAmount: 6000.0,
      },
      {
        id: "bid4",
        auctionId: "2",
        amount: 4900.0,
        bidder: "user101",
        timestamp: addHours(now, -2).toISOString(),
        type: "flat",
      },
    ],
    featured: false,
  },
]

