import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RealEstate from "./pages/RealEstate";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="real-estate" component={RealEstate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
