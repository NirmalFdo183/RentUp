import React from "react";
import Header from "../common/header/Header";
import { Routes, Route } from "react-router-dom";

import Home from "../../components/home/Home.jsx";
import About from "../../components/about/About.jsx";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<services/>}/>
        <Route path="/blog" element={<blog/>}/>
        <Route path="/pricing" element={<pricing/>}/>
        <Route path="/contact" element={<contact/>}/>
      </Routes>
    </>
  );
};

export default Page;
