"use client"

import type React from "react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../utils/translations"
import { Card } from "../../components/common/Card/Card"
import { Section } from "../../components/layout/Section/Section"
import { RiyalIcon } from "../../components/common/RiyalIcon/RiyalIcon"

export const Costs: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const costCategories = [
    {
      title: t.costs.categories.equipment,
      items: [
        { label: language === "ar" ? "سوزوكي إيكو" : "Suzuki Eeco", amount: "47,150" },
        { label: language === "ar" ? "معدات تغيير الزيت" : "Oil Change Equipment", amount: "8,000" },
        { label: language === "ar" ? "خزانات تخزين" : "Storage Tanks", amount: "3,000" },
        { label: language === "ar" ? "مواد كهربائي" : "Electrical Materials", amount: "2,500" },
      ],
      total: "60,650",
    },
    {
      title: t.costs.categories.design,
      items: [
        { label: language === "ar" ? "تصميم داخلي وظيفي" : "Interior Design", amount: "4,000" },
        { label: language === "ar" ? "تصميم خارجي وهوية بصرية" : "Exterior & Branding", amount: "2,000" },
        { label: language === "ar" ? "رفوف وخزائن تنظيمية" : "Organizational Shelves", amount: "1,500" },
      ],
      total: "7,500",
    },
    {
      title: t.costs.categories.inventory,
      items: [
        { label: language === "ar" ? "مخزون زيوت وفلاتر" : "Oil & Filters Stock", amount: "3,500" },
        { label: language === "ar" ? "ترخيص وتأمين" : "License & Insurance", amount: "3,000" },
        { label: language === "ar" ? "أدوات وقطع غيار" : "Tools & Spare Parts", amount: "1,500" },
      ],
      total: "8,000",
    },
  ]

  return (
    <Section id="costs" variant="default">
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.costs.title}</h2>
        <p className="text-lg text-gray-600">{t.costs.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {costCategories.map((category, index) => (
          <Card key={index} variant="light">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
            <ul className="space-y-4 mb-6">
              {category.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex justify-between items-center text-gray-700 animate-in fade-in slide-in-from-left-4 duration-500"
                  style={{ animationDelay: `${itemIndex * 100}ms` }}
                >
                  <span>{item.label}</span>
                  <span className="font-semibold flex items-center gap-1">
                    {item.amount} {language === "ar" ? <RiyalIcon size={18} className="text-gray-700" /> : "SAR"}
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t-2 border-blue-200 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">{language === "ar" ? "المجموع" : "Total"}:</span>
              <span className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                {category.total} {language === "ar" ? <RiyalIcon size={24} className="text-blue-600" /> : "SAR"}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="gradient">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.costs.totalInvestment}</h3>
          <p className="text-5xl font-bold text-blue-600 mb-4">76K</p>
          <p className="text-gray-700">
            {language === "ar"
              ? "ريال سعودي تقريباً لإطلاق المشروع بشكل كامل"
              : "SAR approximately to launch the project fully"}
          </p>
        </Card>

        <Card variant="gradient">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.costs.roi}</h3>
          <p className="text-5xl font-bold text-blue-600 mb-4">18-24</p>
          <p className="text-gray-700">{t.costs.roiPeriod}</p>
        </Card>
      </div>
    </Section>
  )
}
