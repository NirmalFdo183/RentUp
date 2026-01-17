import React from "react"
import img from "/images/services/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard.jsx"
import Footer from "../common/footer/Footer.jsx"
import '../services/services.css'

import { featured } from "../data/Data.js"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <div className='featured-cards'>
                {featured.map((card,i) => (
                    <FeaturedCard key={i} logo = {card.cover} propertyType = {card.name} count = {card.total}/>
                ))}
            </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Services