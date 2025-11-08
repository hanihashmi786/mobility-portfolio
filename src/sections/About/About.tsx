"use client"

import type React from "react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../utils/translations"
import { Card } from "../../components/common/Card/Card"
import { Section } from "../../components/layout/Section/Section"

export const About: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Section id="about" variant="light">
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card variant="light">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-yXqd4wsrAin1ZlmH5ZVeIcxmlzZ7mr.jpg"
              alt="Project Idea"
              className="w-full h-full object-cover"
            />
          </div>
        </Card>

        <div className="space-y-6">
          <Card variant="gradient">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.about.whyNow}</h3>
            <ul className="space-y-3">
              {t.about.whyNowPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 animate-in fade-in slide-in-from-left-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-blue-600 text-xl flex-shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="gradient">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.about.serviceOffered}</h3>
            <div className="space-y-3">
              {t.about.servicePoints.map((point, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed animate-in fade-in duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {point}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}
