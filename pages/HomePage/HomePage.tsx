import type React from "react"
import Layout from "@/components/Layout/Layout"
import FeaturedAuction from "@/components/FeaturedAuction/FeaturedAuction"
import LocationsSection from "@/components/LocationsSection/LocationsSection"
import SavedItemsSection from "@/components/SavedItemsSection/SavedItemsSection"
import { MainContent, TwoColumnSection } from "./HomePage.styles"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <MainContent>
        <TwoColumnSection>
          <div className="featured-column">
            <FeaturedAuction />
          </div>
          <div className="locations-column">
            <LocationsSection />
          </div>
        </TwoColumnSection>
        <SavedItemsSection />
      </MainContent>
    </Layout>
  )
}

export default HomePage

