import type React from "react"
import type { ButtonProps } from "./Button.types"
import { StyledButton } from "./Button.styles"

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <StyledButton variant={variant} size={size} fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button

