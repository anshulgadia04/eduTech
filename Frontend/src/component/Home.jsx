import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Hero2 from './Hero2.jsx'
import Hero3 from './Hero3.jsx'
import Review from './Review.jsx'
import Footer from './Footer.jsx'


function Home({userid}) {

  return (
    <div>
        <Hero/>
        <Hero2 userid = {userid}/>
        <Hero3/>
        <Review/>

    </div>
  )
}

export default Home
