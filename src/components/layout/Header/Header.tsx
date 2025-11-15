"use client"

import type React from "react"
import { useLanguage } from "../../../context/LanguageContext"
import { translations } from "../../../utils/translations"

const USFlag = () => (
  <svg className="w-5 h-4" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white" />
    <rect width="28" height="1.54" fill="#B22234" />
    <rect y="3.08" width="28" height="1.54" fill="#B22234" />
    <rect y="6.15" width="28" height="1.54" fill="#B22234" />
    <rect y="9.23" width="28" height="1.54" fill="#B22234" />
    <rect y="12.31" width="28" height="1.54" fill="#B22234" />
    <rect y="15.38" width="28" height="1.54" fill="#B22234" />
    <rect y="18.46" width="28" height="1.54" fill="#B22234" />
    <rect width="11.2" height="10.77" fill="#3C3B6E" />
  </svg>
)

const SaudiFlag = () => (
  <svg className="w-5 h-4" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="#165B33" />
    <path d="M8 10h12M14 7v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <text x="14" y="13" fontSize="6" fill="white" textAnchor="middle" fontFamily="Arial">
      لا إله إلا الله
    </text>
  </svg>
)

export const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  const navItems = [
    { id: "hero", label: language === "ar" ? "الرئيسية" : "Home" },
    { id: "about", label: language === "ar" ? "عن المشروع" : "About" },
    { id: "costs", label: language === "ar" ? "التكلفة" : "Costs" },
    { id: "pricing", label: language === "ar" ? "الأسعار" : "Pricing" },
    { id: "advantages", label: language === "ar" ? "المزايا" : "Advantages" },
    { id: "investment", label: language === "ar" ? "الاستثمار" : "Investment" },
    { id: "contact", label: language === "ar" ? "تواصل" : "Contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md animate-in slide-in-from-top duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent whitespace-nowrap">
          mobiliti
        </div>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium whitespace-nowrap text-sm lg:text-base"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm lg:text-base whitespace-nowrap flex-shrink-0"
          aria-label="Toggle language"
        >
          <span className="flex items-center gap-2">
            {language === "ar" ? (
              <>
                <USFlag />
                <span className="text-xs opacity-70">|</span>
                <span>EN</span>
              </>
            ) : (
              <>
                <SaudiFlag />
                <span className="text-xs opacity-70">|</span>
                <span>AR</span>
              </>
            )}
          </span>
        </button>
      </div>
    </header>
  )
}
