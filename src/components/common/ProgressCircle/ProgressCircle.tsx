"use client"

import type React from "react"

interface ProgressCircleProps {
  percentage: number
  size?: number
  strokeWidth?: number
  label?: string
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({ percentage, size = 200, strokeWidth = 20, label }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          className="text-gray-200"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="none"
        />
        <circle
          className="text-blue-500 transition-all duration-1500 ease-in-out"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            animation: "progressDraw 1.5s ease-in-out forwards",
          }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-3xl md:text-4xl font-bold text-gray-800">{percentage}%</span>
        {label && <span className="text-sm text-gray-600 mt-1">{label}</span>}
      </div>
      <style jsx>{`
        @keyframes progressDraw {
          from {
            stroke-dashoffset: ${circumference};
          }
          to {
            stroke-dashoffset: ${offset};
          }
        }
      `}</style>
    </div>
  )
}
