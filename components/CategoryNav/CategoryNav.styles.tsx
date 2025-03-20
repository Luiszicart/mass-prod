import styled from "styled-components"
import type { CategoryItemProps } from "./CategoryNav.types"

export const CategoryNavContainer = styled.div`
  background-color: #f8f9fa;
  width: 100%;
  border-radius: 12px;
  position: relative;
  padding: 0.5rem 1rem;
  margin: 0.75rem 1rem 0.5rem;
  width: calc(100% - 2rem);
  
  @media (max-width: 768px) {
    margin: 0.5rem 0.5rem;
    width: calc(100% - 1rem);
    border-radius: 8px;
    padding: 0.5rem;
  }
`

export const CategoryList = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.25rem;
  padding-right: 2.5rem; /* Make space for the scroll arrow */
  -webkit-overflow-scrolling: touch;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    padding-right: 2rem;
  }
`

export const CategoryItem = styled.div<CategoryItemProps>`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  min-width: max-content;
  color: ${(props) => (props.active ? "#1f7ed9" : "#394046")};
  font-weight: ${(props) => (props.active ? "500" : "400")};
  
  &:hover {
    color: #1f7ed9;
  }
  
  @media (max-width: 768px) {
    padding: 0.25rem;
  }
`

export const CategoryIcon = styled.span`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5c6670;
  
  @media (max-width: 768px) {
    margin-right: 0.25rem;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`

export const CategoryText = styled.span`
  font-size: 0.875rem;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`

export const ScrollArrow = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  color: #5c6670;
  cursor: pointer;
  padding-left: 0.5rem;
  
  &:hover {
    color: #1f7ed9;
  }
  
  @media (max-width: 768px) {
    right: 0.5rem;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`

