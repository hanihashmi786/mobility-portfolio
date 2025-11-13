"use client"

import type React from "react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../utils/translations"
import { Card } from "../../components/common/Card/Card"
import { Button } from "../../components/common/Button/Button"
import { Section } from "../../components/layout/Section/Section"
import { RiyalIcon } from "../../components/common/RiyalIcon/RiyalIcon"

export const Investment: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const investmentHighlights = [
    {
      number: "1",
      title: language === "ar" ? "استثمار آمن ومدروس" : "Safe and Studied Investment",
      description:
        language === "ar"
          ? "نموذج عمل واضح بعائد استثمار متوقع"
          : "Clear business model with expected return on investment",
    },
    {
      number: "2",
      title: language === "ar" ? "إمكانية توسع كبيرة" : "Great Expansion Potential",
      description: language === "ar" ? "من الرياض إلى جميع مدن المملكة" : "From Riyadh to all cities of the Kingdom",
    },
    {
      number: "3",
      title: language === "ar" ? "فريق عمل محترف" : "Professional Team",
      description: language === "ar" ? "خبرة في السيارات والإدارة" : "Experience in automotive and management",
    },
  ]

  const expectedReturns = language === "ar" ? (
    <>
      هامش ربح صافي 35-40% شهرياً، إيرادات سنوية متوقعة تتجاوز{" "}
      <span className="inline-flex items-center gap-1">
        600,000 <RiyalIcon size={18} className="text-gray-700" />
      </span>{" "}
      في السنة الثانية، مع إمكانية مضاعفة العائد عند التوسع.
    </>
  ) : (
    "Net profit margin of 35-40% monthly, expected annual revenues exceeding 600,000 SAR in the second year, with the possibility of doubling returns upon expansion."
  )

  const nextSteps =
    language === "ar"
      ? "نرحب بلقاء تفصيلي لمناقشة خطة العمل الكاملة، الدراسة المالية، وعرض الشراكة. تواصلوا معنا لترتيب موعد وبدء رحلة النجاح معاً."
      : "We welcome a detailed meeting to discuss the complete business plan, financial study, and partnership proposal. Contact us to arrange an appointment and start the journey to success together."

  const whatWeLookFor = language === "ar" ? (
    <>
      شريك استثماري أو مستثمر بمبلغ{" "}
      <span className="inline-flex items-center gap-1">
        40,000 - 80,000 <RiyalIcon size={18} className="text-gray-700" />
      </span>{" "}
      للمساهمة في رأس المال والتوسع السريع، مقابل حصة في الأرباح تتراوح بين 25-40% حسب حجم الاستثمار.
    </>
  ) : (
    "Investment partner or investor with an amount of 40,000 - 80,000 SAR to contribute to capital and rapid expansion, in exchange for a profit share ranging between 25-40% depending on investment size."
  )

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Section id="investment" variant="default">
      {/* Using CSS animations instead of framer-motion */}
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.investment.title}</h2>
        <p className="text-lg text-gray-600">{t.investment.opportunity}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {investmentHighlights.map((highlight, index) => (
          <Card key={index} variant="light">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              {highlight.number}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
            <p className="text-gray-700">{highlight.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card variant="gradient">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t.investment.whatWeLookFor}</h3>
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed animate-in fade-in duration-500">
              {whatWeLookFor}
            </p>
          </div>
        </Card>

        <Card variant="gradient">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t.investment.expectedReturns}</h3>
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed animate-in fade-in duration-500">
              {expectedReturns}
            </p>
          </div>
        </Card>

        <Card variant="gradient">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t.investment.nextSteps}</h3>
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed animate-in fade-in duration-500">
              {nextSteps}
            </p>
          </div>
        </Card>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <Button onClick={scrollToContact} size="lg" variant="primary">
          {t.contact.cta}
        </Button>
        <Button onClick={scrollToContact} size="lg" variant="secondary">
          {t.contact.title}
        </Button>
      </div>
    </Section>
  )
}
