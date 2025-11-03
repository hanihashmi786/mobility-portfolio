export type Language = "ar" | "en"

export interface Translation {
  hero: {
    title: string
    subtitle: string
  }
  about: {
    title: string
    whyNow: string
    serviceOffered: string
    whyNowPoints: string[]
    servicePoints: string[]
  }
  costs: {
    title: string
    subtitle: string
    categories: {
      equipment: string
      design: string
      inventory: string
    }
    totalInvestment: string
    roi: string
    roiPeriod: string
  }
  pricing: {
    title: string
    basic: string
    advanced: string
    comprehensive: string
    packages: string
  }
  advantages: {
    title: string
    timeSaving: string
    competitive: string
    targeting: string
    loyalty: string
  }
  marketing: {
    title: string
    phase1: string
    phase2: string
    phase3: string
  }
  investment: {
    title: string
    opportunity: string
    expectedReturns: string
    nextSteps: string
    whatWeLookFor: string
  }
  contact: {
    title: string
    cta: string
  }
}
