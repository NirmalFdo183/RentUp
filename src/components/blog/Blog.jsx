import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard.jsx"
import img from "../../../public/images/about/about.jpg"
import Footer from "../common/footer/Footer.jsx"

import "../blog/blog.css"
import { list } from "../data/Data"

const Blog = () => {
  return (
    <>
      <section className='blog'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='recent-container'>
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
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Blog