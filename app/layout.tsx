import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "mobiliti - خدمة تغيير الزيوت المتنقلة",
  description: "فان سوزوكي إيكو - حل مبتكر يوفر الوقت والراحة للعملاء",
  keywords: ["تغيير زيوت", "خدمة متنقلة", "سيارات", "الرياض", "السعودية"],
  authors: [{ name: "mobiliti" }],
  openGraph: {
    type: "website",
    title: "mobiliti - خدمة تغيير الزيوت المتنقلة",
    description: "حل مبتكر يوفر الوقت والراحة للعملاء",
  },
  twitter: {
    card: "summary_large_image",
    title: "mobiliti - خدمة تغيير الزيوت المتنقلة",
    description: "حل مبتكر يوفر الوقت والراحة للعملاء",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
