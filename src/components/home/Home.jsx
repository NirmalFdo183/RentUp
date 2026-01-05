import React from 'react'

import Hero from '../home/Hero/Hero.jsx'
import Featured from './featured/featured.jsx'
import Recent from './recent/Recent.jsx'

const Home = () => {
  return (
    <>
        <Hero />
        <Featured />
        <Recent />
    </>
  )
}

export default Home