import type React from "react"
import Link from "next/link"
import { LogoContainer, LogoImage } from "./Logo.styles"

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <Link href="/">
        <LogoImage src="/images/logo.svg" alt="West Auctions" />
      </Link>
    </LogoContainer>
  )
}

export default Logo

