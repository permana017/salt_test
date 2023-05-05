import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../section/Banner";
import About from "../../section/About";
import Values from "../../section/Values";
import Sepeciality from "../../section/Speciality";
import Footer from "../../section/Footer";

function Landing() {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <Banner />
      <About />
      <Values />
      <Sepeciality />
      <Footer />
    </div>
  );
}

export default Landing;
