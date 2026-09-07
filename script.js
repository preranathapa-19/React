// console.log(React);

let h1 = document.createElement("h1");
h1.textContent ="Hello";
document.body.append(h1);

let rh1 = React.createElement("h1", null, "hello i m form react");

//props- argument that we can passs(attributes, properties)

console.log("real dom->", h1);
console.log("real dom->", rh1);