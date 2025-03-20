import type React from "react"
import type { ButtonHTMLAttributes } from "react"

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost"
export type ButtonSize = "small" | "medium" | "large"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  children: React.ReactNode
}

