import React from "react";
import { Feature, Footer, Hero } from "./containers";

import Button from "./components/button/Button";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Feature />
      <Footer />
    </div>
  );
};

export default App;
