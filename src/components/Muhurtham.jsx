import wedding from '../data/wedding'

export default function Muhurtham() {
  return (
    <section className="section muhurtham reveal">
      <h2 className="section-title">Sumuhurtham</h2>
      <article className="muhurtham-card">
        <img className="card-art" src="/art/kalash.svg" alt="" aria-hidden="true" />
        <p className="muhurtham-date">{wedding.displayDate}</p>
        <p className="muhurtham-time">{wedding.muhurtham}</p>
        <p>{wedding.nakshatram}</p>
        <p>{wedding.lagnam}</p>
      </article>
    </section>
  )
}
