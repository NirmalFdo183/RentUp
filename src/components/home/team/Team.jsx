import React from 'react'

import '../team/team.css'

import Heading from '../../common/Heading.jsx'
import TeamCard from '../team/TeamCard.jsx'

import { team } from '../../data/Data.js'


const Team = () => {
  return (
   <section className="team">
        <div className="heading-container">
            <Heading title={'Our agents'} subtitle={'Connecting you with the best properties in your city'}/>
        </div>
        <div className="team-cards">
            { team.map(({list,cover,address,name,link},index)=>(
                <TeamCard key = {index} listing={list} cover={cover} address={address} name={name} link={link}/>
            ))}
        </div>
   </section>
  )
}

export default Team