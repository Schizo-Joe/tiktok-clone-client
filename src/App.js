import React from "react";
import "./App.css";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videoContainer">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
