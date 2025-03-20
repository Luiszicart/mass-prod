import styled from "styled-components"
import Link from "next/link"

export const SavedItemsContainer = styled.div`
  background-color: #ebedf0;
  border-radius: 12px;
  padding: 24px 40px;
  margin-bottom: 32px;
  width: 100%;
  
  @media (max-width: 768px) {
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
  }
`

export const SavedItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

export const SavedItemsTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const ViewMoreLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #1f7ed9;
  font-weight: 500;
  text-decoration: none;

  svg {
    margin-left: 4px;
  }

  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const SavedItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1532px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  /* Ensure all cards have the same height */
  & > * {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`

