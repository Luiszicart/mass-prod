import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UiState {
  mobileMenuOpen: boolean
  searchQuery: string
  activeCategory: string | null
}

const initialState: UiState = {
  mobileMenuOpen: false,
  searchQuery: "",
  activeCategory: null,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    },
    setActiveCategory(state, action: PayloadAction<string | null>) {
      state.activeCategory = action.payload
    },
  },
})

export const { toggleMobileMenu, setSearchQuery, setActiveCategory } = uiSlice.actions

export default uiSlice.reducer

