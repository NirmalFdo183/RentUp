import React from 'react'


const TeamCard = ({listing,cover,address,name,link}) => {
  return (
    <div className='card'>
        <span className='listing'>{listing}</span>
        <img src={cover} alt='img' />
        <span>{name}</span>
        <span>{address}</span>
        <div className='socialmedia'>
            <a href={link[0]} target='_blank'><i className='fa-brands fa-facebook-f'></i></a>
            <a href={link[1]} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
            <a href={link[2]} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href={link[3]} target='_blank'><i className='fa-brands fa-instagram'></i></a>
        </div>
    </div>
  )
}

export default TeamCard