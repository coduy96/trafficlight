import React, { Component } from "react";
import "./App.css";
import TrafficLight from "./components/TrafficLight";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  
  constructor() {
    super();
    this.state = { curentColor: RED };
    setInterval(
      () =>
        this.setState({
          curentColor: this.getNextColor(this.state.curentColor)
        }),
      1000
    );
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    return (
      <div className="App">
        <TrafficLight curentColor = {this.state.curentColor}/>
      </div>
    );
  }
}

export default App;
