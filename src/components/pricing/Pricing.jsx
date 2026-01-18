import React from "react";
import Back from "../common/Back";
import img from "../../../public/images/pricing/pricing.jpg";
import "../pricing/pricing.css";

import Footer from "../common/footer/Footer";

const Pricing = () => {
  const priceList = [
    {
      plan: "Basic",
      price: "29",
      pname: "Personal",
      desc: "Perfect for individuals looking to list a single property with essential tools.",
      list: [
        { icon: <i className='fa-solid fa-check'></i>, text: "99% Cloud Uptime" },
        { icon: <i className='fa-solid fa-check'></i>, text: "3 Property Listings" },
        { icon: <i className='fa-solid fa-check'></i>, text: "Basic Customer Support" },
        { icon: <i className='fa-solid fa-xmark'></i>, text: "Personal Help Support", change: "color" },
        { icon: <i className='fa-solid fa-xmark'></i>, text: "Enterprise CRM Integration", change: "color" },
      ],
    },
    {
      best: "Best Value",
      plan: "Standard",
      price: "49",
      pname: "Professional",
      desc: "Ideal for small agencies needing more visibility and marketing power.",
      list: [
        { icon: <i className='fa-solid fa-check'></i>, text: "99% Cloud Uptime" },
        { icon: <i className='fa-solid fa-check'></i>, text: "10 Property Listings" },
        { icon: <i className='fa-solid fa-check'></i>, text: "Priority Email Support" },
        { icon: <i className='fa-solid fa-check'></i>, text: "Personal Help Support" },
        { icon: <i className='fa-solid fa-xmark'></i>, text: "Enterprise CRM Integration", change: "color" },
      ],
    },
    {
      plan: "Platinum",
      price: "79",
      pname: "Enterprise",
      desc: "Comprehensive solution for large-scale agencies and developers.",
      list: [
        { icon: <i className='fa-solid fa-check'></i>, text: "99% Cloud Uptime" },
        { icon: <i className='fa-solid fa-check'></i>, text: "Unlimited Property Listings" },
        { icon: <i className='fa-solid fa-check'></i>, text: "24/7 Dedicated Support" },
        { icon: <i className='fa-solid fa-check'></i>, text: "Personal Help Support" },
        { icon: <i className='fa-solid fa-check'></i>, text: "Enterprise CRM Integration" },
      ],
    },
  ];

  return (
    <>
      <section className='pricing'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        
        <div className='price-container'>
          <div className='price-content'>
            {priceList.map((item, index) => (
              <div className='box' key={index}>
                {item.best && <span className='best-badge'>{item.best}</span>}
                <h3>{item.plan}</h3>
                <h1>
                  <span>$</span>
                  {item.price}
                </h1>
                <p>{item.pname}</p>
                <p className='desc'>{item.desc}</p>

                <ul>
                  {item.list.map((val, idx) => (
                    <li key={idx}>
                      <label style={{ color: val.change === "color" ? "#dc3545" : "#27ae60" }}>
                        {val.icon}
                      </label>
                      <p>{val.text}</p>
                    </li>
                  ))}
                </ul>
                <button className={item.best ? "btn-primary" : "btn-outline"}>
                  Start {item.plan}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Pricing;