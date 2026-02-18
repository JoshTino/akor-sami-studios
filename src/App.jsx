import React from "react";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import About from "/components/About";
import Portfolio from "/components/Portfolio";
import Services from "/components/Services";
import Testimonials from "/components/Testimonials";
import Contact from "/components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white font-light scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}