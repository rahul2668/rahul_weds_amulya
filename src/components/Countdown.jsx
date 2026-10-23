import { useEffect, useState } from 'react'
import wedding from '../data/wedding'

const target = new Date(wedding.dateTime).getTime()

function getRemaining() {
  const diff = Math.max(0, target - Date.now())
  return {
    Days: Math.floor(diff / 86400000),
    Hours: Math.floor((diff / 3600000) % 24),
    Minutes: Math.floor((diff / 60000) % 60),
    Seconds: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section reveal">
      <img className="card-art card-art-shehnai" src="/art/shehnai.svg" alt="" aria-hidden="true" />
      <h2 className="section-title">Counting Down</h2>
      {time.done ? (
        <p className="lead">The big day is here! 🎊</p>
      ) : (
        <div className="timer">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit) => (
            <div key={unit} className="timer-box">
              <span className="timer-num">{String(time[unit]).padStart(2, '0')}</span>
              <span className="timer-label">{unit}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
