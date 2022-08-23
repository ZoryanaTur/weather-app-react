import Weather from "./Weather";
import React from "react";

import "./Styles.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather Search App</h1>
          <Weather />
        </header>
        <button btn btn-primary>
          hello
        </button>
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
