import type { AuctionItem, TimeRemaining } from "@/types/auction"
import { mockAuctions } from "@/data/mockAuctions"

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

class AuctionService {
  private auctions: AuctionItem[] = [...mockAuctions]

  // Get all auctions
  async getAuctions(): Promise<AuctionItem[]> {
    await delay(300) // Simulate network delay
    return [...this.auctions]
  }

  // Get a single auction by ID
  async getAuctionById(id: string): Promise<AuctionItem | null> {
    await delay(200)
    const auction = this.auctions.find((a) => a.id === id)
    return auction ? { ...auction } : null
  }

  // Get featured auction
  async getFeaturedAuction(): Promise<AuctionItem | null> {
    await delay(200)
    const featured = this.auctions.find((a) => a.featured)
    return featured ? { ...featured } : null
  }

  // Calculate time remaining for an auction
  calculateTimeRemaining(endDate: string): TimeRemaining {
    const end = new Date(endDate).getTime()
    const now = new Date().getTime()
    const total = Math.max(0, end - now)

    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
      formatted: {
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      },
    }
  }
}

// Create a singleton instance
export const auctionService = new AuctionService()

