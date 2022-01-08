import React from "react";
import { Feature, Footer, Hero } from "./containers";

import "./App.css";
import Gallery from "./containers/gallery/Gallery";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Feature />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
