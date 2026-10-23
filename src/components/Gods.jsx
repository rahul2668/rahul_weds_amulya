import wedding from '../data/wedding'

export default function Gods() {
  return (
    <div className="gods">
      {wedding.gods.map((god, i) => (
        <figure key={god.name} className={`god${i === 1 ? ' god-main' : ''}`}>
          <div className="god-ring">
            <img src={god.photo} alt={god.name} />
          </div>
        </figure>
      ))}
    </div>
  )
}
