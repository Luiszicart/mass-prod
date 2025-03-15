"use client"

import type React from "react"
import { useState } from "react"
import { Info, Search } from "lucide-react"
import type { AuctionCardProps } from "./AuctionCard.types"
import { useCountdown } from "@/hooks/useCountdown"
import {
  CardContainer,
  TopSection,
  ImageWrapper,
  StarIcon,
  ItemImage,
  InfoSection,
  DateLocationText,
  ItemTitle,
  HighestBidSection,
  HighestBidLabel,
  BidderName,
  BidAmount,
  UserAvatar,
  StatusBar,
  StatusLabel,
  CountdownContainer,
  CountdownUnit,
  CountdownLabel,
  WinningBidLabel,
  WinningBidAmount,
  BottomSection,
  PriceContainer,
  CurrentPrice,
  ActionButton,
  BidTypeSection,
  BidTypeOption,
  RadioCircle,
  RadioFill,
  BidTypeLabel,
  BidTypeDescription,
  InfoIconWrapper,
  ClosedSection,
  ClosedMessage,
  ClosedDate,
  BidderInfo,
  BidderUsername,
  ComingUpMessage,
  FindSimilarButton,
  FindSimilarIcon,
  FindSimilarText,
  BidInputWrapper,
  BidInput,
} from "./AuctionCard.styles"

