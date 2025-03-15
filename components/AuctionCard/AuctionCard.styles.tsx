import styled from "styled-components"

interface CardContainerProps {
  isClosing: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: ${(props) => (props.isClosing ? "2px solid #ff8324" : "1px solid #e0e0e0")};
  0,0,0.1);
  border: ${(props) => (props.isClosing ? "2px solid #ff8324" : "1px solid #e0e0e0")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    border-radius: 6px;
  }
`

export const TopSection = styled.div`
  padding: 16px;
  display: flex;
  gap: 16px;
  background-color: white;
  height: 172px; /* Set fixed height to ensure consistent alignment */
  
  @media (max-width: 768px) {
    padding: 12px;
    height: auto;
    min-height: 140px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

export const StarIcon = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  z-index: 10;
  color: #ff8324;
`

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 100%;
`

export const DateLocationText = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const ItemTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #0c2055;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: 63px; /* Approximately 3 lines of text */
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
    -webkit-line-clamp: 2;
    max-height: 36px;
  }
`

export const HighestBidSection = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`

export const HighestBidLabel = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const BidderName = styled.span`
  font-size: 14px;
  color: #00b2ff;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const BidAmount = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #00b2ff;
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const UserAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`

export const StatusBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  height: 32px;
  margin-bottom: 16px;
  width: 100%;
  
  @media (max-width: 768px) {
    height: 28px;
    margin-bottom: 12px;
  }
`

export const StatusLabelWrapper = styled.div`
  width: 110px; /* Fixed width for all status labels */
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 90px;
  }
`

export const StatusLabel = styled.div<{ status: "closed" | "congrats" | "closing" | "bidding" | "coming" }>`
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  background-color: ${(props) => {
    switch (props.status) {
      case "closed":
        return "#f6383b"
      case "congrats":
        return "#00c853"
      case "closing":
        return "#ff8324"
      case "bidding":
        return "#00b2ff"
      case "coming":
        return "#1f7ed9"
      default:
        return "#666"
    }
  }};
  color: white;
  height: 100%;
  width: 100%;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 0 8px;
  }
`

export const CountdownContainer = styled.div<{ status: "closed" | "congrats" | "closing" | "bidding" | "coming" }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.status === "closed" ? "flex-end" : "center")};
  background-color: ${(props) => {
    switch (props.status) {
      case "closed":
        return "#8a2500"
      case "congrats":
        return "#00a040"
      case "closing":
        return "#d64b00"
      case "bidding":
        return "#1f7ed9"
      case "coming":
        return "#0c5ca9"
      default:
        return "#444"
    }
  }};
  color: white;
  padding: 0 12px;
  height: 100%;
  flex: 1;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 0 8px;
  }
`

export const WinningBidLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 10px;
    margin-right: 4px;
  }
`

export const WinningBidAmount = styled.span`
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const CountdownUnit = styled.span`
  font-size: 18px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const CountdownLabel = styled.span`
  font-size: 10px;
  margin: 0 4px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 8px;
    margin: 0 2px;
  }
`

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #f1f2f4;
  flex-grow: 1;
  min-height: 180px;
  
  @media (max-width: 768px) {
    padding: 12px;
    min-height: 150px;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  height: 56px; /* Fixed height for consistent alignment */
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    height: 48px;
    margin-bottom: 12px;
  }
`

export const CurrentPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const BidInputWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  flex: 1;
  
  span {
    margin-right: 4px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const BidInput = styled.input`
  border: none;
  background: transparent;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  width: 100%;
  outline: none;
  padding: 0;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const ActionButton = styled.button<{ status: "closing" | "bidding" | "coming" }>`
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  min-width: 120px; /* Fixed minimum width for consistent alignment */
  background-color: ${(props) => {
    switch (props.status) {
      case "closing":
        return "#ff8324"
      case "bidding":
        return "#00b2ff"
      case "coming":
        return "#666"
      default:
        return "#1f7ed9"
    }
  }};
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
    min-width: 90px;
  }
`

export const BidTypeSection = styled.div`
  display: flex;
  position: relative;
  margin-top: 0;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`

export const BidTypeOption = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  min-width: 120px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    min-width: 0;
  }
`

export const RadioCircle = styled.div<{ active: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.active ? "#00b2ff" : "#ccc")};
  background-color: ${(props) => (props.active ? "#00b2ff" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  margin-top: 2px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`

export const RadioFill = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  
  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`

export const BidTypeLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const BidTypeDescription = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const InfoIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #00b2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00b2ff;
  margin-left: auto;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

export const ClosedSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    margin-bottom: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`

export const ClosedMessage = styled.p`
  font-size: 14px;
  color: #666;
  font-style: italic;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const ClosedDate = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const BidderInfo = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    align-self: flex-end;
  }
`

export const BidderUsername = styled.span`
  font-size: 14px;
  color: #666;
  margin-right: 8px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const ComingUpMessage = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-top: 0;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const FindSimilarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    background-color: #f9f9f9;
  }
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const FindSimilarIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #1f7ed9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

export const FindSimilarText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

