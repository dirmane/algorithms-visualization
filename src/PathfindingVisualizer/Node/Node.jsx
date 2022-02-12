import React, { Component } from "react";

import "./Node.css";

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isFinish, isStart } = this.props;
    const reactClass = isFinish ? "node-finish" : isStart ? "node-statrt" : "";

    return <div className={`node ${reactClass}`}></div>;
  }
}
export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};
