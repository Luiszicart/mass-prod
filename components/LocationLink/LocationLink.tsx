import type React from "react"
import { MapPin } from "lucide-react"
import type { LocationLinkProps } from "./LocationLink.types"
import { LocationLinkContainer, LocationText } from "./LocationLink.styles"

const LocationLink: React.FC<LocationLinkProps> = ({ city, state, url }) => {
  return (
    <LocationLinkContainer href={url}>
      <MapPin size={18} color="#1f7ed9" />
      <LocationText>
        {city}, {state}
      </LocationText>
    </LocationLinkContainer>
  )
}

export default LocationLink

