import styled from "styled-components"
import Link from "next/link"

export const LocationLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  color: #1f7ed9;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  
  svg {
    margin-right: 0.25rem;
    min-width: 18px;
  }
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    
    svg {
      min-width: 16px;
      width: 16px;
      height: 16px;
    }
  }
`

export const LocationText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

