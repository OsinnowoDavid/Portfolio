import Navbar from "../Component/NavBar"
import Hero from "../Component/HeroPage"
import Service from "../Component/Service"
import { Portfolio } from "../Component/Portfolio"
import  Team  from "../Component/Team"
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Service />
        <Portfolio />
        <Team />
      </main>
    </>
  )
}

export default HomePage