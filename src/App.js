import Weather from "./Weather";
import React from "react";

import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaulCity="New York" />
        <p className="open-source">
          {" "}
          This App was coded by Zoryana Tur and {""}{" "}
          <a
            href="https://github.com/ZoryanaTur/weather-app-react"
            title="Check open-source code"
          >
            open-sourced on GitHub
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
