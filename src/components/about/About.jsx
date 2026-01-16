import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../../../public/images/about/about.jpg";
import immio from "../../../public/images/immio.jpg";
import Footer from "../common/footer/Footer";
import "./about.css";

const About = () => {
  return (
    <>
    <section className="about">
      <Back name="About Us" title="About Us - Who We Are?" cover={img} />

      <div className="about-container">
        
        <div className="left row">
          <Heading
            title="Our Agency Story"
            subtitle="Check out our company story and work process"
          />
          <p>
            At Rent-up, we believe finding your dream home should be
            an exciting and stress-free experience. Since our founding, we have
            helped hundreds of clients discover properties that perfectly match
            their lifestyle and budget.
          </p>
          <p>
            Our team of dedicated real estate professionals is committed to
            providing personalized service, expert advice, and transparent
            guidance every step of the way. From property search to closing,
            we ensure a smooth and efficient process for buyers, sellers, and
            investors alike.
          </p>
          <p>
            With a deep understanding of the local market and a passion for
            excellence, we strive to build lasting relationships with our
            clients, helping them make informed decisions and achieve their
            property goals.
          </p>
          <button className="btn2">More About Us</button>
        </div>

        
        <div className="right row">
          <img src={immio} alt="Our Agency" />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;
