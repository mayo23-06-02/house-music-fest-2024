import React from 'react'
import Landing from './Landing'
import About from './About'
import LineUp from './LineUp'
import Tickets from './Tickets'
import Contact from './Contact'

function HomeMain() {
  return (
    <div className= {' w-full h-full xl:max-w-[1920px] bg-primary'}>
        <Landing />
        <About />
        <LineUp />
        <Tickets />
        <Contact />
    </div>
  )
}

export default HomeMain