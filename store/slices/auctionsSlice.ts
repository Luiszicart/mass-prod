import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type Auction, AuctionStatus } from "@/types/common"

interface AuctionsState {
  featured: Auction | null
  list: Auction[]
  loading: boolean
  error: string | null
}

const initialState: AuctionsState = {
  featured: {
    id: "1",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    startDate: "1/25",
    endDate: "1/30",
    location: "Woodland, CA",
    status: AuctionStatus.BIDDING_NOW,
    imageUrl: "/placeholder.svg?height=300&width=400",
    currentBid: null,
    highestBidder: null,
    displayStartDate: "1/25",
    displayEndDate: "1/30",
  },
  list: [],
  loading: false,
  error: null,
}

const auctionsSlice = createSlice({
  name: "auctions",
  initialState,
  reducers: {
    fetchAuctionsStart(state) {
      state.loading = true
      state.error = null
    },
    fetchAuctionsSuccess(state, action: PayloadAction<Auction[]>) {
      state.list = action.payload
      state.loading = false
    },
    fetchAuctionsFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    setFeaturedAuction(state, action: PayloadAction<Auction>) {
      state.featured = action.payload
    },
  },
})

export const { fetchAuctionsStart, fetchAuctionsSuccess, fetchAuctionsFailure, setFeaturedAuction } =
  auctionsSlice.actions

export default auctionsSlice.reducer

