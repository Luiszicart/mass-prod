import styled from "styled-components"
import Link from "next/link"

export const BreadcrumbsContainer = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
    flex-wrap: wrap;
  }
`

export const BreadcrumbsList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    max-width: 100%;
    overflow: hidden;
  }
`

export const BackIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f7ed9;
  margin-right: 0.5rem;
`

export const BreadcrumbItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    
    &:not(:first-child):not(:last-child) {
      display: none;
    }
  }
`

export const BreadcrumbLink = styled(Link)`
  color: #1f7ed9;
  text-decoration: none;
  white-space: nowrap;
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const BreadcrumbSeparator = styled.span`
  margin: 0 0.5rem;
  color: #5c6670;
  
  @media (max-width: 768px) {
    margin: 0 0.25rem;
  }
`

export const BreadcrumbCurrent = styled.span`
  color: #5c6670;
  
  @media (max-width: 768px) {
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

