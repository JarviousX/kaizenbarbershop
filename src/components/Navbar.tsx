import { useEffect, useId, useRef, useState } from 'react'
import { site, type NavLink } from '../data/site'
import { BookButton } from './BookButton'
import { Logo } from './Logo'

function sectionId(link: NavLink) {
  if (link.external || !link.href.startsWith('#')) return null
  return link.href.slice(1)
}

const navSectionIds = site.nav.map(sectionId).filter((id): id is string => Boolean(id))

function useActiveSection() {
  const [active, setActive] = useState(navSectionIds[0] ?? 'home')

  useEffect(() => {
    const update = () => {
      const spy = 108
      let current = navSectionIds[0]
      for (const id of navSectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= spy) current = id
      }

      const scrolled = window.scrollY + window.innerHeight
      if (scrolled >= document.documentElement.scrollHeight - 24) {
        current = navSectionIds[navSectionIds.length - 1]
      }

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return active
}

function NavItem({
  link,
  onClick,
  isActive = false,
}: {
  link: NavLink
  onClick?: () => void
  isActive?: boolean
}) {
  return (
    <a
      href={link.href}
      className={isActive ? 'is-active' : undefined}
      aria-current={isActive ? 'location' : undefined}
      onClick={onClick}
      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {link.label}
    </a>
  )
}

function InstagramIcon() {
  return (
    <a
      className="nav-icon"
      href={site.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Kaizen Barbershop on Instagram ${site.instagramHandle}`}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const menuId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-shell">
          <Logo />
          <nav className="nav-links" aria-label="Primary">
            {site.nav.map((link) => (
              <NavItem
                key={link.href}
                link={link}
                isActive={sectionId(link) === active}
              />
            ))}
          </nav>
          <div className="nav-end">
            <InstagramIcon />
            <div className="hidden lg:block">
              <BookButton />
            </div>
            <button
              type="button"
              className={`menu-toggle ${open ? 'is-open' : ''}`}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div
        id={menuId}
        className={`mobile-nav ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Menu"
        {...(!open ? { inert: true } : {})}
      >
        <div className="flex items-center justify-between">
          <Logo variant="mark" />
          <button
            ref={closeRef}
            type="button"
            className="menu-toggle is-open"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav className="py-8" aria-label="Mobile">
          {site.nav.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              isActive={sectionId(link) === active}
              onClick={() => setOpen(false)}
            />
          ))}
        </nav>
        <BookButton className="self-start" />
      </div>
    </>
  )
}
