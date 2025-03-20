import styled from "styled-components"

export const LocationsContainer = styled.section`
  height: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    border-radius: 8px;
    padding: 1rem;
  }
`

export const LocationsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export const LocationsDescription = styled.p`
  color: #394046;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  font-size: 0.95rem;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`

export const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

