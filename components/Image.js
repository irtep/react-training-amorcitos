import React, { Component } from "react";
import { callDice } from "../functions/helpFunctions.js";

// randomize one of the queen images:
const queens = [
  "https://irtep.net/queen1.jpg",
  "https://irtep.net/queen2.jpg",
  "https://irtep.net/queen3.jpg"
];

const imageRandomized = queens[callDice(3) - 1];

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="smallFoto" src={imageRandomized} alt="queen1" />
      </div>
    );
  }
}

export default Image;
