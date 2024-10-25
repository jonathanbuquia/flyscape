import Destination from "./components/Destination"
import Discount from "./components/Discount"
import Discover from "./components/Discover"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Logo from "./components/Logo"
import Navigation from "./components/Navigation"
import Testimonials from "./components/Testimonials"
import Ticket from "./components/Ticket"


const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Logo />
      <Destination />
      <Ticket />
      <Discount />
      <Discover />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
