import React from 'react'

import Hero from '../home/Hero/Hero.jsx'
import Featured from './featured/featured.jsx'
import Recent from './recent/Recent.jsx'
import Awards from './awards/Awards.jsx'
import Location from './location/Location.jsx'
import Team from './team/Team.jsx'
import Footer from '../common/footer/Footer.jsx'

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Footer />
    </>
  )
}

export default Home