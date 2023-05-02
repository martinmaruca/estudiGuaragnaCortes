import { BrowserRouter, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import InfoSection from "./components/InfoSection"
import Laboral from './components/Laboral';
import Transito from './components/Transito';
import Service from "./components/Service"
import ActionCall from "./components/ActionCall"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Button from "./components/ButtonUp/Button"
import ButtonWhatsapp from "./components/ButtonWhatsapp/ButtonWhatsapp"
import { Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function App() {

  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route 
        index element={<>
        <Button />
        <ButtonWhatsapp />
        <Header />
        <AboutUs />
        <InfoSection />
        <Service />
        <ActionCall />
        <Testimonials />
        <Contact />
        </>}
        />
        <Route path="/transito" element={<Transito />} />
        <Route path="/laboral" element={<Laboral />} />
      </Routes>  
        <Footer />
    </BrowserRouter>
  )
}

export default App
