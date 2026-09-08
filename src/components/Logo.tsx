type LogoProps = {
  variant?: 'nav' | 'mark' | 'lockup'
}

export function Logo({ variant = 'nav' }: LogoProps) {
  return (
    <a href="#home" className={`logo logo-${variant}`} aria-label="Kaizen Barbershop home">
      {variant === 'lockup' ? (
        <img src="/images/logo-and-name.png" alt="" />
      ) : variant === 'mark' ? (
        <img src="/images/logo.png" alt="" />
      ) : (
        <>
          <img className="logo-mark" src="/images/logo.png" alt="" />
          <img className="logo-name" src="/images/name.png" alt="" />
        </>
      )}
    </a>
  )
}
