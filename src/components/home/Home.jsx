import React from 'react'

import Hero from '../home/Hero/Hero.jsx'
import Featured from './featured/featured.jsx'
import Recent from './recent/Recent.jsx'
import Awards from './awards/Awards.jsx'
import Location from './location/Location.jsx'

const Home = () => {
  return (
    <>
        <Hero />
        <Featured />
        <Recent />
        <Awards />
        <Location />
    </>
  )
}

export default Home