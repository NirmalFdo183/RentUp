import React from 'react'

import Hero from '../home/Hero/Hero.jsx'
import Featured from './featured/featured.jsx'
import Recent from './recent/Recent.jsx'
import Awards from './awards/Awards.jsx'

const Home = () => {
  return (
    <>
        <Hero />
        <Featured />
        <Recent />
        <Awards />
    </>
  )
}

export default Home