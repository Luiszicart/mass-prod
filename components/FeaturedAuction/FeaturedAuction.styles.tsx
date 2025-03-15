import styled from "styled-components"
import type { DotProps } from "./FeaturedAuction.types"

export const FeaturedContainer = styled.section`
  background-color: #f1f2f4;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-radius: 8px;
  }
`

export const FeaturedContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const FeaturedLeft = styled.div`
  flex: 1;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  background-color: #ffffff;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  
  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 0;
  }
`

export const BiddingBadge = styled.div`
  display: inline-block;
  background-color: #00b2ff;
  color: white;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
`

export const DateLocation = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: #394046;

  .separator {
    margin: 0 0.5rem;
    color: #818c97;
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
`

export const FeaturedTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.4;
  color: #0c2055;
  max-width: 90%;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

export const ViewNowButton = styled.button`
  background-color: #1f7ed9;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a6cb8;
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
  }
`

export const PaginationDots = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  
  @media (max-width: 768px) {
    bottom: 16px;
  }
`

export const Dot = styled.div<DotProps>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#00b2ff" : "#d1d5db")};
  transition: background-color 0.2s;
`

export const FeaturedRight = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f2f4;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

