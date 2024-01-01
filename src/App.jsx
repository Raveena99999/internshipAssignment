
import { StatUpArrow } from '@chakra-ui/react'
import './App.css'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Swipperslider from './components/Swipperslider'
import Upcoming from './components/Upcoming'
import Subscribe from './components/Subscribe'
import Cardsliderpart from './components/Cardsliderpart'
import Spring from "./components/Spring"

function App() {
  

  return (
    <>
      <Navbar/>
      <Swipperslider/>
      <Upcoming/>
      <Cardsliderpart/>
      <Spring/>
      <Faq/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
