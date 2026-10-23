import { useEffect } from 'react'
import wedding from './data/wedding'
import useReveal from './hooks/useReveal'
import Hero from './components/Hero'
import Blessings from './components/Blessings'
import Countdown from './components/Countdown'
import Couple from './components/Couple'
import Muhurtham from './components/Muhurtham'
import Venue from './components/Venue'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  useEffect(() => {
    document.title = wedding.title
  }, [])

  return (
    <main>
      <Hero />
      <Blessings />
      <Countdown />
      <Couple />
      <Muhurtham />
      <Venue />
      <Footer />
    </main>
  )
}
