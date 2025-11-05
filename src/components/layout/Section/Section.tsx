"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "light" | "dark"
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "", variant = "default" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "-100px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const variantStyles = {
    default: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white",
  }

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-20 md:py-28 lg:py-32 scroll-mt-20 transition-opacity duration-700 ${
        isVisible ? "opacity-100 animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
      } ${variantStyles[variant]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">{children}</div>
    </section>
  )
}
