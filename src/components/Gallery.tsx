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
  paused,
  onOpen,
}: {
  index: number
  src: string
  alt: string
  caption: string
  paused: boolean
  onOpen: () => void
}) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
  const [inView, setInView] = useState(true)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12, rootMargin: '160px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    const markReady = () => {
      if (video.videoWidth > 0) setReady(true)
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const shouldPlay = inView && !paused && !reduce

    video.addEventListener('loadeddata', markReady)
    video.addEventListener('playing', markReady)
    markReady()

    if (!shouldPlay) {
      video.pause()
      return () => {
        video.removeEventListener('loadeddata', markReady)
        video.removeEventListener('playing', markReady)
      }
    }

    const play = () => {
      void video.play().then(markReady).catch(() => undefined)
    }

    play()
    video.addEventListener('canplay', play)

    return () => {
      video.removeEventListener('canplay', play)
      video.removeEventListener('loadeddata', markReady)
      video.removeEventListener('playing', markReady)
    }
  }, [inView, paused])

  return (
    <div
      ref={nodeRef}
      role="button"
      tabIndex={0}
      className={`gallery-item frame-${FRAMES[index] ?? 'a'} ${ready ? 'is-ready' : ''}`}
      data-gallery-item={index}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen()
        }
      }}
      aria-label={`Open ${caption} video`}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-label={alt}
        onPlaying={() => setReady(true)}
        onError={() => setReady(false)}
      />
      <span className="gallery-prelabel" aria-hidden={ready}>
        <strong>{fileName(src)}</strong>
        <span>{caption}</span>
      </span>
    </div>
  )
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const clips = site.gallery
  const current = active === null ? null : clips[active]

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
              paused={active !== null}
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
            muted
            loop
            playsInline
            controls
            preload="auto"
            ref={(el) => {
              if (!el) return
              el.muted = true
              el.playsInline = true
              el.setAttribute('playsinline', '')
              el.setAttribute('webkit-playsinline', '')
              void el.play().catch(() => undefined)
            }}
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
