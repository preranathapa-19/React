import React from "react";

let root =document.querySelector("#root");

const h1 = React.createElement("h1", {}, "hi i am from the react");

console.log(h1);

ReactDOM.createRoot(root).render(h1);