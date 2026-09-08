// console.log(React);


//Real DOM 
let h1 = document.createElement("h1");
h1.textContent ="Hello";
document.body.append(h1);


//ReactDOM, virtual DOM
let rh1 = React.createElement(
    "h1",
     null, 
    React.createElement("span", {}, "i am under h1"));

//props- argument that we can passs(attributes, properties)

let realDomElem = document.querySelector("#root"); //Select here

let rootOfReact = ReactDOM.createRoot(realDomElem); //react create it own dom

rootOfReact.render(rh1);