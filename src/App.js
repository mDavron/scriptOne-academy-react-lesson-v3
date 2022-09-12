import React, { Component } from "react";
import light from "./assets/images/bulb-1.png";
import dark from "./assets/images/bulb-2.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    press: true,
  };
  render() {
    const buttonText = this.state.press ? "ON" : "OFF";
    return (
      <div className="app flex-column">
        <div className="light-bulb">
          <img src={this.state.press ? light : dark} alt="bulb" />
        </div>
        <button onClick={() => this.setState({ press: !this.state.press })}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
