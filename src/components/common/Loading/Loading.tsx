"use client"

import type React from "react"

export const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin">
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-blue-600">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="31.4 31.4"
          />
        </svg>
      </div>
    </div>
  )
}
