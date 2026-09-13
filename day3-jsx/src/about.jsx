// import {width, Children } from "react";

let About = (width, Children) => {
    console.log(Children);

    return 
   <nav>
     <h1>hey export from About</h1>
     {Children}
   </nav>
    ;
};

export default About;