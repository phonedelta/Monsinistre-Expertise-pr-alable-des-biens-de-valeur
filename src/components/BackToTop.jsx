import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      href="#accueil"
      aria-label="Revenir en haut de page"
      onClick={scrollTop}
    >
      <ArrowUp size={16} aria-hidden="true" />
    </a>
  )
}
