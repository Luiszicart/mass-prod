import type React from "react"
import Header from "@/components/Header/Header"
import CategoryNav from "@/components/CategoryNav/CategoryNav"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import type { LayoutProps } from "./Layout.types"
import { LayoutContainer, LayoutContent, Main } from "./Layout.styles"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Header />
        <CategoryNav />
        <Breadcrumbs />
        <Main>{children}</Main>
      </LayoutContent>
    </LayoutContainer>
  )
}

export default Layout

