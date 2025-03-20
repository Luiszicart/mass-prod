import styled from "styled-components"

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fef3c7; /* Light amber/gold background */
  border-radius: 4px;
  padding: 0.25rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const AlertBadge = styled.div`
  background-color: #ff8324;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-weight: 500;
  font-size: 0.75rem;
  margin-right: 0.5rem;
`

export const BannerText = styled.span`
  color: #92400e; /* Amber/brown text color */
  font-size: 0.875rem;
  font-weight: 500;
`

