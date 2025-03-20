import { configureStore } from "@reduxjs/toolkit"
import uiReducer from "./slices/uiSlice"
import auctionsReducer from "./slices/auctionsSlice"
import userReducer from "./slices/userSlice"

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auctions: auctionsReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

