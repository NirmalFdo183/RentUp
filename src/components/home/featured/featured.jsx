import React from 'react'

import Heading from '../../common/Heading'
import './featured.css'
import FeaturedCard from './featuredCard.jsx'

import { featured } from '../../data/Data.js'

const Featured = () => {
  return (
    <>
        <section className="featured">
            <div className="container">
                <Heading className = "heading" title={'Featured Property Types'} subtitle={'find all types of properties'}/>
            </div>
            <div className='featured-cards'>
                {featured.map((card,i) => (
                    <FeaturedCard key={i} logo = {card.cover} propertyType = {card.name} count = {card.total}/>
                ))}
            </div>
        </section>
    </>
  )
}

export default Featured