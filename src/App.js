import React, { useState } from "react";
import './App.css';
import { event } from "jquery";

export default function App() {
  const [horizontal, setHorizontal] = useState(5);
  const [vertical, setVertical] = useState(5);
  const [blur, setBlur] = useState(5);
  const [color, setColor] = useState("black");
  const [outline, setOutline] = useState(false);

  const handleHorizontal = (event) => {
    setHorizontal(event.target.value);
  };
  const handleVertical = (event) => {
    setVertical(event.target.value);
  };
  const handleBlur = (event) => {
    setBlur(event.target.value);
  };
  const handleColor = (event) => {
    setColor(event.target.value);
  };
  const handleOutline = (event) => {
    setOutline(!outline);
  }

  return (
    <div className="App">
      <div className="controler">
        <label className="form-label">Horizontal Range</label>
        <input
          type="range"
          className="form-range"
          min="-200"
          max="200"
          value={horizontal}
          onChange={handleHorizontal}
        />

        <label className="form-label">Vertical Range</label>
        <input
          type="range"
          className="form-range"
          min="-200"
          max="200"
          value={vertical}
          onChange={handleVertical}
        />

        <label className="form-label">Blur Range</label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="200"
          value={blur}
          onChange={handleBlur}
        />


        <label className="form-label">Color </label>
        <input
          type="color"
          value={color}
          onChange={handleColor}
        />

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" checked={outline} onChange={handleOutline}/>
            <label className="form-check-label">Outline</label>
        </div>
      </div>

      <div className="output">
        <div className="box" style={{boxShadow : `${outline?"inset":""} ${horizontal}px ${vertical}px ${blur}px ${color}`}}>
          <code>box-shadow : {`${horizontal}px ${vertical}px ${blur}px ${color};`}</code>
        </div>
      </div>
    </div>
  );
}
