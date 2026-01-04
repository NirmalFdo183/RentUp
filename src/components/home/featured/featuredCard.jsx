import React from 'react'

const FeaturedCard = ({logo,propertyType,count}) => {
  return (
    <>
        <div className='FeatureCard'>
            <img src={logo} alt={'logo'} />
            <h4>{propertyType}</h4>
            <h5>{count}</h5>
        </div>
    </>
  )
}

export default FeaturedCard