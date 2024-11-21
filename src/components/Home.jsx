import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Tech from './Tech'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import CodingProfile from './CodingProfile'
import Education from './Education'

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Tech />
        {/* <Experience /> */}
        <CodingProfile />
        <Projects />
        <Education />
        <Contact />
    </>
  )
}

export default Home