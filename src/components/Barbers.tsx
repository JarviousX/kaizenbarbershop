import { useState } from 'react'
import { site, type Barber } from '../data/site'
import { BookButton } from './BookButton'
import { Reveal } from './Reveal'

function BarberPhoto({ barber }: { barber: Barber }) {
  const [failed, setFailed] = useState(false)

  if (!barber.photo || failed) {
    return (
      <div className="portrait" aria-hidden="true">
        {barber.initials}
      </div>
    )
  }

  return (
    <img
      src={barber.photo}
      alt={`Portrait of ${barber.name}`}
      width={640}
      height={800}
      loading="lazy"
      className="aspect-[4/5] w-full object-cover"
      onError={() => setFailed(true)}
    />
  )
}

export function Barbers() {
  return (
    <section id="barbers" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">The chairs</p>
          <h2 className="mt-5 max-w-[12ch] text-[clamp(2.6rem,6vw,4.6rem)]">Barbers.</h2>
          <p className="mt-5 max-w-2xl text-mist">
            Six chairs. One standard. Book the barber you want on Squire, or walk in when a chair
            is open.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.barbers.map((barber: Barber, index) => (
            <Reveal key={barber.id} delay={index * 80}>
              <article className="barber-card overflow-hidden">
                <BarberPhoto barber={barber} />
                <div className="p-6">
                  {barber.specialty && barber.specialty !== 'Barber' ? (
                    <p className="text-xs tracking-[0.22em] text-brass uppercase">{barber.specialty}</p>
                  ) : null}
                  <h3 className="text-3xl">{barber.name}</h3>
                  {barber.bio ? <p className="mt-3 text-sm text-mist">{barber.bio}</p> : null}
                  <BookButton
                    href={barber.bookingUrl ?? site.bookingUrl}
                    variant="ghost"
                    className="mt-6"
                  >
                    {`Book ${barber.name.split(' ')[0]}`}
                  </BookButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
