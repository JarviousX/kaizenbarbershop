import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Barbers } from './components/Barbers'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Legal, isLegalHash } from './components/Legal'
import { Location } from './components/Location'
import { Navbar } from './components/Navbar'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { MobileDock } from './components/MobileDock'
import { jsonLd } from './data/site'

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const sync = () => setHash(window.location.hash)
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  return hash
}

export default function App() {
  const hash = useHash()
  const legal = isLegalHash(hash)

  useEffect(() => {
    if (legal) {
      window.scrollTo({ top: 0 })
      return
    }

    const id = hash.replace('#', '')
    if (!id) return

    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView()
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, legal])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      {legal ? (
        <main id="main">
          <Legal page={hash === '#privacy' ? 'privacy' : 'terms'} />
        </main>
      ) : (
        <main id="main">
          <Hero />
          <About />
          <Services />
          <Barbers />
          <Gallery />
          <Reviews />
          <Location />
        </main>
      )}
      <Footer />
      {legal ? null : <MobileDock />}
    </>
  )
}
