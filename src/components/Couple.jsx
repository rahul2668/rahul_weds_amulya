import wedding from '../data/wedding'

function Person({ person, role }) {
  return (
    <div className="person">
      <div className="arch-frame">
        <img src={person.photo} alt={`${role} ${person.fullName}`} loading="lazy" />
      </div>
      <h3 className="person-name">{person.fullName}</h3>
      <p className="person-parents">{person.parents}</p>
    </div>
  )
}

export default function Couple() {
  return (
    <section className="section couple reveal">
      <h2 className="section-title">The Couple</h2>
      <p className="lead">{wedding.message}</p>
      <img className="card-art card-art-wide" src="/art/mangalsutra.svg" alt="" aria-hidden="true" />
      <div className="couple-grid">
        <Person person={wedding.groom} role="Groom" />
        <div className="couple-heart" aria-hidden="true">with</div>
        <Person person={wedding.bride} role="Bride" />
      </div>
    </section>
  )
}
