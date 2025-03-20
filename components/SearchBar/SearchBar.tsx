"use client"

import type React from "react"
import { SearchIcon } from "lucide-react"
import type { SearchBarProps } from "./SearchBar.types"
import { SearchContainer, SearchInput, IconWrapper } from "./SearchBar.styles"

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = "Search" }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <SearchContainer>
      <IconWrapper>
        <SearchIcon size={18} />
      </IconWrapper>
      <SearchInput type="text" value={value} onChange={handleChange} placeholder={placeholder} />
    </SearchContainer>
  )
}

export default SearchBar

