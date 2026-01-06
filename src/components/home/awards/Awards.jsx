import React from 'react'

import Heading from '../../common/Heading'
import '../awards/awards.css'

import { awards } from '../../data/Data.js'

const Awards = () => {
  return (
    <section className="awards">
        <div className='heading-container'>
            <Heading title={'Our Awards'} subtitle={'Over 124,000+ Happy Users Being With Us Still They Love Our Service '}/>
            <div className="awards-cards">
                {awards.map((awards,index)=>(
                    <div className='award-card'>
                        <i className={awards.icon}></i>
                        <h2>{awards.num}</h2>
                        <h4>{awards.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Awards