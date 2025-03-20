import type React from "react"
import LocationLink from "../LocationLink/LocationLink"
import type { LocationItem } from "./LocationsSection.types"
import { LocationsContainer, LocationsTitle, LocationsDescription, LocationsGrid } from "./LocationsSection.styles"

const locations: LocationItem[] = [
  { city: "San Francisco", state: "CA", url: "#" },
  { city: "San Jose", state: "CA", url: "#" },
  { city: "Portland", state: "OR", url: "#" },
  { city: "Sacramento", state: "CA", url: "#" },
  { city: "Seattle", state: "WA", url: "#" },
  { city: "Reno", state: "NV", url: "#" },
  { city: "San Diego", state: "CA", url: "#" },
  { city: "Los Angeles", state: "CA", url: "#" },
]

const LocationsSection: React.FC = () => {
  return (
    <LocationsContainer>
      <LocationsTitle>Auctions Near Me</LocationsTitle>
      <LocationsDescription>
        West Auctions connects buyers and sellers across the West Coast, offering unbeatable deals on everything from
        heavy equipment to estate treasures. Explore local auctions in your area and find hidden gems close to home.
      </LocationsDescription>
      <LocationsGrid>
        {locations.map((location, index) => (
          <LocationLink key={index} city={location.city} state={location.state} url={location.url} />
        ))}
      </LocationsGrid>
    </LocationsContainer>
  )
}

export default LocationsSection

