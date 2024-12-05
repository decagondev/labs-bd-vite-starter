import Approach from '../Approach'
import HeroBanner from '../HeroBanner'
import Pricing from '../Pricing'
import Team from '../Team'

function LandingPage() {

  return (
    <div className="w-full">
      <HeroBanner />
      <Approach />
      <Team />
      <Pricing />
    </div>
  )
}

export default LandingPage