import type React from "react"
import { ChevronLeft } from "lucide-react"
import type { BreadcrumbItem as BreadcrumbItemType } from "./Breadcrumbs.types"
import {
  BreadcrumbsContainer,
  BreadcrumbsList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbCurrent,
  BackIcon,
} from "./Breadcrumbs.styles"
import NotificationBanner from "../NotificationBanner/NotificationBanner"

const breadcrumbs: BreadcrumbItemType[] = [
  { name: "Primary Source Page", url: "#" },
  { name: "Secondary Source Page", url: "#" },
  { name: "Tertiary Source Page", url: "#" },
  { name: "Current Page", url: null },
]

const Breadcrumbs: React.FC = () => {
  return (
    <BreadcrumbsContainer>
      <BreadcrumbsList>
        <BackIcon>
          <ChevronLeft size={18} />
        </BackIcon>
        {breadcrumbs.map((crumb, index) => (
          <BreadcrumbItem key={index}>
            {crumb.url ? (
              <>
                <BreadcrumbLink href={crumb.url}>{crumb.name}</BreadcrumbLink>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator>›</BreadcrumbSeparator>}
              </>
            ) : (
              <BreadcrumbCurrent>{crumb.name}</BreadcrumbCurrent>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbsList>
      <NotificationBanner />
    </BreadcrumbsContainer>
  )
}

export default Breadcrumbs

