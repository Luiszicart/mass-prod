import styled from "styled-components"

export const Main = styled.main`
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`

export const MainContent = styled.div`
  width: 100%;
`

export const TwoColumnSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    
    .featured-column {
      flex: 7; /* Adjusted to take 70% of the space */
      display: flex;
      flex-direction: column;
    }
    
    .locations-column {
      flex: 3; /* Adjusted to take 30% of the space */
      display: flex;
      flex-direction: column;
    }
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 1rem;
  }
`

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 0.875rem;
    color: #1f7ed9;
    display: flex;
    align-items: center;
    text-decoration: none;
    
    svg {
      margin-left: 0.25rem;
    }
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
    
    a {
      font-size: 0.75rem;
    }
  }
`

