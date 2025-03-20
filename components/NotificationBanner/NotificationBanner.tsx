import type React from "react"
import { ChevronRight } from "lucide-react"
import { BannerContainer, AlertBadge, BannerText } from "./NotificationBanner.styles"

const NotificationBanner: React.FC = () => {
  return (
    <BannerContainer>
      <AlertBadge>CLOSING SOON!</AlertBadge>
      <BannerText>Lorem ipsum dolor sit amet, cons...</BannerText>
      <ChevronRight size={18} className="text-amber-700 ml-1" />
    </BannerContainer>
  )
}

export default NotificationBanner

