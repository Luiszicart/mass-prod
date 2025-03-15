import styled from "styled-components"
import Link from "next/link"

export const AuctionsContainer = styled.section`
  width: 100%;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export const AuctionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

export const AuctionsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export const ViewAllLink = styled(Link)`
  color: #1f7ed9;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const AuctionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 0 1rem;
  }
`

