import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navLinks } from '../data/landingContent'

function getActiveHref() {
  const offset = window.scrollY + 140
  let current = navLinks[0]?.[1] ?? '#accueil'

  for (const [, href] of navLinks) {
    const section = document.getElementById(href.slice(1))
    if (!section) continue
    if (section.offsetTop <= offset) current = href
  }

  return current
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#accueil')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      setActiveHref(getActiveHref())
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1200) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container-shell site-header-inner">
        <a className="brand" href="#accueil" onClick={close}>
          <img
            className="brand-logo"
            src="/logo.png"
            alt="Monsinistre"
            width={180}
            height={40}
            decoding="async"
          />
        </a>

        <nav className="nav-desktop" aria-label="Navigation principale">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              className={`nav-link${activeHref === href ? ' is-active' : ''}`}
              href={href}
              aria-current={activeHref === href ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="primary-cta header-cta" href="#expertise-form">
          Demander une expertise
          <ArrowRight size={16} aria-hidden="true" />
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`container-shell mobile-panel ${open ? 'is-open' : ''}`}
      >
        <nav aria-label="Navigation mobile">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              className={activeHref === href ? 'is-active' : undefined}
              href={href}
              aria-current={activeHref === href ? 'page' : undefined}
              onClick={close}
            >
              {label}
            </a>
          ))}
          <a className="primary-cta" href="#expertise-form" onClick={close}>
            Demander une expertise
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
