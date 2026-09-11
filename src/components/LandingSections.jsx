import {
  ArrowRight,
  Brush,
  Clock3,
  Eye,
  FileCheck2,
  FileText,
  FolderCheck,
  Frame,
  Gem,
  HelpCircle,
  House,
  Images,
  Layers,
  MessagesSquare,
  Palette,
  ScanSearch,
  Search,
  Send,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Watch,
} from 'lucide-react'
import Reveal from './Reveal'
import {
  assets,
  audiences,
  benefits,
  problems,
  processSteps,
  reasons,
} from '../data/landingContent'

const icons = {
  ArrowRight,
  Brush,
  Clock3,
  Eye,
  FileCheck2,
  FileText,
  FolderCheck,
  Frame,
  Gem,
  HelpCircle,
  House,
  Images,
  Layers,
  MessagesSquare,
  Palette,
  ScanSearch,
  Search,
  Send,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Watch,
}

function LucideIcon({ name, size = 20 }) {
  const Icon = icons[name]
  if (!Icon) return null
  return <Icon size={size} aria-hidden="true" strokeWidth={1.75} />
}

function CTA({ children }) {
  return (
    <a className="primary-cta group" href="#expertise-form">
      <span>{children}</span>
      <ArrowRight
        size={18}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </a>
  )
}

