"use client"

import type React from "react"
import { useAuction } from "@/hooks/useAuction"
import {
  FeaturedContainer,
  FeaturedContent,
  FeaturedLeft,
  BiddingBadge,
  DateLocation,
  FeaturedTitle,
  FeaturedRight,
  ImageContainer,
  Image,
  Dot,
  ViewNowButton,
  PaginationDots,
} from "./FeaturedAuction.styles"

const FeaturedAuction: React.FC = () => {
  const { auction, timeRemaining } = useAuction()

  // Format the countdown for display
  const formattedCountdown = () => {
    if (!timeRemaining) return { days: "00", hours: "00", mins: "00" }
    return {
      days: timeRemaining.formatted.days,
      hours: timeRemaining.formatted.hours,
      mins: timeRemaining.formatted.minutes,
    }
  }

  if (!auction) return null

  const countdown = formattedCountdown()

  return (
    <FeaturedContainer>
      <FeaturedContent>
        <FeaturedLeft>
          <BiddingBadge>BIDDING NOW!</BiddingBadge>
          <DateLocation>
            {auction.displayStartDate} - {auction.displayEndDate} <span className="separator">|</span>{" "}
            {auction.location}
          </DateLocation>
          <FeaturedTitle>{auction.title}</FeaturedTitle>
          <ViewNowButton>View Now!</ViewNowButton>
          <PaginationDots>
            <Dot active={false} />
            <Dot active={false} />
            <Dot active={true} />
          </PaginationDots>
        </FeaturedLeft>
        <FeaturedRight>
          <ImageContainer>
            <Image src={auction.imageUrl || "/placeholder.svg"} alt={auction.title} />
          </ImageContainer>
        </FeaturedRight>
      </FeaturedContent>
    </FeaturedContainer>
  )
}

export default FeaturedAuction

