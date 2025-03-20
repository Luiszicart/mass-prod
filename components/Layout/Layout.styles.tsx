import styled from "styled-components"

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: center;
  width: 100%;
`

export const LayoutContent = styled.div`
  width: 100%;
  max-width: 1700px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1700px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0;
  }
`

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 1.5rem 1rem;
  
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`

