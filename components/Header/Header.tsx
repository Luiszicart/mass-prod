"use client"

import type React from "react"
import { useState } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { setSearchQuery } from "../../store/slices/uiSlice"
import { Menu, X } from "lucide-react"
import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"
import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  SearchContainer,
  Navigation,
  NavLink,
  AccountSection,
  NotificationBadge,
  AccountLink,
  ContactLink,
  MobileMenuButton,
  MobileMenu,
  MobileSearchContainer,
} from "./Header.styles"

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const { searchQuery } = useAppSelector((state) => state.ui)
  const { notifications } = useAppSelector((state) => state.user)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSearchChange = (value: string) => {
    dispatch(setSearchQuery(value))
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <MobileMenuButton onClick={toggleMobileMenu} className="desktop-hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
          <Logo />
          <SearchContainer className="mobile-hidden">
            <SearchBar value={searchQuery} onChange={handleSearchChange} placeholder="Search" />
          </SearchContainer>
        </LogoContainer>

        <Navigation className="mobile-hidden">
          <NavLink href="#" active>
            Online Auctions
          </NavLink>
          <NavLink href="#">How to Sell</NavLink>
          <NavLink href="#">How to Bid</NavLink>
          <NavLink href="#">Appraisals</NavLink>
          <AccountSection>
            <NotificationBadge>{notifications}</NotificationBadge>
            <AccountLink href="#">My Account</AccountLink>
          </AccountSection>
          <ContactLink href="#">Contact</ContactLink>
        </Navigation>

        {mobileMenuOpen && (
          <MobileMenu>
            <MobileSearchContainer>
              <SearchBar value={searchQuery} onChange={handleSearchChange} placeholder="Search" />
            </MobileSearchContainer>
            <NavLink href="#" active>
              Online Auctions
            </NavLink>
            <NavLink href="#">How to Sell</NavLink>
            <NavLink href="#">How to Bid</NavLink>
            <NavLink href="#">Appraisals</NavLink>
            <NavLink href="#">My Account</NavLink>
            <NavLink href="#">Contact</NavLink>
          </MobileMenu>
        )}
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header

