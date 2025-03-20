"use client"

import type React from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { setActiveCategory } from "../../store/slices/uiSlice"
import { Tractor, Camera, Leaf, Beer, Printer, HardHat, ChevronRight, Package } from "lucide-react"
import {
  CategoryNavContainer,
  CategoryList,
  CategoryItem,
  CategoryIcon,
  CategoryText,
  ScrollArrow,
} from "./CategoryNav.styles"

const categories = [
  { id: "agriculture", name: "Agriculture & Farm Equipment", icon: <Tractor size={18} /> },
  { id: "audio", name: "Audio, Visual, & Staging", icon: <Camera size={18} /> },
  { id: "botanical", name: "Botanical Cultivation &...", icon: <Leaf size={18} /> },
  { id: "brewery", name: "Brewery Equipment", icon: <Beer size={18} /> },
  { id: "commercial", name: "Commercial Print Equipment", icon: <Printer size={18} /> },
  { id: "construction", name: "Construction & Equipment", icon: <HardHat size={18} /> },
  { id: "more", name: "More", icon: <Package size={18} /> },
]

const CategoryNav: React.FC = () => {
  const dispatch = useAppDispatch()
  const { activeCategory } = useAppSelector((state) => state.ui)

  const handleCategoryClick = (categoryId: string) => {
    dispatch(setActiveCategory(categoryId === activeCategory ? null : categoryId))
  }

  const scrollRight = () => {
    const categoryList = document.querySelector(".category-list")
    if (categoryList) {
      categoryList.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <CategoryNavContainer>
      <CategoryList className="category-list">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            active={category.id === activeCategory}
            onClick={() => handleCategoryClick(category.id)}
          >
            <CategoryIcon>{category.icon}</CategoryIcon>
            <CategoryText>{category.name}</CategoryText>
          </CategoryItem>
        ))}
      </CategoryList>
      <ScrollArrow onClick={scrollRight}>
        <ChevronRight size={20} />
      </ScrollArrow>
    </CategoryNavContainer>
  )
}

export default CategoryNav

