import { configureStore } from "@reduxjs/toolkit"
import auctionsReducer from "./slices/auctionsSlice"
import savedItemsReducer from "./slices/savedItemsSlice"
import userReducer from "./slices/userSlice"
import uiReducer from "./slices/uiSlice"

export const store = configureStore({
  reducer: {
    auctions: auctionsReducer,
    savedItems: savedItemsReducer,
    user: userReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

