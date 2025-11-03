import type { Translation } from "../types"

export const translations: Record<"ar" | "en", Translation> = {
  ar: {
    hero: {
      title: "مشروع خدمة تغيير الزيوت المتنقلة",
      subtitle: "فان سوزوكي إيكو - حل مبتكر يوفر الوقت والراحة للعملاء",
    },
    about: {
      title: "فكرة المشروع والفرصة الاستثمارية",
      whyNow: "لماذا الآن؟",
      serviceOffered: "الخدمة المقدمة",
      whyNowPoints: [
        "تزايد الطلب على الخدمات المتنقلة في المملكة",
        "نمو قطاع السيارات وارتفاع معدلات التملك",
        "تغير نمط حياة المستهلك السعودي نحو الراحة والسرعة",
        "قلة المنافسين في هذا المجال المتخصص",
        "دعم رؤية 2030 للمشاريع الصغيرة والمتوسطة",
      ],
      servicePoints: [
        "نقدم خدمة مميزة لتغيير زيوت السيارات بنوعيها المعدني والتخليقي في موقع العميل، سواء في",
        "منزله أو مكان عمله أو موقف سيارته. باستخدام فان سوزوكي إيكو مجهز بالكامل بأحدث المعدات",
        "والأدوات، نوفر تجربة خدمة احترافية تضاهي مراكز الصيانة التقليدية.",
        "هذا المشروع يستهدف شريحة واسعة من العملاء في السوق السعودي الذين يبحثون عن الراحة",
        "وتوفير الوقت دون التضحية بجودة الخدمة.",
      ],
    },
    costs: {
      title: "التكلفة التقديرية للمشروع",
      subtitle: "استثمار أولي متوسط مع عائد استثمار متوقع خلال 18-24 شهراً",
      categories: {
        equipment: "الفان والمعدات الأساسية",
        design: "التجهيزات والتصميم",
        inventory: "المخزون والتشغيل",
      },
      totalInvestment: "إجمالي الاستثمار المطلوب",
      roi: "فترة استرداد رأس المال",
      roiPeriod: "شهراً مع معدل 12-8 خدمة يومياً",
    },
    pricing: {
      title: "نموذج التسعير والإيرادات المتوقعة",
      basic: "باقة أساسية",
      advanced: "باقة متقدمة",
      comprehensive: "باقة شاملة",
      packages: "باقات الخدمات",
    },
    advantages: {
      title: "المزايا التنافسية وعوامل النجاح",
      timeSaving: "توفير الوقت والجهد",
      competitive: "أسعار تنافسية",
      targeting: "استهداف ذكي",
      loyalty: "برنامج ولاء مميز",
    },
    marketing: {
      title: "استراتيجية التسويق والنمو",
      phase1: "المرحلة الأولى: البنية الرقمية",
      phase2: "المرحلة الثانية: الحملات الترويجية",
      phase3: "المرحلة الثالثة: التوسع والنمو",
    },
    investment: {
      title: "دعوة للشراكة والاستثمار",
      opportunity: "فرصة استثمارية واعدة في قطاع متنام",
      expectedReturns: "العائد المتوقع",
      nextSteps: "الخطوات التالية",
      whatWeLookFor: "ما نبحث عنه",
    },
    contact: {
      title: "تواصل معنا الآن",
      cta: "اطلب دراسة الجدوى الكاملة",
    },
  },
  en: {
    hero: {
      title: "Mobile Oil Change Service Project",
      subtitle: "Suzuki Eeco Van - An innovative solution that saves time and provides comfort for customers",
    },
    about: {
      title: "Project Idea and Investment Opportunity",
      whyNow: "Why Now?",
      serviceOffered: "Service Offered",
      whyNowPoints: [
        "Growing demand for mobile services in the Kingdom",
        "Growth of the automotive sector and rising ownership rates",
        "Changing Saudi consumer lifestyle towards convenience and speed",
        "Few competitors in this specialized field",
        "Vision 2030 support for small and medium enterprises",
      ],
      servicePoints: [
        "We offer a distinguished service for changing car oils, both mineral and synthetic, at the customer location,",
        "whether at home, workplace, or parking lot. Using a Suzuki Eeco van fully equipped with the latest equipment",
        "and tools, we provide a professional service experience that rivals traditional maintenance centers.",
        "This project targets a wide segment of customers in the Saudi market who seek comfort",
        "and time-saving without sacrificing service quality.",
      ],
    },
    costs: {
      title: "Estimated Project Cost",
      subtitle: "Medium initial investment with expected ROI within 18-24 months",
      categories: {
        equipment: "Van and Basic Equipment",
        design: "Equipment and Design",
        inventory: "Inventory and Operations",
      },
      totalInvestment: "Total Required Investment",
      roi: "Capital Recovery Period",
      roiPeriod: "months with a rate of 8-12 daily services",
    },
    pricing: {
      title: "Pricing Model and Expected Revenues",
      basic: "Basic Package",
      advanced: "Advanced Package",
      comprehensive: "Comprehensive Package",
      packages: "Service Packages",
    },
    advantages: {
      title: "Competitive Advantages and Success Factors",
      timeSaving: "Time and Effort Saving",
      competitive: "Competitive Prices",
      targeting: "Smart Targeting",
      loyalty: "Premium Loyalty Program",
    },
    marketing: {
      title: "Marketing and Growth Strategy",
      phase1: "Phase One: Digital Infrastructure",
      phase2: "Phase Two: Promotional Campaigns",
      phase3: "Phase Three: Expansion and Growth",
    },
    investment: {
      title: "Partnership and Investment Invitation",
      opportunity: "Promising investment opportunity in a growing sector",
      expectedReturns: "Expected Returns",
      nextSteps: "Next Steps",
      whatWeLookFor: "What We Look For",
    },
    contact: {
      title: "Contact Us Now",
      cta: "Request Full Feasibility Study",
    },
  },
}
