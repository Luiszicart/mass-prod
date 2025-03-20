"use client"

import type React from "react"
import { useState } from "react"
import type { AuctionItem } from "@/types/auction"
import {
  BidFormContainer,
  BidInputWrapper,
  BidInput,
  BidButton,
  BidTypeSection,
  BidTypeOption,
  RadioCircle,
  RadioFill,
  BidTypeLabel,
  BidTypeDescription,
  ErrorMessage,
} from "./BidForm.styles"

interface BidFormProps {
  auction: AuctionItem
  onPlaceBid: (amount: number, type: "flat" | "proxy", maxProxyAmount?: number) => Promise<void>
  className?: string
}

const BidForm: React.FC<BidFormProps> = ({ auction, onPlaceBid, className }) => {
  const [bidAmount, setBidAmount] = useState<string>((auction.currentBid + auction.bidIncrement).toFixed(2))
  const [bidType, setBidType] = useState<"flat" | "proxy">("flat")
  const [maxProxyAmount, setMaxProxyAmount] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleBidAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers, commas, and decimal points
    const value = e.target.value.replace(/[^\d,.]/g, "")
    setBidAmount(value)
  }

  const handleMaxProxyAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d,.]/g, "")
    setMaxProxyAmount(value)
  }

  const handleBidTypeChange = (type: "flat" | "proxy") => {
    setBidType(type)
    setError(null)
  }

  const handleSubmit = async () => {
    try {
      setError(null)
      setIsSubmitting(true)

      const amount = Number.parseFloat(bidAmount.replace(/,/g, ""))

      if (isNaN(amount)) {
        setError("Please enter a valid bid amount")
        return
      }

      if (amount < auction.currentBid + auction.bidIncrement) {
        setError(`Bid must be at least $${(auction.currentBid + auction.bidIncrement).toFixed(2)}`)
        return
      }

      if (bidType === "proxy") {
        const maxAmount = Number.parseFloat(maxProxyAmount.replace(/,/g, ""))

        if (isNaN(maxAmount) || maxAmount <= amount) {
          setError("Max proxy amount must be greater than your bid amount")
          return
        }

        await onPlaceBid(amount, "proxy", maxAmount)
      } else {
        await onPlaceBid(amount, "flat")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to place bid")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <BidFormContainer className={className}>
      <BidInputWrapper>
        <span>$</span>
        <BidInput type="text" value={bidAmount} onChange={handleBidAmountChange} disabled={isSubmitting} />
      </BidInputWrapper>

      <BidButton
        onClick={handleSubmit}
        disabled={isSubmitting}
        status={auction.status === "CLOSING!" ? "closing" : "bidding"}
      >
        {isSubmitting ? "Processing..." : "Bid Now!"}
      </BidButton>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <BidTypeSection>
        <BidTypeOption onClick={() => handleBidTypeChange("flat")}>
          <RadioCircle active={bidType === "flat"}>{bidType === "flat" && <RadioFill />}</RadioCircle>
          <div>
            <BidTypeLabel>Flat Bid</BidTypeLabel>
            <BidTypeDescription>One-time bids in ${auction.bidIncrement.toFixed(2)} increments.</BidTypeDescription>
          </div>
        </BidTypeOption>

        <BidTypeOption onClick={() => handleBidTypeChange("proxy")}>
          <RadioCircle active={bidType === "proxy"}>{bidType === "proxy" && <RadioFill />}</RadioCircle>
          <div>
            <BidTypeLabel>Proxy Bid</BidTypeLabel>
            <BidTypeDescription>
              Automatic bids in ${auction.bidIncrement.toFixed(2)} increments up to your max.
            </BidTypeDescription>
          </div>
        </BidTypeOption>

        {bidType === "proxy" && (
          <BidInputWrapper className="max-proxy">
            <span>Max $</span>
            <BidInput
              type="text"
              value={maxProxyAmount}
              onChange={handleMaxProxyAmountChange}
              placeholder={`More than $${bidAmount}`}
              disabled={isSubmitting}
            />
          </BidInputWrapper>
        )}
      </BidTypeSection>
    </BidFormContainer>
  )
}

export default BidForm

