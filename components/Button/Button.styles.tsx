import styled, { css } from "styled-components"
import type { ButtonVariant, ButtonSize } from "./Button.types"

interface StyledButtonProps {
  variant: ButtonVariant
  size: ButtonSize
  fullWidth: boolean
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: #1f7ed9;
        color: white;
        
        &:hover {
          background-color: #1a6cb8;
        }
      `
    case "secondary":
      return css`
        background-color: #ff8324;
        color: white;
        
        &:hover {
          background-color: #e67420;
        }
      `
    case "outline":
      return css`
        background-color: transparent;
        color: #1f7ed9;
        border: 1px solid #1f7ed9;
        
        &:hover {
          background-color: rgba(31, 126, 217, 0.1);
        }
      `
    case "ghost":
      return css`
        background-color: transparent;
        color: #1f7ed9;
        
        &:hover {
          background-color: rgba(31, 126, 217, 0.1);
        }
      `
    default:
      return css`
        background-color: #1f7ed9;
        color: white;
        
        &:hover {
          background-color: #1a6cb8;
        }
      `
  }
}

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "small":
      return css`
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
      `
    case "medium":
      return css`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `
    case "large":
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `
    default:
      return css`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `
  }
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  outline: none;
  
  ${(props) => getVariantStyles(props.variant)}
  ${(props) => getSizeStyles(props.size)}
  ${(props) => props.fullWidth && css`width: 100%;`}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

