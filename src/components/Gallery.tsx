import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { Reveal } from './Reveal'

const FRAMES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'] as const

function fileName(src: string) {
  return src.split('/').pop() ?? src
}

function WorkClip({
  index,
  src,
  alt,
  caption,
  playing,
  onOpen,
}: {
  index: number
  src: string
  alt: string
  caption: string
  playing: boolean
  onOpen: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !ready) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (playing && !reduce) {
      void video.play()
    } else {
      video.pause()
    }
  }, [playing, ready])

  return (
    <button
      type="button"
      className={`gallery-item frame-${FRAMES[index] ?? 'a'} ${ready ? 'is-ready' : ''}`}
      data-gallery-item={index}
      onClick={onOpen}
      aria-label={`Open ${caption} video`}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        onLoadedData={() => setReady(true)}
        onError={() => setReady(false)}
      />
      <span className="gallery-prelabel" aria-hidden={ready}>
        <strong>{fileName(src)}</strong>
        <span>{caption}</span>
      </span>
    </button>
  )
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const [inView, setInView] = useState<Record<number, boolean>>({})
  const clips = site.gallery
  const current = active === null ? null : clips[active]

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-gallery-item]'))
    const observer = new IntersectionObserver(
      (entries) => {
        setInView((value) => {
          const next = { ...value }
          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute('data-gallery-item'))
            next[index] = entry.isIntersecting
          })
          return next
        })
      },
      { threshold: 0.45 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (active === null) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') {
        setActive((value) => (value === null ? 0 : (value + 1) % clips.length))
      }
      if (event.key === 'ArrowLeft') {
        setActive((value) => (value === null ? 0 : (value - 1 + clips.length) % clips.length))
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [active, clips.length])

  return (
    <section id="gallery" className="section bg-charcoal">
      <div className="container-wide px-5 md:px-6">
        <Reveal>
          <p className="eyebrow">Lookbook</p>
          <h2 className="mt-5 max-w-[10ch] text-[clamp(2.6rem,6vw,4.6rem)]">The work.</h2>
        </Reveal>
        <div className="gallery-grid mt-12">
          {clips.map((clip, index) => (
            <WorkClip
              key={clip.src}
              index={index}
              src={clip.src}
              alt={clip.alt}
              caption={clip.caption}
              playing={active === null && Boolean(inView[index])}
              onOpen={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      {current ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="lightbox-btn lightbox-close"
            onClick={(event) => {
              event.stopPropagation()
              setActive(null)
            }}
            aria-label="Close video"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-btn prev"
            onClick={(event) => {
              event.stopPropagation()
              setActive((value) => (value === null ? 0 : (value - 1 + clips.length) % clips.length))
            }}
            aria-label="Previous video"
          >
            ‹
          </button>
          <video
            key={current.src}
            src={current.src}
            autoPlay
            playsInline
            controls
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox-btn next"
            onClick={(event) => {
              event.stopPropagation()
              setActive((value) => (value === null ? 0 : (value + 1) % clips.length))
            }}
            aria-label="Next video"
          >
            ›
          </button>
        </div>
      ) : null}
    </section>
  )
}
