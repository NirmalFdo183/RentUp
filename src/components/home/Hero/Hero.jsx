import React from 'react'
import '../Hero/Hero.css'
import Heading from '../../common/Heading.jsx'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <Heading title={'Serach your next Home'} subtitle={'Find new & featured homes located in your local citites'}/>
        <div className="container-hero">
          <form action="" className='flex-hero'>
            <div className="box-hero">
              <span>City/Street</span>
              <input type="text" name="city" id="city" placeholder='City/Street'/>
            </div>

            <div className="box-hero">
              <span>Property Type</span>
              <select name="propType" id="propType">
                <option value="" selected disabled>Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="room">Room</option>
              </select>
            </div>

            <div className="box-hero">
              <span>Price Range</span>
              <input type="number" name="price" id="price" min = '0' max = '1000000000'placeholder='Price Range'/>
            </div>

            <div className="box-hero">
              <span>Advanced Filter</span>
              <button type="button" className='button-hero'>
                <i className='fa fa-search'></i>
              </button>
            </div>
            
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero