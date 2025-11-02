"use client"
import { LanguageProvider } from "../src/context/LanguageContext"
import { Header } from "../src/components/layout/Header/Header"
import { Footer } from "../src/components/layout/Footer/Footer"
import { ScrollToTop } from "../src/components/common/ScrollToTop/ScrollToTop"
import { Hero } from "../src/sections/Hero/Hero"
import { About } from "../src/sections/About/About"
import { Costs } from "../src/sections/Costs/Costs"
import { Pricing } from "../src/sections/Pricing/Pricing"
import { Advantages } from "../src/sections/Advantages/Advantages"
import { Marketing } from "../src/sections/Marketing/Marketing"
import { Investment } from "../src/sections/Investment/Investment"
import { Contact } from "../src/sections/Contact/Contact"

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden bg-white">
        <Header />
        <main className="scroll-mt-20">
          <Hero />
          <About />
          <Costs />
          <Pricing />
          <Advantages />
          <Marketing />
          <Investment />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  )
}
