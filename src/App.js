import Weather from "./Weather";
import React from "react";
import "./Styles.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search App</h1>
        <Weather />
      </header>
      <p className="open-source">
        <a
          href="https://github.com/ZoryanaTur/weather-app-react"
          title="Check open-source code"
        >
          Open-source code
        </a>{" "}
        by Zoryana Tur
      </p>
    </div>
  );
}

export default App;
