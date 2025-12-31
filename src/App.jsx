import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header.jsx";
import Page from "./components/pages/Page.jsx";
import '../src/App.css'

function App() {
  return (
    <>
      <Header />
      <Page />
    </>
  );
}

export default App;
