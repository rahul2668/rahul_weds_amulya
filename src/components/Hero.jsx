import wedding from '../data/wedding'
import Divider from './Divider'
import Gods from './Gods'

const PETALS = Array.from({ length: 14 }, (_, i) => i)

export default function Hero() {
  return (
    <>
      {/* Cover: the first screen, like the front of a wedding card */}
      <header className="hero">
        <div className="petals" aria-hidden="true">
          {PETALS.map((i) => (
            <span
              key={i}
              className="petal"
              style={{
                left: `${(i * 7.3) % 100}%`,
                animationDelay: `${(i * 0.9) % 8}s`,
                animationDuration: `${8 + (i % 5)}s`,
              }}
            />
          ))}
        </div>

        <div className="toran" aria-hidden="true" />

        <div className="hero-content">
          <div className="astu-row">
            {wedding.blessingWords.map((word) => (
              <span key={word} className="astu-word">{word}</span>
            ))}
          </div>
          <Gods />
          <p className="invocation">{wedding.invocation}</p>
          <h1 className="eyebrow">{wedding.title}</h1>
        </div>

        <a href="#couple-names" className="scroll-hint" aria-label="Scroll down">
          <span className="scroll-arrow" aria-hidden="true">❯</span>
        </a>
      </header>

      {/* Inside page: the couple, date and venue */}
      <section id="couple-names" className="hero-names">
        <h2 className="names">
          {wedding.groom.name}
          <span className="amp">&amp;</span>
          {wedding.bride.name}
        </h2>
        <Divider />
        <p className="hero-date">{wedding.displayDate}</p>
        <p className="hero-venue">Sumuhurtham {wedding.muhurtham}</p>
        <p className="hero-venue">{wedding.venue.name}</p>
        <a href="#venue" className="btn">View Venue</a>
      </section>
    </>
  )
}
