"use client"

import type React from "react"
import { useState } from "react"
import { BidControlsContainer, BidTypeSelector, BidTypeOption, BidInput, BidButton } from "./BidControls.styles"

const BidControls: React.FC = () => {
  const [bidType, setBidType] = useState<"flat" | "proxy">("flat")
  const [bidAmount, setBidAmount] = useState<string>("")

  const handleBidTypeChange = (type: "flat" | "proxy") => {
    setBidType(type)
  }

  const handleBidAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "")
    setBidAmount(value)
  }

  const handleSubmit = () => {
    // Handle bid submission
    console.log(`Submitting ${bidType} bid of $${bidAmount}`)
  }

  return (
    <BidControlsContainer>
      <BidTypeSelector>
        <BidTypeOption active={bidType === "flat"} onClick={() => handleBidTypeChange("flat")}>
          Flat Bid
        </BidTypeOption>
        <BidTypeOption active={bidType === "proxy"} onClick={() => handleBidTypeChange("proxy")}>
          Proxy Bid
        </BidTypeOption>
      </BidTypeSelector>
      <BidInput type="text" value={bidAmount} onChange={handleBidAmountChange} placeholder="Enter bid amount" />
      <BidButton onClick={handleSubmit}>Place Bid</BidButton>
    </BidControlsContainer>
  )
}

export default BidControls

