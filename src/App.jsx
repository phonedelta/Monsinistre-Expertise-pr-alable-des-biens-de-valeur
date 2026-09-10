import BackToTop from './components/BackToTop'
import ExpertiseForm from './components/ExpertiseForm'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import {
  AssetsSection,
  AudienceSection,
  BenefitsSection,
  ExpertiseSection,
  HeroSection,
  ProblemSection,
  ProcessSection,
  WhySection,
} from './components/LandingSections'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <ExpertiseSection />
        <AssetsSection />
        <BenefitsSection />
        <AudienceSection />
        <ProcessSection />
        <WhySection />
        <ExpertiseForm />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  )
}

export default App
