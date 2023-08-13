import React from 'react'
import Header from  './components/header/Header'
import Elevator from './components/elevator/Elevator'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Footer from './components/footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Portfolio/>
      <Elevator/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
