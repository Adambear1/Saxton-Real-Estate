import React from "react";
import Navbar from "../../components/Navbar";
import Talents from "../Talents";
import About from "../About";
import Location from "../Location";
import SocialMedia from "../SocialMedia";

function Home() {
  return (
    <div>
      <Navbar />
      <Talents />
      <About />
      <Location />
      <SocialMedia />
    </div>
  );
}

export default Home;
