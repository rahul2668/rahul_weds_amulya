import wedding from '../data/wedding'
import Divider from './Divider'

export default function Footer() {
  return (
    <footer className="footer reveal">
      <h2 className="section-title light">Invites</h2>
      <div className="inviters-row">
        {wedding.inviters.map((person) => (
          <figure key={person.name} className="inviter">
            <figcaption>{person.name}</figcaption>
          </figure>
        ))}
      </div>
      <p className="inviter-place">
        <span aria-hidden="true">🏠 </span>
        {wedding.inviterPlace}
      </p>
      <div className="contact-row">
        {wedding.contactNumbers.map((num) => (
          <a key={num} className="contact-pill" href={`tel:+91${num}`}>
            <span aria-hidden="true">📞</span> {num.slice(0, 5)} {num.slice(5)}
          </a>
        ))}
      </div>
      <Divider />
      <p className="closing">{wedding.closing}</p>
      <div className="compliments">
        {wedding.compliments.map((name) => (
          <p key={name} className="compliments-name">{name}</p>
        ))}
      </div>
      <div className="compliments-closing">
        <p className="closing-label">{wedding.complimentsLabel}</p>
        <p className="closing-families">{wedding.complimentsClosing}</p>
      </div>
    </footer>
  )
}
