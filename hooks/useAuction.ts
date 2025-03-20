"use client"

import { useState, useEffect, useCallback } from "react"
import type { AuctionItem, TimeRemaining } from "@/types/auction"
import { auctionService } from "@/services/auctionService"

export function useAuction(auctionId?: string) {
  const [auction, setAuction] = useState<AuctionItem | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null)

  // Fetch auction data
  const fetchAuction = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      let data: AuctionItem | null

      if (auctionId) {
        data = await auctionService.getAuctionById(auctionId)
      } else {
        data = await auctionService.getFeaturedAuction()
      }

      if (data) {
        setAuction(data)
        // Initialize time remaining
        const remaining = auctionService.calculateTimeRemaining(data.endDate)
        setTimeRemaining(remaining)
      } else {
        setError("Auction not found")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [auctionId])

  // Update time remaining every second
  useEffect(() => {
    if (!auction) return

    const timer = setInterval(() => {
      const remaining = auctionService.calculateTimeRemaining(auction.endDate)
      setTimeRemaining(remaining)
    }, 1000)

    return () => clearInterval(timer)
  }, [auction])

  // Initial fetch
  useEffect(() => {
    fetchAuction()
  }, [fetchAuction])

  return {
    auction,
    loading,
    error,
    timeRemaining,
    refreshAuction: fetchAuction,
  }
}

