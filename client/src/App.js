import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SocialMedia from "./pages/SocialMedia";
import Talents from "./pages/Talents";

function App() {
  return (
    <div>
      <Navbar />
      <Talents />
      <About />
      <SocialMedia />
    </div>
  );
}

export default App;
