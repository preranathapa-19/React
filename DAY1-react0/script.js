// console.log(React);


//Real DOM 
// let h1 = document.createElement("h1");
// h1.textContent ="Hello";
// document.body.append(h1);

//ReactDOM, virtual DOM
// let rh1 = React.createElement(
//     "h1",
//      null, 
//     React.createElement("span", {}, "i am under h1"));

//props- argument that we can passs(attributes, properties)

// let realDomElem = document.querySelector("#root"); //Select here
// let rootOfReact = ReactDOM.createRoot(realDomElem); //react create it own dom

// rootOfReact.render(rh1);

import { a } from "./main.js"

console.log(a);

import {sum} from "./main.js"

let res = sum(21,34);
console.log(res)


let RDomElement = document.querySelector("#root");

let div = React.createElement("div", //if u wnat to make more elm kept this all in array 
    {},
     React.createElement("h1", 
        {},
         React.createElement("span",
             {}, 
             "i am span")));

ReactDOM.createRoot(RDomElement).render(div);