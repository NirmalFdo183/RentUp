import React from "react";
import Header from "../common/header/Header";
import { Routes, Route } from "react-router-dom";

import Home from "../../components/home/Home.jsx";
import About from "../../components/about/About.jsx";
import Services from "../services/Services.jsx";
import Blog from "../blog/Blog.jsx";
import Pricing from "../pricing/Pricing.jsx";
import Contact from "../contact/Contact.jsx";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
};

export default Page;
