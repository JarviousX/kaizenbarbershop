import { site } from '../data/site'
import { Reveal } from './Reveal'

export function Services() {
  return (
    <section id="services" className="section bg-charcoal">
      <div className="container">
        <Reveal>
          <p className="eyebrow">The menu</p>
          <h2 className="mt-5 max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)]">
            Cuts with intention.
          </h2>
          <p className="mt-5 max-w-2xl text-mist">
            From a fifteen-minute lineup to The Full Experience. Book the service you want, then
            pick your barber on Squire.
          </p>
        </Reveal>
        <div className="mt-12">
          {site.services.map((service, index) => (
            <Reveal key={service.id} delay={index * 40}>
              <article className="service-row">
                <p className="text-xs tracking-[0.22em] text-brass">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div>
                  <div className="service-top md:block">
                    <h3 className="service-name">{service.name}</h3>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm text-mist md:text-base">{service.description}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="service-price">{service.price}</p>
                  {service.duration ? (
                    <p className="mt-1 text-xs tracking-[0.16em] text-mist uppercase">
                      {service.duration}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