const AuctionCard: React.FC<AuctionCardProps> = ({ item }) => {
  // Determine card type
  const isClosed = item.status === "CLOSED"
  const isClosing = item.status === "CLOSING!"
  const isBiddingNow = item.status === "BIDDING NOW!"
  const isComingUp = item.status === "COMING UP!"

  // State for bid type and amount
  const [selectedBidType, setSelectedBidType] = useState<"flat" | "proxy">("flat")
  const [bidAmount, setBidAmount] = useState(isClosing ? "15,000.00" : isBiddingNow ? "5,000.00" : "5.00")
  const countdown = useCountdown(item.endDate)

  const handleBidTypeChange = (type: "flat" | "proxy") => {
    setSelectedBidType(type)
  }

  const handleBidAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers, commas, and decimal points
    const value = e.target.value.replace(/[^\d,.]/g, "")
    setBidAmount(value)
  }

  return (
    <CardContainer isClosing={isClosing}>
      {/* Top Section - White Background */}
      <TopSection>
        <ImageWrapper>
          <StarIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff8324" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="#ff8324"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </StarIcon>
          <ItemImage src={item.imageUrl || "/placeholder.svg?height=140&width=140"} alt={item.title} />
        </ImageWrapper>

        <InfoSection>
          {/* Date and Location */}
          <DateLocationText>
            {item.startDate} – {item.endDate} <span className="text-gray-500 mx-1">|</span> {item.location}
          </DateLocationText>

          {/* Title */}
          <ItemTitle>{item.title}</ItemTitle>

          {/* Highest Bid Section - Only for Closing and Bidding Now */}
          {(isClosing || isBiddingNow) && (
            <HighestBidSection>
              <HighestBidLabel>
                Highest Bid <BidderName>winning_bidder_name</BidderName>
              </HighestBidLabel>
              <BidAmount>
                ${isClosing ? "14,900.00" : "4,900.00"}
                <UserAvatar>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#cccccc"
                    stroke="#cccccc"
                    strokeWidth="1"
                  >
                    <circle cx="12" cy="12" r="10" fill="#cccccc" />
                  </svg>
                </UserAvatar>
              </BidAmount>
            </HighestBidSection>
          )}
        </InfoSection>
      </TopSection>

      {/* Bottom Section - Gray Background */}
      <BottomSection>
        {/* Status Bar */}
        {isClosed && (
          <StatusBar>
            <StatusLabel status="closed">CLOSED</StatusLabel>
            <CountdownContainer status="closed">
              <WinningBidLabel>WINNING BID</WinningBidLabel>
              <WinningBidAmount>$15,000.00</WinningBidAmount>
            </CountdownContainer>
          </StatusBar>
        )}

        {isClosing && (
          <StatusBar>
            <StatusLabel status="closing">CLOSING!</StatusLabel>
            <CountdownContainer status="closing">
              <CountdownUnit>{countdown.days}</CountdownUnit>
              <CountdownLabel>DAYS</CountdownLabel>
              <CountdownUnit>{countdown.hours}</CountdownUnit>
              <CountdownLabel>HRS</CountdownLabel>
              <CountdownUnit>{countdown.mins}</CountdownUnit>
              <CountdownLabel>MINS</CountdownLabel>
            </CountdownContainer>
          </StatusBar>
        )}

        {isBiddingNow && (
          <StatusBar>
            <StatusLabel status="bidding">BIDDING NOW!</StatusLabel>
            <CountdownContainer status="bidding">
              <CountdownUnit>{countdown.days}</CountdownUnit>
              <CountdownLabel>DAYS</CountdownLabel>
              <CountdownUnit>{countdown.hours}</CountdownUnit>
              <CountdownLabel>HRS</CountdownLabel>
              <CountdownUnit>{countdown.mins}</CountdownUnit>
              <CountdownLabel>MINS</CountdownLabel>
            </CountdownContainer>
          </StatusBar>
        )}

        {isComingUp && (
          <StatusBar>
            <StatusLabel status="coming">COMING UP!</StatusLabel>
            <CountdownContainer status="coming">
              <CountdownUnit>{countdown.days}</CountdownUnit>
              <CountdownLabel>DAYS</CountdownLabel>
              <CountdownUnit>{countdown.hours}</CountdownUnit>
              <CountdownLabel>HRS</CountdownLabel>
              <CountdownUnit>{countdown.mins}</CountdownUnit>
              <CountdownLabel>MINS</CountdownLabel>
            </CountdownContainer>
          </StatusBar>
        )}

        {/* Closing and Bidding Now */}
        {(isClosing || isBiddingNow) && (
          <>
            <PriceContainer>
              <BidInputWrapper>
                <span>$</span>
                <BidInput type="text" value={bidAmount} onChange={handleBidAmountChange} />
              </BidInputWrapper>
              <ActionButton status={isClosing ? "closing" : "bidding"}>Bid Now!</ActionButton>
            </PriceContainer>

            {/* Bid Type Selection */}
            <BidTypeSection>
              <BidTypeOption onClick={() => handleBidTypeChange("flat")}>
                <RadioCircle active={selectedBidType === "flat"}>
                  {selectedBidType === "flat" && <RadioFill />}
                </RadioCircle>
                <div>
                  <BidTypeLabel>Flat Bid</BidTypeLabel>
                  <BidTypeDescription>One-time bids in $100 increments.</BidTypeDescription>
                </div>
              </BidTypeOption>

              <BidTypeOption onClick={() => handleBidTypeChange("proxy")}>
                <RadioCircle active={selectedBidType === "proxy"}>
                  {selectedBidType === "proxy" && <RadioFill />}
                </RadioCircle>
                <div>
                  <BidTypeLabel>Proxy Bid</BidTypeLabel>
                  <BidTypeDescription>Automatic bids in $100 increments up to your max.</BidTypeDescription>
                </div>
              </BidTypeOption>

              <InfoIconWrapper>
                <Info size={16} />
              </InfoIconWrapper>
            </BidTypeSection>
          </>
        )}

        {/* Coming Up */}
        {isComingUp && (
          <>
            <PriceContainer>
              <CurrentPrice>$5.00</CurrentPrice>
              <ActionButton status="coming">Bidding Soon!</ActionButton>
            </PriceContainer>
            <ComingUpMessage>
              Bidding is not yet open. This lot has a $5 starting bid and will be available once the auction begins.
            </ComingUpMessage>
          </>
        )}

        {/* Closed Info */}
        {isClosed && (
          <>
            <ClosedSection>
              <div>
                <ClosedMessage>Bidding for this lot is closed.</ClosedMessage>
                <ClosedDate>23-04-19 12:00:17</ClosedDate>
              </div>
              <BidderInfo>
                <BidderUsername>high_bidder</BidderUsername>
                <UserAvatar>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#cccccc"
                    stroke="#cccccc"
                    strokeWidth="1"
                  >
                    <circle cx="12" cy="12" r="10" fill="#cccccc" />
                  </svg>
                </UserAvatar>
              </BidderInfo>
            </ClosedSection>
            <FindSimilarButton>
              <FindSimilarIcon>
                <Search size={16} color="white" />
              </FindSimilarIcon>
              <FindSimilarText>Find a Similar Item</FindSimilarText>
            </FindSimilarButton>
          </>
        )}
      </BottomSection>
    </CardContainer>
  )
}

export default AuctionCard

