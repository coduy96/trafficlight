import React, { Component } from "react";
import "./TrafficLight.css";
import classNames from "classnames";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
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
    const { curentColor } = this.state;
    return (
      <div className="TrafficLight">
        <div
          className={classNames("buld", "red", {
            active: curentColor === RED
          })}
        />
        <div
          className={classNames("buld", "orange", {
            active: curentColor === ORANGE
          })}
        />
        <div
          className={classNames("buld", "green", {
            active: curentColor === GREEN
          })}
        />
      </div>
    );
  }
}

export default TrafficLight;
