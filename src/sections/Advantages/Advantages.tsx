"use client"

import type React from "react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../utils/translations"
import { Card } from "../../components/common/Card/Card"
import { Section } from "../../components/layout/Section/Section"

export const Advantages: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const advantages = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: t.advantages.timeSaving,
      description:
        language === "ar"
          ? "نأتي إلى موقع العميل في الوقت المحدد، مما يوفر ساعات من الانتظار في مراكز الصيانة التقليدية. العميل يستمر في عمله أو نشاطاته اليومية بينما نقدم الخدمة."
          : "We come to the customer location at the specified time, saving hours of waiting at traditional maintenance centers. The customer continues work or daily activities while we provide the service.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: t.advantages.competitive,
      description:
        language === "ar"
          ? "أسعارنا أقل من مراكز الصيانة التقليدية بنسبة 15-20% بسبب انخفاض التكاليف التشغيلية وعدم الحاجة لمقرات ثابت مكلف."
          : "Our prices are 15-20% lower than traditional maintenance centers due to lower operating costs and no need for expensive fixed premises.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
          <circle cx="11" cy="11" r="3" />
        </svg>
      ),
      title: t.advantages.targeting,
      description:
        language === "ar"
          ? "التركيز على المجمعات السكنية الراقية، مواقف الشركات والمؤسسات، والأحياء ذات الكثافة السكانية العالية في الرياض."
          : "Focusing on upscale residential complexes, corporate and institutional parking, and high-density neighborhoods in Riyadh.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: t.advantages.loyalty,
      description:
        language === "ar"
          ? "نقاط مكافآت لكل خدمة، خصومات للعملاء الدائمين، خدمة مجانية كل 5 زيارات، وأولوية في الحجز للأعضاء المميزين."
          : "Reward points for each service, discounts for regular customers, free service every 5 visits, and priority booking for premium members.",
    },
  ]

  const qualityFeatures = [
    language === "ar" ? "فنيون معتمدون وذوو خبرة" : "Certified and experienced technicians",
    language === "ar" ? "استخدام زيوت أصلية معتمدة" : "Use of certified original oils",
    language === "ar" ? "ضمان على الخدمة والقطع" : "Service and parts warranty",
    language === "ar" ? "معدات حديثة ومعايرة بدقة" : "Modern and precisely calibrated equipment",
    language === "ar" ? "نظافة وتنظيم في العمل" : "Cleanliness and organization at work",
  ]

  const innovationFeatures = [
    language === "ar" ? "نظام حجز إلكتروني سهل" : "Easy electronic booking system",
    language === "ar" ? "تذكير آلي بمواعيد الصيانة" : "Automatic maintenance reminders",
    language === "ar" ? "تقارير رقمية مفصلة" : "Detailed digital reports",
    language === "ar" ? "تتبع مباشر للفني" : "Live technician tracking",
    language === "ar" ? "دفع إلكتروني آمن" : "Secure electronic payment",
  ]

  return (
    <Section id="advantages" variant="default">
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.advantages.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {advantages.map((advantage, index) => (
          <Card key={index} variant="light">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              {advantage.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
            <p className="text-gray-700 leading-relaxed">{advantage.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="gradient">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {language === "ar" ? "الجودة والاحترافية" : "Quality and Professionalism"}
          </h3>
          <ul className="space-y-3">
            {qualityFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 animate-in fade-in slide-in-from-left-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-blue-600 text-xl flex-shrink-0">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card variant="gradient">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {language === "ar" ? "التقنية والابتكار" : "Technology and Innovation"}
          </h3>
          <ul className="space-y-3">
            {innovationFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 animate-in fade-in slide-in-from-left-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-blue-600 text-xl flex-shrink-0">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
