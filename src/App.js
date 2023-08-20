import "./styles.css";
import React from "react";

export default function App() {
  var [scaled, setScaled] = React.useState(true);
  function HandleClick() {
    var top = document.getElementById("top");
    var button = document.getElementById("button");
    if (scaled) {
      top.style.setProperty("transform", "scale(0)");
      button.style.setProperty("transform", "rotate(90deg)");
      setScaled(!scaled);
    } else {
      top.style.setProperty("transform", "scale(1)");
      button.style.setProperty("transform", "rotate(0deg)");
      setScaled(!scaled);
    }
  }

  return (
    <div className="App">
      <div className="base">
        <div className="top" id="top"></div>
        <div className="button" id="button" onClick={HandleClick}>
          ~
        </div>
      </div>
    </div>
  );
}
