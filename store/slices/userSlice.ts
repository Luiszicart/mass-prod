import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "@/types/common"

interface UserState {
  currentUser: User | null
  notifications: number
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  currentUser: null,
  notifications: 8,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true
      state.error = null
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.currentUser = action.payload
      state.loading = false
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    logout(state) {
      state.currentUser = null
    },
    setNotifications(state, action: PayloadAction<number>) {
      state.notifications = action.payload
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, setNotifications } = userSlice.actions

export default userSlice.reducer

