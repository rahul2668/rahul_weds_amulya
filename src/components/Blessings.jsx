import wedding from '../data/wedding'

export default function Blessings() {
  return (
    <section className="section blessings reveal">
      <img className="card-art card-art-elephants" src="/art/elephants.svg" alt="" aria-hidden="true" />
      <p className="blessings-label">With the blessings of</p>
      <p className="blessings-names">{wedding.blessings}</p>
    </section>
  )
}
