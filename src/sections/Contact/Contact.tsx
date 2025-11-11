"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../utils/translations"
import { Card } from "../../components/common/Card/Card"
import { Button } from "../../components/common/Button/Button"
import { Section } from "../../components/layout/Section/Section"

export const Contact: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert(language === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: language === "ar" ? "البريد الإلكتروني" : "Email",
      value: "info@mobiliti.sa",
      href: "mailto:info@mobiliti.sa",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: language === "ar" ? "الهاتف" : "Phone",
      value: "+966 XX XXX XXXX",
      href: "tel:+966XXXXXXXXX",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: language === "ar" ? "الموقع" : "Location",
      value: language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
    },
  ]

  return (
    <Section id="contact" variant="light">
      {/* Using CSS animations instead of framer-motion */}
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
        <p className="text-lg text-gray-600">
          {language === "ar"
            ? "نحن هنا للإجابة على استفساراتكم ومناقشة فرص الشراكة والاستثمار"
            : "We are here to answer your questions and discuss partnership and investment opportunities"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card variant="light">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {language === "ar" ? "أرسل لنا رسالة" : "Send Us a Message"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                {language === "ar" ? "الاسم الكامل" : "Full Name"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                {language === "ar" ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder={language === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                {language === "ar" ? "رقم الهاتف" : "Phone Number"}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder={language === "ar" ? "أدخل رقم هاتفك" : "Enter your phone number"}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                {language === "ar" ? "الرسالة" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder={language === "ar" ? "اكتب رسالتك هنا" : "Write your message here"}
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              {language === "ar" ? "إرسال الرسالة" : "Send Message"}
            </Button>
          </form>
        </Card>

        <div className="space-y-6">
          <Card variant="gradient">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === "ar" ? "معلومات التواصل" : "Contact Information"}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 animate-in fade-in slide-in-from-left-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-blue-600 hover:text-blue-700 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-700">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="gradient">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {language === "ar" ? "هل أنت مستثمر؟" : "Are You an Investor?"}
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {language === "ar"
                ? "احصل على دراسة الجدوى الكاملة والخطة المالية التفصيلية"
                : "Get the complete feasibility study and detailed financial plan"}
            </p>
            <Button size="lg" variant="secondary" className="w-full">
              {t.contact.cta}
            </Button>
          </Card>
        </div>
      </div>
    </Section>
  )
}
