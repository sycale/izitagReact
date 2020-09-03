import React, { Component } from "react";
import reactDom from "react-dom";
import Header from "./Header";

let lineToPush = "";
for (let i = 0; i < 13; i += 1) {
  lineToPush += "Lorem ipsum ";
}

class App extends Component {
  constructor() {
    super();
    this.elems = [];

    for (let i = 0; i < 20; i += 1) {
      this.elems.push(lineToPush);
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="body">
          {this.elems.map((value, index) => {
            return (
              <span className="body_content-line" key={index}>
                {value}
              </span>
            );
          })}
        </div>
      </>
    );
  }
}

reactDom.render(<App />, document.getElementById("root"));
