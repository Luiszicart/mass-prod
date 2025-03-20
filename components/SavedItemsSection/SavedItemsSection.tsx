"use client"

import type React from "react"
import { useEffect } from "react"
import { ExternalLink } from "lucide-react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { updateCountdowns } from "../../store/slices/savedItemsSlice"
import AuctionCard from "../AuctionCard/AuctionCard"
import {
  SavedItemsContainer,
  SavedItemsHeader,
  SavedItemsTitle,
  ViewMoreLink,
  SavedItemsGrid,
} from "./SavedItemsSection.styles"

const SavedItemsSection: React.FC = () => {
  const { items } = useAppSelector((state) => state.savedItems)
  const dispatch = useAppDispatch()

  // Update countdowns every second
  useEffect(() => {
    // Initial update
    dispatch(updateCountdowns())

    const timer = setInterval(() => {
      dispatch(updateCountdowns())
    }, 1000)

    return () => clearInterval(timer)
  }, [dispatch])

  return (
    <SavedItemsContainer>
      <SavedItemsHeader>
        <SavedItemsTitle>Saved Items:</SavedItemsTitle>
        <ViewMoreLink href="#">
          View More <ExternalLink size={16} />
        </ViewMoreLink>
      </SavedItemsHeader>

      <SavedItemsGrid>
        {items.map((item) => (
          <AuctionCard key={item.id} item={item} />
        ))}
      </SavedItemsGrid>
    </SavedItemsContainer>
  )
}

export default SavedItemsSection

