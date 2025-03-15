import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import Footer from "./components/footer";
import ArticleSection from "./components/articles";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
