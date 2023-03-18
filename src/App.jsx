import Navbar from "./assets/Components/Navbar"
import Hero from "./assets/Components/HeroSection.jsx/Hero"
import TechCo from "./assets/Components/TechCo"
import TrustSec from "./assets/Components/HeroSection.jsx/TrustSec"
import ServicesContainer from "./assets/Components/Services/ServicesContainer"
import ProcedureContainer from "./assets/Components/Procedures/ProcedureContainer"
import FaqContainer from "./assets/Components/FAQ/FaqContainer"
import TestimonialContainer from "./assets/Components/Testimonials/TestimonialContainer"
import Subscribe from "./assets/Components/Testimonials/Subscribe"
import Footer from "./assets/Components/Footer"
function App() {

  return (
      <>
        <Navbar />
        <Hero />
        <TechCo />
        <TrustSec />
        <ServicesContainer />
        <ProcedureContainer />
        <FaqContainer />
        <TestimonialContainer />
        <Subscribe />
        <Footer />
      </>
  )
}

export default App
