"use client"

import type React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "light" | "gradient"
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({ children, className = "", variant = "default", hover = true }) => {
  const variantStyles = {
    default: "bg-white shadow-lg",
    light: "bg-gray-50 shadow-md",
    gradient: "bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg",
  }

  return (
    <div
      className={`rounded-xl p-6 ${variantStyles[variant]} ${hover ? "hover:-translate-y-1 hover:shadow-2xl transition-all duration-300" : ""} ${className}`}
    >
      {children}
    </div>
  )
}
