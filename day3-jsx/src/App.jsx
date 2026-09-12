import React from "react"; 

let App = () => {
  let ui = React.createElement("div",{},[
    React.createElement("h1",{},"hello"),
      React.createElement("h2",{},"Go hi"),
      React.createElement("h3",{},"Go Back")
    ]);
      return ui;
};

export default App;