
import { cn } from "@/lib/utils"
import React, { useRef, useState, useEffect } from "react"

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: string
}

export function Spotlight({
  className,
  fill = "white",
  ...props
}: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    
    const div = divRef.current
    const rect = div.getBoundingClientRect()
    
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  useEffect(() => {
    setOpacity(0.15)
  }, [])

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-lg",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill} 0%, transparent 40%)`,
        }}
      />
      {props.children}
    </div>
  )
}
