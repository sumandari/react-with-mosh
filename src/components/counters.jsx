import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 2 },
      { id: 4, value: 4 },
    ],
  };

  handleDelete = () => {
    console.log("Event handler called");
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
            selected
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
