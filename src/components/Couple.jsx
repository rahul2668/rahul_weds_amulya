import wedding from '../data/wedding'

// Separate groom & bride photos — not used now (replaced by one couple photo).
// To bring them back, uncomment this and the `couple-grid` block below.
// function Person({ person, role }) {
//   return (
//     <div className="person">
//       <div className="arch-frame">
//         <img src={person.photo} alt={`${role} ${person.fullName}`} loading="lazy" />
//       </div>
//       <h3 className="person-name">{person.fullName}</h3>
//       <p className="person-parents">{person.parents}</p>
//     </div>
//   )
// }

export default function Couple() {
  return (
    <section className="section couple reveal">
      <h2 className="section-title">The Couple</h2>
      <p className="lead">{wedding.message}</p>
      <img className="card-art card-art-wide" src="/art/mangalsutra.svg" alt="" aria-hidden="true" />

      {/*
      <div className="couple-grid">
        <Person person={wedding.groom} role="Groom" />
        <div className="couple-heart" aria-hidden="true">with</div>
        <Person person={wedding.bride} role="Bride" />
      </div>
      */}

      {/* Couple photo — uncomment to show it again
      <figure className="couple-photo">
        <div className="couple-frame">
          <img
            src={wedding.couplePhoto}
            alt={`${wedding.groom.fullName} and ${wedding.bride.fullName}`}
            loading="lazy"
          />
        </div>
      </figure>
      */}
    </section>
  )
}