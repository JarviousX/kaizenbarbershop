import { fullAddress, mapsDirectionsUrl, mapsEmbedUrl, site, telHref } from '../data/site'
import { Reveal } from './Reveal'

export function Location() {
  return (
    <section id="contact" className="section bg-charcoal">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Visit</p>
          <h2 className="mt-5 max-w-[12ch] text-[clamp(2.6rem,6vw,4.6rem)]">Hours &amp; location.</h2>
          <p className="mt-6 max-w-xl text-mist">
            Find the shop on Waldron Road, check the hours, and book ahead on Squire — walk-ins
            are welcome when a chair is open.
          </p>
          <p className="mt-4 text-sm tracking-[0.14em] text-brass uppercase">
            {site.highlights.join(' · ')}
          </p>
          <address className="mt-8 not-italic text-lg text-bone">{fullAddress}</address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
            <a className="btn btn-secondary" href={telHref}>
              Call {site.phone}
            </a>
            <a
              className="btn btn-ghost"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.instagramHandle}
            </a>
            <a
              className="btn btn-ghost"
              href={site.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop products
            </a>
          </div>
          <div className="mt-10 max-w-md">
            {site.hours.map((entry) => (
              <div className="hours-row" key={entry.day}>
                <span>{entry.day}</span>
                <span className="text-mist">{entry.hours}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <iframe
            className="map-frame h-full min-h-[22rem] w-full"
            title="Map showing Kaizen Barbershop location"
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  )
}
