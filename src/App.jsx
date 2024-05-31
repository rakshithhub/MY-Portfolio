import About from "./components/About.jsx"
import Banner from "./components/Banner.jsx"
import ContactUs from "./components/ContactUs.jsx"
import Experience from "./components/Experience.jsx"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import Portfolio from "./components/Portfolio.jsx"
import { SocialMedia } from "./components/SocialMedia.jsx"
import './index.css'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <SocialMedia/>
      <About/>
      <Portfolio/>
      <Experience/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
