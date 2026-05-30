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
 
        <section id="services">
          <Hero />
          <Service />
          <ServiceShowcase/>
        </section>
        <ProjectsSection/>
        <section id="process">
          <ProcessSection/>
        </section>
        <TeamSection/>
        <section id="contact">
          <ConsultationSection/>
        </section>
        <Footer/>
        {/* <Portfolio /> */}
        {/* <Team /> */}
     
    </>
  )
}

export default HomePage