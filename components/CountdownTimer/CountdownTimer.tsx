import type React from "react"
import type { TimeRemaining } from "@/types/auction"
import { CountdownContainer, CountdownUnit, CountdownLabel, CountdownSeparator } from "./CountdownTimer.styles"

interface CountdownTimerProps {
  timeRemaining: TimeRemaining
  showSeconds?: boolean
  className?: string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeRemaining, showSeconds = false, className }) => {
  return (
    <CountdownContainer className={className}>
      <CountdownUnit>{timeRemaining.formatted.days}</CountdownUnit>
      <CountdownLabel>DAYS</CountdownLabel>
      <CountdownSeparator>:</CountdownSeparator>

      <CountdownUnit>{timeRemaining.formatted.hours}</CountdownUnit>
      <CountdownLabel>HRS</CountdownLabel>
      <CountdownSeparator>:</CountdownSeparator>

      <CountdownUnit>{timeRemaining.formatted.minutes}</CountdownUnit>
      <CountdownLabel>MINS</CountdownLabel>

      {showSeconds && (
        <>
          <CountdownSeparator>:</CountdownSeparator>
          <CountdownUnit>{timeRemaining.formatted.seconds}</CountdownUnit>
          <CountdownLabel>SECS</CountdownLabel>
        </>
      )}
    </CountdownContainer>
  )
}

export default CountdownTimer

