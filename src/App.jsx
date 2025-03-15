import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
