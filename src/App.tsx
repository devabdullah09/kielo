import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatIsKielo from './components/WhatIsKielo'
import ConceptualBridge from './components/ConceptualBridge'
import HowWeBuildTrust from './components/HowWeBuildTrust'
import ImageSection from './components/ImageSection'
import ReservationDetails from './components/ReservationDetails'
import CallToAction from './components/CallToAction'
import RefundPolicy from './components/RefundPolicy'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <Hero />
      <WhatIsKielo />
      <ConceptualBridge />
      <HowWeBuildTrust />
      <ImageSection image="/images/DSC04470.JPG" height="medium" />
      <ReservationDetails />
      <ImageSection image="/images/IMG_9761.jpeg" height="medium" />
      <CallToAction />
      <RefundPolicy />
      <Philosophy />
      <ImageSection image="/images/IMG_9761.jpeg" height="tall" cropPosition="bottom" />
      <Contact />
    </div>
  )
}

export default App