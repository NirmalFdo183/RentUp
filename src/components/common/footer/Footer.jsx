import React from "react"
import { Link } from "react-router-dom"

import Heading from "../Heading.jsx"
import { nav } from "../../data/Data.js"

import "../footer/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div className="footer-contact-content">
          <Heading title="Do you have questions?"subtitle="We'll help you grow your career and achieve your goals."/>
          <button className="footer-btn">Contact us today</button>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-subscription">
            <img src="/images/logo.png" alt="Logo" />
            <Heading title="Do you need help with anything?" subtitle="Receive updates, hot deals, and discounts straight to your inbox every month."/>
            <div className="footer-input-group">
              <input
                type="email"
                placeholder="Enter your email address"
              />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="footer-menu">
            <div>
              <p>LAYOUTS</p>
              <ul>
                {nav.map((list, index) => (
                  <li key={index}>
                    <Link to={list.path}>{list.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p>ALL SECTIONS</p>
              <ul>
                <li>Headers</li>
                <li>Features</li>
                <li>Testimonials</li>
                <li>Videos</li>
                <li>Footers</li>
              </ul>
            </div>

            <div>
              <p>COMPANY</p>
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Pricing</li>
                <li>Careers</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
