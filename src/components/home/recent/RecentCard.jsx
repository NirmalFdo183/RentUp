import React from 'react'

const RecentCard = ({ cover, name, location, category, price, type }) => {
  return (
    <div className="recent-card">
      <div className="image">
        <img src={cover} alt={name} />
        <span className="tag">{category}</span>
      </div>

      <div className="content">
        <h4>{name}</h4>

        <p className="locate">
          <i className="fa-solid fa-location-dot"></i>
          {location}
        </p>

        <div className="details">
          <span className="price">
            {price}
          </span>
          <span className="type">{type}</span>
        </div>
      </div>
    </div>
  )
}

export default RecentCard
