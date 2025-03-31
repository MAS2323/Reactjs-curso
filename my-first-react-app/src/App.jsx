// el sortcut que usamos para crear un componente basico de reactjs es rface

import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setsearchTerm] = useState("");
  // los hooks o funciones de estado (useState) tambien pueden pasarce como props
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero-img.png" alt="Hero Background" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>
          </header>
          <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        </div>
      </div>
    </main>
  );
};

export default App;
