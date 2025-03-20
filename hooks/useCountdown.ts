"use client"

import { useState, useEffect } from "react"
import { auctionService } from "@/services/auctionService"

export function useCountdown(endDate: string | undefined) {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  })

  useEffect(() => {
    if (!endDate) return

    // Initial calculation
    const calculateRemaining = () => {
      const timeRemaining = auctionService.calculateTimeRemaining(endDate)
      setCountdown({
        days: timeRemaining.formatted.days,
        hours: timeRemaining.formatted.hours,
        mins: timeRemaining.formatted.minutes,
        secs: timeRemaining.formatted.seconds,
      })

      return timeRemaining.total > 0
    }

    // Calculate immediately
    calculateRemaining()

    // Then update every second
    const timer = setInterval(() => {
      const shouldContinue = calculateRemaining()
      if (!shouldContinue) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return countdown
}

