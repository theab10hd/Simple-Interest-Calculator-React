import React from "react";
import "./App.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import Hero from "./assets/Components/Hero/Hero";

function App() {
  return (
    <>
      <div className="container d-flex align-items-center vh-100 p-0">
        <div className="container main">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
