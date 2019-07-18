import React, { useState, useEffect } from "react";
import axios from "axios";

import PhotoCard from "./components/PhotoCard.js";

import "./App.css";

function App() {

  const [data, setData] = useState({});
  useEffect(() => {
    console.log("first render");
    axios.get("https://api.nasa.gov/planetary/apod?api_key=U8O9IcrQdFp0LuZWNWXx8aQSPIWxxEdRjpR9cd2W&date=2019-07-15")
    .then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }, [])

  return (
    <div className="App">
      <PhotoCard title={data.title} 
        url={data.url} 
        explanation={data.explanation} />
    </div>
  );
}

export default App;
