import React from "react"

import Heading from "../../common/Heading"
import './location.css'

import { location } from "../../data/Data.js"


const Location = () => {
  return (
    <>
      <section className='location'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='Find properties across prime cities with villas, apartments, and offices' />

          <div className='location-cards'>
            {location.map((item, index) => (
              <div className='location-card' key={index}>
                <img src={item.cover} alt='' />
                <div className='info'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location