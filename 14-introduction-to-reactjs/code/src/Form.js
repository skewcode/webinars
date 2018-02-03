import React from "react";
import Display from "./Display";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    console.log("increment");
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrement() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
    console.log("decrement");
  }

  render() {
    return (
      <div>
        <form>
          <input type="button" value="Increment" onClick={this.increment} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" value="Decrement" onClick={this.decrement} />
        </form>
        <br />
        <br />
        <Display value={this.state.count} />
      </div>
    );
  }
}

export default Form;
