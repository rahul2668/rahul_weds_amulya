import wedding from '../data/wedding'

export default function Venue() {
  const { venue } = wedding
  return (
    <section id="venue" className="section reveal">
      <h2 className="section-title">Function Hall</h2>
      <img className="card-art card-art-mandap" src="/art/mandap.svg" alt="" aria-hidden="true" />
      <div className="venue-card">
        <div className="venue-info">
          <h3>{venue.name}</h3>
          <p className="venue-row">
            <span aria-hidden="true">📍</span> {venue.address}
          </p>
          <p className="venue-row">
            <span aria-hidden="true">📅</span> {wedding.displayDate}
          </p>
          <p className="venue-row">
            <span aria-hidden="true">🕉️</span> Muhurtham: {wedding.muhurtham}
          </p>
          <a className="btn" href={venue.mapsLink} target="_blank" rel="noreferrer">
            Get Directions
          </a>
        </div>
        <div className="venue-map">
          <iframe
            title={`Map of ${venue.name}`}
            src={venue.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
