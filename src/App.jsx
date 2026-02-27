import React from "react";
import {useState, useEffect} from "react";
import Form from "/components/Form";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import About from "/components/About";
import Portfolio from "/components/Portfolio";
import Services from "/components/Services";
import Testimonials from "/components/Testimonials";
import Contact from "/components/Contact";


export default function App() {
  
  const [brandName, setBrandName] = useState("");

  // useEffect( () => {
  //     setBrandName(brandName);
  // }, [brandName]);

  return (
    <div className="bg-black text-white font-light scroll-smooth">
      <Form brandName={brandName} setBrandName={setBrandName}/>
      <Navbar brandname={brandName} />
      <Hero brandname={brandName} />
      <About brandname={brandName} />
      <Portfolio brandname={brandName} />
      <Services brandname={brandName} />
      <Testimonials brandname={brandName} />
      <Contact brandname={brandName} />
    </div>
  );
}