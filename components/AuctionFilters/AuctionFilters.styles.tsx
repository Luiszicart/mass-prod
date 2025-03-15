import styled from "styled-components"

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
`

export const SearchContainer = styled.div`
  flex: 1;
  min-width: 200px;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #5c6670;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 2.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #1f7ed9;
  }
  
  @media (max-width: 768px) {
    padding: 0.375rem 0.5rem 0.375rem 2rem;
  }
`

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    padding: 0.375rem 0.5rem;
  }
`

export const FilterButtonText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`

export const FilterIcon = styled.div`
  display: flex;
  align-items: center;
  color: #5c6670;
`

export const FilterOptions = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 250px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const FilterOptionsList = styled.div`
  padding: 0.75rem;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const FilterOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

export const FilterCheckbox = styled.input`
  margin-right: 0.5rem;
`

export const FilterLabel = styled.label`
  font-size: 0.875rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`

export const ApplyButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #1f7ed9;
  color: white;
  border: none;
  border-top: 1px solid #d1d5db;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #1a6cb8;
  }
  
  @media (max-width: 768px) {
    padding: 0.375rem;
    font-size: 0.875rem;
  }
`

