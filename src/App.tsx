import './App.css'
import Approach from './components/Approach'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import NavBar from './components/NavBar'
import Pricing from './components/Pricing'
import Team from './components/Team'

function App() {

  return (
    <div>
      <NavBar />
      <HeroBanner />
      <Approach />
      <Team />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
