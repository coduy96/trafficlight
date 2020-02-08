import React, { Component } from "react";
import "./TrafficLight.css";
import classNames from "classnames";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  render() {
    const { curentColor } = this.props;
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
