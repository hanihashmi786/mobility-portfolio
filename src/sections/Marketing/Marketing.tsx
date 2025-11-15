"use client"

import type React from "react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../utils/translations"
import { Card } from "../../components/common/Card/Card"
import { Section } from "../../components/layout/Section/Section"

export const Marketing: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const phases = [
    {
      number: "1",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: t.marketing.phase1,
      description:
        language === "ar"
          ? "إطلاق تطبيق حجز احترافي مع صفحة ويب تفاعلي، موقع ويب تفاعلي، وحسابات نشطة على منصات التواصل الاجتماعي."
          : "Launch of a professional booking app with an interactive web page, interactive website, and active accounts on social media platforms.",
      channels: [
        language === "ar" ? "إعلانات جوجل المستهدفة" : "Targeted Google Ads",
        language === "ar" ? "حملات سناب شات وانستجرام" : "Snapchat and Instagram campaigns",
        language === "ar" ? "تسويق عبر المؤثرين" : "Influencer marketing",
      ],
    },
    {
      number: "2",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3h18v18H3V3z" />
          <path d="M9 9h6v6H9V9z" />
          <path d="M21 15v6" />
          <path d="M21 3v6" />
          <path d="M15 21h6" />
          <path d="M3 21h6" />
        </svg>
      ),
      title: t.marketing.phase2,
      description:
        language === "ar"
          ? 'عروض "البداية الأولى بخصم 50%"، حملات رقمية مستهدفة في الرياض، شراكات مع مجمعات سكنية وشركات.'
          : '"First Start with 50% Discount" offers, targeted digital campaigns in Riyadh, partnerships with residential complexes and companies.',
      channels: [
        language === "ar" ? "خصم 50% على الخدمة الأولى" : "50% discount on first service",
        language === "ar" ? "إحالة صديق واحصل على خصم" : "Refer a friend and get a discount",
        language === "ar" ? "باقات عائلية مخفضة" : "Discounted family packages",
        language === "ar" ? "عروض موسمية خاصة" : "Special seasonal offers",
      ],
    },
    {
      number: "3",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: t.marketing.phase3,
      description:
        language === "ar"
          ? "إضافة فانات جديدة، التوسع في مدن أخرى، وإطلاق خدمات صيانة إضافية مثل غسيل والتلميع."
          : "Adding new vans, expanding to other cities, and launching additional maintenance services such as washing and polishing.",
      channels: [
        language === "ar" ? "شراكات مع وكالات السيارات ومؤسسات" : "Partnerships with car agencies and institutions",
        language === "ar" ? "عقود توصيل وإسطبل" : "Delivery and fleet contracts",
        language === "ar" ? "وكالات تأجير السيارات" : "Car rental agencies",
      ],
    },
  ]

  const marketingChannels = [
    language === "ar" ? "إعلانات جوجل المستهدفة" : "Targeted Google Ads",
    language === "ar" ? "حملات سناب شات وانستجرام" : "Snapchat and Instagram campaigns",
    language === "ar" ? "تسويق عبر المؤثرين" : "Influencer marketing",
    language === "ar" ? "شراكات مع مقاسل السيارات" : "Partnerships with car dealers",
  ]

  const strategicPartnerships = [
    language === "ar" ? "مجمعات سكنية وأبراج" : "Residential complexes and towers",
    language === "ar" ? "شركات ومؤسسات" : "Companies and institutions",
    language === "ar" ? "وكالات تأجير السيارات" : "Car rental agencies",
    language === "ar" ? "شركات توصيل وإسطبل" : "Delivery and fleet companies",
  ]

  return (
    <Section id="marketing" variant="light">
      {/* Using CSS animations instead of framer-motion */}
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.marketing.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {phases.map((phase, index) => (
          <Card key={index} variant="light">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {phase.number}
              </div>
              <div className="text-blue-600">{phase.icon}</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{phase.title}</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">{phase.description}</p>
            <ul className="space-y-2">
              {phase.channels.map((channel, channelIndex) => (
                <li
                  key={channelIndex}
                  className="flex items-start gap-2 text-gray-700 animate-in fade-in slide-in-from-left-4 duration-500"
                  style={{ animationDelay: `${channelIndex * 100}ms` }}
                >
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span>{channel}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="gradient">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {language === "ar" ? "القنوات التسويقية" : "Marketing Channels"}
          </h3>
          <ul className="space-y-3">
            {marketingChannels.map((channel, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 animate-in fade-in slide-in-from-left-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-blue-600 flex-shrink-0">•</span>
                <span>{channel}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card variant="gradient">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {language === "ar" ? "الشراكات الاستراتيجية" : "Strategic Partnerships"}
          </h3>
          <ul className="space-y-3">
            {strategicPartnerships.map((partnership, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 animate-in fade-in slide-in-from-left-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-blue-600 flex-shrink-0">•</span>
                <span>{partnership}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
        <img
            src="/images/marketing.jpg"
            alt={language === "ar" ? "اجتماع استثماري" : "Investment meeting"}
            className="w-full h-auto object-cover"
          />
        </Card>
      </div>
    </Section>
  )
}
