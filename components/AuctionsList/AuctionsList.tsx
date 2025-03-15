"use client"

import type React from "react"
import { useEffect } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { fetchAuctions } from "../../store/slices/auctionsSlice"
import AuctionCard from "../AuctionCard/AuctionCard"
import { AuctionsGrid, AuctionsContainer, AuctionsHeader, AuctionsTitle, ViewAllLink } from "./AuctionsList.styles"

const AuctionsList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { auctions, loading } = useAppSelector((state) => state.auctions)

  useEffect(() => {
    dispatch(fetchAuctions())
  }, [dispatch])

  return (
    <AuctionsContainer>
      <AuctionsHeader>
        <AuctionsTitle>Current Auctions</AuctionsTitle>
        <ViewAllLink href="#">View All</ViewAllLink>
      </AuctionsHeader>
      <AuctionsGrid>
        {!loading && auctions.map((auction) => <AuctionCard key={auction.id} auction={auction} />)}
      </AuctionsGrid>
    </AuctionsContainer>
  )
}

export default AuctionsList

