import type React from "react"
export interface CategoryItem {
  id: string
  name: string
  icon: React.ReactNode
}

export interface CategoryItemProps {
  active?: boolean
}

