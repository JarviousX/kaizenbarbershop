import { site } from '../data/site'
import { useParallax } from '../hooks/useParallax'
import { Reveal } from './Reveal'

export function About() {
  const { about } = site
  const photoRef = useParallax<HTMLDivElement>(0.12)

  return (
    <section id="about" className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="mt-5 max-w-[12ch] text-[clamp(2.6rem,6vw,4.6rem)]">{about.title}</h2>
          <p className="mt-6 max-w-xl text-lg text-bone">{about.lead}</p>
          <p className="mt-4 max-w-xl text-mist">{about.body}</p>
        </Reveal>
        <Reveal delay={120}>
          <figure className="photo-frame">
            <div className="parallax-frame">
              <div ref={photoRef} className="parallax-shift">
                <img
                  src={about.photo.src}
                  alt={about.photo.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                />
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
