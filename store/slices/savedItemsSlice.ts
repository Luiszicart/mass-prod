import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { SavedItem } from "@/types/common"
import { auctionService } from "@/services/auctionService"

interface SavedItemsState {
  items: SavedItem[]
  loading: boolean
  error: string | null
}

// Helper to create a dynamic end date for countdown timers
const createEndDate = (daysOffset: number, hoursOffset: number, minsOffset: number) => {
  const now = new Date()
  now.setDate(now.getDate() + daysOffset)
  now.setHours(now.getHours() + hoursOffset)
  now.setMinutes(now.getMinutes() + minsOffset)
  return now.toISOString()
}

const initialState: SavedItemsState = {
  items: [
    {
      id: "1",
      title: "2024 Ford F-150 Lightning LARIAT",
      startDate: "1/25/25",
      endDate: "1/30/25",
      location: "Woodland, CA",
      status: "CLOSED",
      imageUrl: "/placeholder.svg?height=140&width=140",
      currentPrice: 15000.0,
      bidType: "flat",
      isClosed: true,
      closedDate: "23-04-19 12:00:17",
      highestBidder: "high_bidder",
    },
    {
      id: "2",
      title: "2021 Tesla Model S PLAID",
      startDate: "1/25/25",
      endDate: createEndDate(0, 0, 2), // 2 minutes from now
      location: "Woodland, CA",
      status: "CLOSING!",
      imageUrl: "/placeholder.svg?height=140&width=140",
      currentPrice: 15000.0,
      highestBid: 14900.0,
      countdown: { days: "00", hours: "00", mins: "02" },
      bidType: "flat",
      highestBidder: "winning_bidder_name",
    },
    {
      id: "3",
      title: "2022 Rivian R1T LAUNCH EDITION",
      startDate: "1/25/25",
      endDate: createEndDate(1, 21, 3), // 1 day, 21 hours, 3 minutes from now
      location: "Woodland, CA",
      status: "BIDDING NOW!",
      imageUrl: "/placeholder.svg?height=140&width=140",
      currentPrice: 5000.0,
      countdown: { days: "01", hours: "21", mins: "03" },
      highestBid: 4900.0,
      bidType: "flat",
      highestBidder: "winning_bidder_name",
    },
    {
      id: "4",
      title: "2023 Lucid Air GRAND TOURING",
      startDate: "1/25/25",
      endDate: createEndDate(1, 21, 3), // 1 day, 21 hours, 3 minutes from now
      location: "Woodland, CA",
      status: "COMING UP!",
      imageUrl: "/placeholder.svg?height=140&width=140",
      currentPrice: 5.0,
      countdown: { days: "01", hours: "21", mins: "03" },
      comingSoon: true,
      startingBid: 5,
    },
  ],
  loading: false,
  error: null,
}

const savedItemsSlice = createSlice({
  name: "savedItems",
  initialState,
  reducers: {
    fetchSavedItemsStart(state) {
      state.loading = true
      state.error = null
    },
    fetchSavedItemsSuccess(state, action: PayloadAction<SavedItem[]>) {
      state.items = action.payload
      state.loading = false
    },
    fetchSavedItemsFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    toggleSavedItem(state, action: PayloadAction<string>) {
      const itemId = action.payload
      const existingIndex = state.items.findIndex((item) => item.id === itemId)

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1)
      } else {
        // In a real app, we would add the item here
        // This would require fetching the full item data
      }
    },
    updateCountdowns(state) {
      state.items = state.items.map((item) => {
        // Skip closed items
        if (item.isClosed) return item

        // If the item has an endDate, calculate the countdown
        if (item.endDate) {
          const timeRemaining = auctionService.calculateTimeRemaining(item.endDate)
          return {
            ...item,
            countdown: {
              days: timeRemaining.formatted.days,
              hours: timeRemaining.formatted.hours,
              mins: timeRemaining.formatted.minutes,
            },
          }
        }
        return item
      })
    },
  },
})

export const {
  fetchSavedItemsStart,
  fetchSavedItemsSuccess,
  fetchSavedItemsFailure,
  toggleSavedItem,
  updateCountdowns,
} = savedItemsSlice.actions

export default savedItemsSlice.reducer

