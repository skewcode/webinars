import React from "react";

class Display extends React.Component {
  render() {
    return <h1>Count: {this.props.value}</h1>;
  }
}

export default Display;
