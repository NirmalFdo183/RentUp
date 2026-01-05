import React from 'react'
import Heading from '../../common/Heading'
import './Recent.css'
import RecentCard from './RecentCard'

import { list } from '../../data/Data.js'

const Recent = () => {
  return (
    <section className="recent">
      <div className="container">
        <Heading
          title="Recent Property Listed"
          subtitle="Find the latest added homes, apartments and etc."
        />
      </div>

      <div className="recent-cards">
        {list.map((card, index) => (
          <RecentCard
            key={index}
            cover={card.cover}
            name={card.name}
            location={card.location}
            category={card.category}
            price={card.price}
            type={card.type}
          />
        ))}
      </div>
    </section>
  )
}

export default Recent
