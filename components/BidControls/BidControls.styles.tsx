import styled from "styled-components"

export const BidControlsContainer = styled.div`
  margin-bottom: 1rem;
`

interface BidTypeOptionProps {
  active: boolean
}

export const BidTypeSelector = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

export const BidTypeOption = styled.div<BidTypeOptionProps>`
  flex: 1;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#1f7ed9" : "#f1f2f4")};
  color: ${(props) => (props.active ? "white" : "#394046")};
  border: 1px solid ${(props) => (props.active ? "#1f7ed9" : "#e3e5e8")};
  
  &:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }
  
  &:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }
`

export const BidInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e3e5e8;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  
  &:focus {
    border-color: #1f7ed9;
    outline: none;
  }
`

export const BidButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #1f7ed9;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;
  
  &:hover {
    background-color: #1a6cb8;
  }
`