function SectionIntro({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}) {
  return (
    <Reveal
      className={
        align === 'center'
          ? 'mx-auto max-w-3xl text-center'
          : 'max-w-2xl'
      }
    >
      {eyebrow && (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <span className="section-eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p
          className={`section-lead ${align === 'center' ? 'is-centered' : ''} ${light ? 'text-white/70' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}

export function HeroSection() {
  return (
    <section id="accueil" className="hero scroll-mt-8">
      <div className="container-shell hero-grid">
        <Reveal className="hero-copy relative z-10">
          <span className="section-eyebrow">Expertise préalable</span>
          <h1 className="hero-title">
            Avant d’assurer vos biens de valeur, connaissez leur valeur réelle
          </h1>
          <p className="hero-lead">
            Bijoux, tableaux, œuvres d’art et objets de valeur : faites réaliser
            une expertise préalable pour identifier, évaluer et documenter vos
            biens avant de souscrire votre assurance.
          </p>
          <div className="hero-actions">
            <CTA>Demander mon expertise préalable</CTA>
          </div>
        </Reveal>

        <Reveal delay={100} className="hero-media">
          <div className="glow glow-tr" aria-hidden="true" />
          <div className="hero-float hero-float-one" aria-hidden="true">
            <span className="icon-box">
              <Gem size={14} />
            </span>
            Bijoux & patrimoine
          </div>
          <div className="hero-media-frame">
            <img
              src="/images/hero.jpg"
              alt="Bijou haut de gamme photographié en studio"
              width={1536}
              height={1024}
              sizes="(max-width: 1023px) min(100vw - 2rem, 26rem), 520px"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-float hero-float-two" aria-hidden="true">
            <span className="icon-box">
              <ShieldCheck size={14} />
            </span>
            Avant l’assurance
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ProblemSection() {
  return (
    <section
      id="problematique"
      className="section-shell scroll-mt-8 bg-[var(--bg-soft)]"
    >
      <div className="container-shell">
        <SectionIntro
          align="center"
          eyebrow="Problématique"
          title="Vos biens ont de la valeur. Mais pouvez-vous la justifier précisément ?"
          subtitle="Lorsqu’il s’agit d’assurer des biens précieux, une estimation approximative peut créer un écart entre la valeur réelle de votre patrimoine et la couverture prévue."
        />
        <div className="problem-grid mt-12 lg:mt-14">
          {problems.map((problem, index) => (
            <Reveal
              key={problem.number}
              delay={index * 60}
              className="ui-card problem-card h-full group"
            >
              <img
                src={problem.image}
                alt={problem.alt}
                width={800}
                height={600}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                loading="lazy"
                decoding="async"
              />
              <div className="problem-card-body">
                <div className="problem-card-heading">
                  <span className="icon-box">
                    <LucideIcon name={problem.icon} />
                  </span>
                  <h3>{problem.title}</h3>
                </div>
                <p>{problem.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExpertiseSection() {
  return (
    <section
      id="expertise-prealable"
      className="section-shell scroll-mt-8 bg-white"
    >
      <div className="container-shell expertise-layout">
        <Reveal className="group">
          <div className="media-frame">
            <img
              src="/images/expertise.jpg"
              alt="Œuvre d’art présentée dans un intérieur raffiné"
              width={1536}
              height={1024}
              sizes="(max-width: 1023px) 100vw, 50vw"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionIntro
            eyebrow="Expertise préalable"
            title="L’expertise préalable : connaître avant d’assurer"
            subtitle="Monsinistre vous permet de disposer d’une vision claire et documentée de la valeur de vos biens avant la souscription de votre assurance."
          />
          <div className="mini-points">
            <p className="mini-point">
              L’expertise préalable consiste à identifier, examiner, évaluer et
              documenter les biens de valeur que vous souhaitez assurer.
            </p>
            <p className="mini-point">
              Selon la nature des biens concernés, cette démarche permet de
              constituer une base technique claire sur leur valeur avant
              d’échanger avec votre assureur sur les conditions de couverture.
            </p>
          </div>
          <div className="mt-8">
            <CTA>Faire évaluer mes biens</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function AssetsSection() {
  return (
    <section
      id="biens-concernes"
      className="section-shell scroll-mt-8 bg-[var(--bg-soft)]"
    >
      <div className="container-shell">
        <SectionIntro
          eyebrow="Biens concernés"
          title="Quels biens sont concernés ?"
          subtitle="Une expertise adaptée aux biens dont la valeur mérite d’être précisément établie."
          align="center"
        />
        <div className="asset-grid mt-10">
          {assets.map((asset, index) => (
            <Reveal
              key={asset.title}
              delay={index * 60}
              className="ui-card asset-card group"
            >
              <img
                src={asset.image}
                alt={asset.alt}
                width={1536}
                height={1024}
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                loading="lazy"
                decoding="async"
              />
              <div className="asset-card-body">
                <span className="icon-box">
                  <LucideIcon name={asset.icon} />
                </span>
                <h3>{asset.title}</h3>
                <p>{asset.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BenefitsSection() {
  return (
    <section id="benefices" className="section-shell scroll-mt-8 bg-white">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Bénéfices"
            title="Ce que l’expertise préalable change pour vous"
          />
          <Reveal delay={80} className="lg:pb-1">
            <CTA>Faire évaluer mes biens</CTA>
          </Reveal>
        </div>
        <div className="benefit-grid mt-10">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.number}
              delay={index * 60}
              className="ui-card benefit-card"
            >
              <span className="icon-box">
                <LucideIcon name={benefit.icon} />
              </span>
              <h3>{benefit.title}</h3>
              <p className="!text-[var(--text)] !font-medium">{benefit.lead}</p>
              <p>{benefit.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AudienceSection() {
  return (
    <section
      id="profils"
      className="section-shell scroll-mt-8 bg-[var(--bg-soft)]"
    >
      <div className="container-shell">
        <SectionIntro
          eyebrow="Profils"
          title="Cette expertise est-elle faite pour vous ?"
          subtitle="Elle s’adresse particulièrement aux propriétaires disposant d’un patrimoine mobilier de valeur."
          align="center"
        />
        <div className="audience-grid mt-10">
          {audiences.map((audience, index) => (
            <Reveal
              key={audience.title}
              delay={index * 60}
              className="ui-card audience-card"
            >
              <span className="icon-box">
                <LucideIcon name={audience.icon} />
              </span>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex justify-center">
          <CTA>Faire évaluer mes biens</CTA>
        </Reveal>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section id="processus" className="section-shell scroll-mt-8 bg-white">
      <div className="container-shell">
        <SectionIntro
          eyebrow="Processus"
          title="Une démarche simple avant votre assurance"
          align="center"
        />
        <div className="process-track mt-10">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 80}
              className="ui-card process-step"
            >
              <span className="icon-box">
                <LucideIcon name={step.icon} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhySection() {
  return (
    <section
      id="pourquoi-monsinistre"
      className="section-shell scroll-mt-8 bg-[var(--bg-soft)]"
    >
      <div className="container-shell why-layout">
        <Reveal className="group">
          <SectionIntro
            eyebrow="Pourquoi Monsinistre"
            title="Pourquoi confier votre expertise préalable à Monsinistre ?"
            subtitle="Parce qu’un bien précieux mérite mieux qu’une estimation approximative."
          />
          <div className="media-frame mt-8">
            <img
              src="/images/why.jpg"
              alt="Intérieur contemporain mettant en valeur un patrimoine de qualité"
              width={1536}
              height={1024}
              sizes="(max-width: 1023px) 100vw, 50vw"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <div>
          <div className="why-cards">
            {reasons.map((reason, index) => (
              <Reveal
                key={reason.title}
                delay={index * 60}
                className="ui-card why-card"
              >
                <span className="icon-box">
                  <LucideIcon name={reason.icon} />
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <CTA>Faire évaluer mes biens</CTA>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
