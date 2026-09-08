import { useEffect, useRef } from 'react'
import { site } from '../data/site'
import { BookButton } from './BookButton'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (media.matches) {
        video.pause()
      } else {
        void video.play()
      }
    }

    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    const mediaLayer = mediaRef.current
    const copy = copyRef.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const update = () => {
      const y = window.scrollY
      if (reduce.matches) {
        if (mediaLayer) mediaLayer.style.transform = ''
        if (copy) {
          copy.style.transform = ''
          copy.style.opacity = ''
        }
        return
      }

      if (mediaLayer) {
        mediaLayer.style.transform = `translate3d(0, ${y * 0.28}px, 0)`
      }
      if (copy) {
        copy.style.transform = `translate3d(0, ${y * 0.12}px, 0)`
        copy.style.opacity = String(Math.max(0, 1 - y / 560))
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-media" ref={mediaRef}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={site.hero.poster}
          aria-hidden="true"
        >
          <source src={site.hero.video} type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />
      <p className="kanji" aria-hidden="true">
        改善
      </p>
      <div className="hero-copy" ref={copyRef}>
        <p className="eyebrow">Barbershop · Continuous improvement</p>
        <h1>{site.tagline}</h1>
        <p className="hero-support">{site.supportingText}</p>
        <div className="hero-actions">
          <BookButton className="hero-book" />
          <a className="btn btn-secondary" href="#services">
            View Services
          </a>
        </div>
        <div className="hero-meta">
          <span>Fort Smith, AR</span>
          <span>Walk-ins welcome</span>
          <span>Good for kids</span>
        </div>
      </div>
    </section>
  )
}
