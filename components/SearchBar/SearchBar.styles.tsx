import styled from "styled-components"

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 9999px;
  border: 1px solid #abb2ba;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border-color: #1f7ed9;
  }
  
  @media (max-width: 768px) {
    padding: 0.375rem 1rem 0.375rem 2.25rem;
    font-size: 0.75rem;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #5c6670;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    left: 0.5rem;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`

