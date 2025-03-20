import styled from "styled-components"
import Link from "next/link"
import type { NavLinkProps } from "./Header.types"

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  z-index: 50;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  margin-right: 0.5rem;
  color: #394046;
`

export const SearchContainer = styled.div`
  margin-left: 2rem;
  width: 300px;
  
  @media (max-width: 1024px) {
    width: 200px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
  }
`

export const MobileSearchContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
`

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  background-color: white;
  border-top: 1px solid #f1f2f4;
  
  & > a {
    padding: 0.75rem 0;
    border-bottom: 1px solid #f1f2f4;
  }
`

export const NavLink = styled(Link)<NavLinkProps>`
  font-weight: 500;
  color: ${(props) => (props.active ? "#000000" : "#1f7ed9")};
  text-decoration: none;
  white-space: nowrap;
  
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`

export const AccountSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  
  @media (max-width: 1024px) {
    margin-left: 0.5rem;
  }
`

export const NotificationBadge = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #abb2ba;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  
  @media (max-width: 1024px) {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 0.75rem;
  }
`

export const AccountLink = styled(Link)`
  margin-left: 0.5rem;
  color: #1f7ed9;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  
  @media (max-width: 1024px) {
    font-size: 0.75rem;
  }
`

export const ContactLink = styled(Link)`
  color: #1f7ed9;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  
  @media (max-width: 1024px) {
    font-size: 0.75rem;
  }
`

