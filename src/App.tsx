import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatIsKielo from './components/WhatIsKielo'
import ImageSection from './components/ImageSection'
import ReservationDetails from './components/ReservationDetails'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <Hero />
      <WhatIsKielo />
      <ImageSection image="/images/IMG_3219.jpeg" height="medium" />
      <ReservationDetails />
      <ImageSection image="/images/DSC04478.JPG" height="medium" />
      <CallToAction />
      <ImageSection image="/images/Kielo-v2-15.jpg" height="short" />
      <Contact />
    </div>
  )
}

export default App