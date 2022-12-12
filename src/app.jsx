import React from 'react'
import About from './components/about/about'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Experience from './components/services/services'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
     <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Services/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     <Footer/>

    </>
  )
}

export default App;