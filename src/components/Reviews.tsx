import { site } from '../data/site'
import { Reveal } from './Reveal'
import { Stars } from './Stars'

export function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">The chair, after</p>
          <h2 className="mt-5 max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)]">
            Trusted in the details.
          </h2>
          <p className="mt-5 max-w-2xl text-mist">
            What clients notice first: the blend, the line, and a shop that never feels rushed.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {site.reviews.map((review, index) => (
            <Reveal key={review.id} delay={index * 70}>
              <article className="review-card h-full p-6 md:p-8">
                <Stars rating={review.rating} />
                <blockquote className="mt-5 font-display text-2xl leading-snug text-bone md:text-[1.7rem]">
                  “{review.quote}”
                </blockquote>
                <p className="mt-6 text-sm tracking-[0.16em] text-mist uppercase">
                  {review.name} · {review.source}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <a
            className="btn btn-secondary"
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More Reviews
          </a>
        </Reveal>
      </div>
    </section>
  )
}
