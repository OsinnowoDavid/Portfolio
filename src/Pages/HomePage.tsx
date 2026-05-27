import Navbar from "../Component/NavBar"
import Hero from "../Component/HeroPage"
import Service from "../Component/Service"

import ServiceShowcase from "../Component/ServiceSection"
import ProjectsSection from "../Component/ProjectCard"
import ProcessSection from "../Component/ProcessSection"
import TeamSection from "../Component/TeamSection"
import ConsultationSection from "../Component/ConsultationSection"
import Footer from "../Component/Footer"
function HomePage() {
  return (
    <>
      <Navbar />
 
        <Hero />
        <Service />
        <ServiceShowcase/>
        <ProjectsSection/>
        <ProcessSection/>
        <TeamSection/>
        <ConsultationSection/>
        <Footer/>
        {/* <Portfolio /> */}
        {/* <Team /> */}
     
    </>
  )
}

export default HomePage