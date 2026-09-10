import { navLinks } from '../data/landingContent'

const navigation = navLinks
  .filter(([, href]) => href !== '#accueil')
  .slice(0, 6)

const actions = [
  ['Pourquoi Monsinistre', '#pourquoi-monsinistre'],
  ['Biens concernés', '#biens-concernes'],
  ['Processus', '#processus'],
  ['Demander une expertise', '#expertise-form'],
]

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

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

const socialNetworks = [
  {
    name: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/company/111123138/',
  },
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
]

function SocialIcon({ name, Icon, href }) {
  const className = 'footer-social-btn'

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        title={name}
      >
        <Icon />
      </a>
    )
  }

  return (
    <span className={className} aria-label={name} role="img" title={name}>
      <Icon />
    </span>
  )
}

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <a className="footer-brand" href="#accueil">
              <img
                className="brand-logo"
                src="/logo.png"
                alt="Monsinistre"
                width={180}
                height={40}
                decoding="async"
              />
            </a>

            <p className="footer-brand-desc">
              Expertise préalable de vos bijoux, œuvres d’art et biens de valeur,
              pour connaître leur valeur réelle, les documenter et les protéger
              avant leur assurance.
            </p>

            <div className="footer-social">
              {socialNetworks.map((network) => (
                <SocialIcon key={network.name} {...network} />
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h2 className="footer-title">Navigation</h2>
            <nav className="footer-links" aria-label="Navigation pied de page">
              {navigation.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h2 className="footer-title">Actions</h2>
            <nav className="footer-links" aria-label="Actions pied de page">
              {actions.map(([label, href]) => (
                <a key={`${label}-${href}`} href={href}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-col footer-contact-col">
            <h2 className="footer-title">Contact</h2>
            <p className="footer-contact-desc">
              Parlez-nous de vos biens et de votre besoin d’expertise. Nous vous
              accompagnons avec discrétion et professionnalisme.
            </p>
            <a className="footer-cta" href="#expertise-form">
              Demander une expertise
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Monsinistre. All rights reserved.</p>
          <p className="footer-credit">
            Design and development by{' '}
            <a
              href="https://thinkgroup.ma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Think Group
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
