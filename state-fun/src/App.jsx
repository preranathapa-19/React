// import React from 'react'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Head from './components/Head'
// import Navbar from './Navbar'

// const App = () => {
//   return (
//     <div>
//       <h1>This is the app</h1>
//       <Contact />
//       <Footer />
//       <Head />
//       <Navbar />

//     </div>
//   )
// }

// export default App
import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

   let [flag, setFlag] = useState(true);
  

  console.log(flag);
  console.log(count);

  return (
    <div>
      <h1>Count is -{count}</h1>

      <button
        onClick={() => {
          setCount(count + 5);
        }}
      >
        Increment
      </button>

      <button
      onClick={() => {
        setFlag(!flag);
      }}
      >
        Change boolean
        </button>
    </div>
  );
}; 

export default App;

