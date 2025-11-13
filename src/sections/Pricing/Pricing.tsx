"use client"

import type React from "react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../utils/translations"
import { Card } from "../../components/common/Card/Card"
import { ProgressCircle } from "../../components/common/ProgressCircle/ProgressCircle"
import { Section } from "../../components/layout/Section/Section"
import { RiyalIcon } from "../../components/common/RiyalIcon/RiyalIcon"

export const Pricing: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const packages = [
    {
      number: "1",
      title: t.pricing.basic,
      price: "99 - 149",
      percentage: 60,
      avgServices: language === "ar" ? "متوسط 180 خدمة شهرياً" : "Average 180 services monthly",
      features: [
        language === "ar" ? "تغيير زيت معدني عالي الجودة" : "High quality mineral oil change",
        language === "ar" ? "فلتر زيت أصلي" : "Original oil filter",
        language === "ar" ? "فحص مستوى السوائل" : "Fluids level check",
        language === "ar" ? "فحص ضغط الإطارات" : "Tire pressure check",
      ],
    },
    {
      number: "2",
      title: t.pricing.advanced,
      price: "199 - 249",
      percentage: 30,
      avgServices: language === "ar" ? "متوسط 90 خدمة شهرياً" : "Average 90 services monthly",
      features: [
        language === "ar" ? "زيت تخليقي كامل بريميوم" : "Premium full synthetic oil",
        language === "ar" ? "فلتر هواء + فلتر زيت" : "Air filter + Oil filter",
        language === "ar" ? "فحص فني شامل 25 نقطة" : "Comprehensive 25-point inspection",
        language === "ar" ? "تنظيف خارجي مجاني" : "Free exterior cleaning",
      ],
    },
    {
      number: "3",
      title: t.pricing.comprehensive,
      price: "249 - 299",
      percentage: 10,
      avgServices: language === "ar" ? "متوسط 30 خدمة شهرياً" : "Average 30 services monthly",
      features: [
        language === "ar" ? "زيت تخليقي كامل بريميوم" : "Premium full synthetic oil",
        language === "ar" ? "فلتر هواء + فلتر زيت" : "Air filter + Oil filter",
        language === "ar" ? "فحص فني شامل 25 نقطة" : "Comprehensive 25-point inspection",
        language === "ar" ? "تنظيف خارجي مجاني" : "Free exterior cleaning",
        language === "ar" ? "تقرير صيانة رقمي" : "Digital maintenance report",
      ],
    },
  ]

  const revenueData = [
    {
      label: t.pricing.basic,
      percentage: 60,
      avgServices: language === "ar" ? "متوسط 180 خدمة شهرياً" : "Average 180 services monthly",
    },
    {
      label: t.pricing.advanced,
      percentage: 30,
      avgServices: language === "ar" ? "متوسط 90 خدمة شهرياً" : "Average 90 services monthly",
    },
    {
      label: t.pricing.comprehensive,
      percentage: 10,
      avgServices: language === "ar" ? "متوسط 30 خدمة شهرياً" : "Average 30 services monthly",
    },
  ]

  return (
    <Section id="pricing" variant="light">
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.pricing.title}</h2>
      </div>

      {/* Revenue Forecast Section */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          {language === "ar" ? "توقعات الإيرادات الشهرية" : "Monthly Revenue Forecast"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {revenueData.map((item, index) => (
            <Card key={index} variant="light" className="text-center">
              <div className="flex justify-center mb-4">
                <ProgressCircle percentage={item.percentage} size={180} strokeWidth={15} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h4>
              <p className="text-gray-600">{item.avgServices}</p>
            </Card>
          ))}
        </div>

        <Card variant="gradient" className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              {language === "ar" ? "الإيرادات المتوقعة:" : "Expected Revenue:"}
            </h4>
            <p className="text-gray-700 leading-relaxed flex items-center flex-wrap gap-1">
              {language === "ar" ? (
                <>
                  <span>45,000 - 55,000</span>
                  <RiyalIcon size={20} className="text-gray-700" />
                  <span>شهرياً بمعدل 10 خدمات يومياً، مع هامش ربح صافي 35-40% بعد خصم التكاليف التشغيلية.</span>
                </>
              ) : (
                "45,000 - 55,000 SAR monthly with an average of 10 daily services, with a net profit margin of 35-40% after deducting operational costs."
              )}
            </p>
          </div>
        </Card>
      </div>

      {/* Service Packages Section */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">{t.pricing.packages}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} variant="light">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {pkg.number}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{pkg.title}</h4>
              <div className="mb-6 flex items-center gap-2">
                <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                {language === "ar" ? (
                  <RiyalIcon size={28} className="text-gray-600" />
                ) : (
                  <span className="text-lg text-gray-600">SAR</span>
                )}
              </div>
              <ul className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-gray-700 animate-in fade-in slide-in-from-left-4 duration-500"
                    style={{ animationDelay: `${featureIndex * 100}ms` }}
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-blue-500 mt-0.5"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.2" />
                      <path
                        d="M6 10l3 3 5-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
