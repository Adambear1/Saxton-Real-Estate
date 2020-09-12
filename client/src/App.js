import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SocialMedia from "./pages/SocialMedia";
import Talents from "./pages/Talents";
import Location from "./pages/Location";

function App() {
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

export default App;
