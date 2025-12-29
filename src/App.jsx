import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header.jsx";
import Page from "./components/pages/Page.jsx";
import About from "./components/pages/About.jsx";
import '../src/App.css'

function App() {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
