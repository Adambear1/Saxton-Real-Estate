import React from "react";
import Navbar from "./components/Navbar";
import SocialMediaIcons from "./components/SocialMediaIcons";
import About from "./pages/About";
import Location from "./pages/Location";
import Talents from "./pages/Talents";

function App() {
  return (
    <>
      <Navbar />
      <div className="uk-container">
        <Talents />
        <About />

        <Location />
        <SocialMediaIcons />
      </div>
    </>
  );
}

export default App;
