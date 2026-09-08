import { fullAddress, site, telHref } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <Logo variant="lockup" />
          <p className="mt-5 max-w-sm text-sm text-mist">{site.supportingText}</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.22em] text-brass uppercase">Visit</p>
          <p className="mt-4 text-sm text-mist">{fullAddress}</p>
          <a className="mt-3 block text-sm text-mist hover:text-bone" href={telHref}>
            {site.phone}
          </a>
          <a
            className="mt-3 inline-block text-sm text-mist hover:text-bone"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram {site.instagramHandle}
          </a>
          <a
            className="mt-3 block text-sm text-mist hover:text-bone"
            href={site.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop products
          </a>
          <a
            className="mt-3 block text-sm text-brass hover:text-bone"
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on Squire
          </a>
        </div>
      </div>
      <div className="container mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-xs tracking-[0.14em] text-mist uppercase">
        <p>
          © {year} {site.name}
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal">
          <a className="hover:text-bone" href="#privacy">
            Privacy Policy
          </a>
          <a className="hover:text-bone" href="#terms">
            Terms of Service
          </a>
        </nav>
        <p className="normal-case tracking-[0.04em]">Designed by TooDep</p>
      </div>
    </footer>
  )
}
