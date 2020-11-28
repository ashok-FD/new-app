import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    return (
      <div>
        <p>Props Class component</p>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default ClassProps;
