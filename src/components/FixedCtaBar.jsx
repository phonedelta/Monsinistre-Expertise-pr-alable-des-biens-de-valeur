import { ArrowRight } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socialNetworks = [
  {
    name: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/monsinistrema/',
  },
  {
    name: 'Facebook',
    Icon: FacebookIcon,
    href: 'https://www.facebook.com/monsinistrema/',
  },
  {
    name: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/company/monsinistre/',
  },
]

export default function FixedCtaBar() {
  return (
    <div className="fixed-cta-bar" role="region" aria-label="Action principale">
      <div className="container-shell fixed-cta-inner">
        <div className="fixed-cta-social">
          {socialNetworks.map(({ name, Icon, href }) => (
            <a
              key={name}
              className="fixed-cta-social-btn"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="fixed-cta-copy">
          <p className="fixed-cta-title">Besoin d’une expertise ?</p>
          <p className="fixed-cta-subtitle">
            Décrivez-nous vos biens et accédez directement au formulaire.
          </p>
        </div>

        <a className="primary-cta fixed-cta-btn" href="#expertise-form">
          Demander une expertise
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
