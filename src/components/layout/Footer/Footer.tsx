"use client"

import type React from "react"
import { useLanguage } from "../../../context/LanguageContext"

export const Footer: React.FC = () => {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
              mobiliti
            </h3>
            <p className="text-gray-400">
              {language === "ar" ? "خدمة تغيير الزيوت المتنقلة" : "Mobile Oil Change Service"}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{language === "ar" ? "روابط سريعة" : "Quick Links"}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {language === "ar" ? "عن المشروع" : "About"}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {language === "ar" ? "الأسعار" : "Pricing"}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {language === "ar" ? "تواصل معنا" : "Contact"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{language === "ar" ? "تواصل معنا" : "Contact Us"}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@mobiliti.sa</li>
              <li>+966 XX XXX XXXX</li>
              <li>{language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">
            {language === "ar"
              ? `© ${currentYear} mobiliti. جميع الحقوق محفوظة`
              : `© ${currentYear} mobiliti. All rights reserved`}
          </p>
        </div>
      </div>
    </footer>
  )
}
