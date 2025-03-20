import styled from "styled-components"

export const BidFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BidInputWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  background-color: white;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  height: 56px;
  
  span {
    margin-right: 4px;
  }
  
  &.max-proxy {
    margin-top: 12px;
    font-size: 18px;
    height: 48px;
    background-color: #f8f9fa;
  }
`

export const BidInput = styled.input`
  border: none;
  background: transparent;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  width: 100%;
  outline: none;
  padding: 0;
`

export const BidButton = styled.button<{ status: "closing" | "bidding" | "coming" }>`
  padding: 12px 16px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  min-width: 120px;
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
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const BidTypeSection = styled.div`
  display: flex;
  position: relative;
  margin-top: 16px;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`

export const BidTypeOption = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  min-width: 120px;
  cursor: pointer;
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
`

export const RadioFill = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
`

export const BidTypeLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
`

export const BidTypeDescription = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.3;
`

export const ErrorMessage = styled.div`
  color: #f6383b;
  font-size: 14px;
  margin-top: 8px;
  font-weight: 500;
`

