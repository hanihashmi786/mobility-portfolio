import { Suspense, lazy } from "react"
import { LanguageProvider } from "./context/LanguageContext"
import { Header, Footer } from "./components/layout"
import { Loading, ScrollToTop } from "./components/common"
import "./styles/global.scss"

const Hero = lazy(() => import("./sections/Hero/Hero").then((m) => ({ default: m.Hero })))
const About = lazy(() => import("./sections/About/About").then((m) => ({ default: m.About })))
const Costs = lazy(() => import("./sections/Costs/Costs").then((m) => ({ default: m.Costs })))
const Pricing = lazy(() => import("./sections/Pricing/Pricing").then((m) => ({ default: m.Pricing })))
const Advantages = lazy(() => import("./sections/Advantages/Advantages").then((m) => ({ default: m.Advantages })))
const Marketing = lazy(() => import("./sections/Marketing/Marketing").then((m) => ({ default: m.Marketing })))
const Investment = lazy(() => import("./sections/Investment/Investment").then((m) => ({ default: m.Investment })))
const Contact = lazy(() => import("./sections/Contact/Contact").then((m) => ({ default: m.Contact })))

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<Loading />}>
            <Hero />
            <About />
            <Costs />
            <Pricing />
            <Advantages />
            <Marketing />
            <Investment />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  )
}

export default App
