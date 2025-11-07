"use client"

import type React from "react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../utils/translations"
import { Button } from "../../components/common/Button/Button"

export const Hero: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-24 md:pt-28 pb-16 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">{t.hero.title}</h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{t.hero.subtitle}</p>
            <Button onClick={scrollToContact} size="lg">
              {language === "ar" ? "ابدأ الآن" : "Get Started"}
            </Button>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-gGIPk7AWraqlLeIphKNFRoex5CtvXn.jpg"
              alt="Mobile Oil Change Van"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-16 md:h-24 lg:h-32">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  )
}
