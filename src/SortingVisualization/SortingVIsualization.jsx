import React, { Component } from "react";
import "./SortingVisualization.css";
import { mergeSort, getBubbleSort } from "../algorithms/sorting";

export default class SortingVisualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      value: 150,
    };
  }
  componentDidMount() {
    this.reloadArray();
  }

  reloadArray() {
    const array = [];
    const arrayBar = document.getElementsByClassName("array-bar");
    for (let i = 0; i < this.state.value; i++) {
      array.push(randomGeneratedInt(5, 808));
    }
    this.setState({ array });
  }

  bubble() {
    let speed = 0.8;
    const [arr, animations] = getBubbleSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange) {
        const color = i % 4 === 0 ? "red" : "grey";
        const [barOneIn, barTwoIn] = animations[i];
        const barOneStyle = arrayBars[barOneIn].style;
        const barTwoStyle = arrayBars[barTwoIn].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * speed);
      } else {
        const [barIn, newHeight] = animations[i];
        if (barIn === -1) {
          continue;
        }
        const barStyle = arrayBars[barIn].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * speed);
      }
    }
  }

  merge() {
    const sortedArray = mergeSort(this.state.array);
    console.log(sortedArray);
    this.setState({ array: sortedArray });
  }

  handleOnchange = (e) => {
    this.setState({ value: e.target.value });
    this.reloadArray();
  };

  render() {
    const { array } = this.state;
    return (
      <div className="sorting">
        <button onClick={() => this.reloadArray()}>Reload array</button>{" "}
        <button onClick={() => this.bubble()}>Bubble Sort</button>
        <input
          type="range"
          min={6}
          max={300}
          value={this.state.value}
          className="slider"
          onChange={this.handleOnchange}
        />
        {this.state.value}
        <hr />
        {array.map((element, elementId) => (
          <div
            className="array-bar"
            style={{ height: `${element}px` }}
            key={elementId}
          ></div>
        ))}
      </div>
    );
  }
}

function randomGeneratedInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
