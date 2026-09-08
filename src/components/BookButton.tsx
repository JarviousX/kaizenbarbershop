import { site } from '../data/site'

type BookButtonProps = {
  href?: string
  children?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export function BookButton({
  href = site.bookingUrl,
  children = 'Book Now',
  variant = 'primary',
  className = '',
}: BookButtonProps) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} btn-glare ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="btn-label">{children}</span>
      <span className="glare glare-a" aria-hidden="true" />
      <span className="glare glare-b" aria-hidden="true" />
    </a>
  )
}
