import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import Footer from "./components/footer";
import ArticleSection from "./components/articles";

function App() {
  return (
    <div className="bg-[#F9F8F6]">
      <Header />
      <div className="md:flex md:flex-col md:gap-20 md:pt-[60px] md:pb-[60px] md:pl-[120px] md:pr-[120px]">
        <HeroSection />
        <ArticleSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
