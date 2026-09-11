import ExpertiseForm from './components/ExpertiseForm'
import FixedCtaBar from './components/FixedCtaBar'
import BackToTop from './components/BackToTop'
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
      <main className="page-main">
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
      <FixedCtaBar />
      <BackToTop />
    </>
  )
}

export default App
