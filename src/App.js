
import './App.css';
import React, { useState, useEffect } from 'react';
// import axios from "axios";
import data from "./data/quote.json"

const App = () => {
  // const [data, setData] = useState("");
  // console.log("data", data);

console.log(data);

  return (
    <div className="App">
      {data.map((item) =>(
        <div>
     <p>{item.a}</p>
     <p>{item.c}</p>
     <p>{item.q}</p>
     </div>
    ))}
    </div>
  );
}

export default App;
