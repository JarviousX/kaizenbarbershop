import { useEffect, useState } from 'react'
import { mapsDirectionsUrl, telHref } from '../data/site'
import { BookButton } from './BookButton'

export function MobileDock() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('home')
    if (!hero) return

    const update = () => {
      const rect = hero.getBoundingClientRect()
      setVisible(rect.top + rect.height * 0.5 < 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <nav
      className={`mobile-dock ${visible ? 'is-visible' : ''}`}
      aria-label="Quick actions"
      aria-hidden={!visible}
      {...(!visible ? { inert: true } : {})}
    >
      <a
        className="mobile-dock-link"
        href={mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
        Map
      </a>
      <a className="mobile-dock-link" href={telHref} tabIndex={visible ? 0 : -1}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M6.6 4.8h2.2l1 4.1-1.7 1.1a12.4 12.4 0 0 0 5.9 5.9l1.1-1.7 4.1 1v2.2c0 .8-.7 1.5-1.5 1.5C9.6 18.9 5.1 14.4 5.1 6.3c0-.8.7-1.5 1.5-1.5Z" />
        </svg>
        Call
      </a>
      <BookButton className="mobile-dock-book">{`Book`}</BookButton>
    </nav>
  )
}
