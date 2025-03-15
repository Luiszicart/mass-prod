"use client"

import type React from "react"
import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import {
  FiltersContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FilterButton,
  FilterButtonText,
  FilterIcon,
  FilterOptions,
  FilterOptionsList,
  FilterOption,
  FilterCheckbox,
  FilterLabel,
  ApplyButton,
} from "./AuctionFilters.styles"

const AuctionFilters: React.FC = () => {
  const [searchValue, setSearchValue] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  return (
    <FiltersContainer>
      <SearchContainer>
        <SearchIcon>
          <Search size={18} />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search within results..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </SearchContainer>

      <FilterButton onClick={toggleFilters}>
        <FilterButtonText>Filter</FilterButtonText>
        <FilterIcon>
          <ChevronDown size={18} />
        </FilterIcon>
      </FilterButton>

      {showFilters && (
        <FilterOptions>
          <FilterOptionsList>
            <FilterOption>
              <FilterCheckbox type="checkbox" id="filter-option-1" />
              <FilterLabel htmlFor="filter-option-1">Closing Today</FilterLabel>
            </FilterOption>
            <FilterOption>
              <FilterCheckbox type="checkbox" id="filter-option-2" />
              <FilterLabel htmlFor="filter-option-2">Closing Tomorrow</FilterLabel>
            </FilterOption>
            <FilterOption>
              <FilterCheckbox type="checkbox" id="filter-option-3" />
              <FilterLabel htmlFor="filter-option-3">Closing This Week</FilterLabel>
            </FilterOption>
            <FilterOption>
              <FilterCheckbox type="checkbox" id="filter-option-4" />
              <FilterLabel htmlFor="filter-option-4">Featured Items</FilterLabel>
            </FilterOption>
          </FilterOptionsList>
          <ApplyButton>Apply Filters</ApplyButton>
        </FilterOptions>
      )}
    </FiltersContainer>
  )
}

export default AuctionFilters

