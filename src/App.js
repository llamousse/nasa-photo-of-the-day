import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard.js";

import "./App.css";

function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    // console.log("first render");
    axios.get("https://api.nasa.gov/planetary/apod?api_key=U8O9IcrQdFp0LuZWNWXx8aQSPIWxxEdRjpR9cd2W")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, [])

  return (
    <div className="App">
      <h1>NASA's Astronomy Picture of the Day (APOD)</h1>

      {data ? <PhotoCard title={data.title}
        url={data.url}
        explanation={data.explanation}
        date={data.date}
        media={data.media_type}
      />
        : <div className="Load">Loading...</div>}

      {/* Checks if data is valid/true before rendering */}
      {/* {data && <PhotoCard title={data.title}
        url={data.url}
        explanation={data.explanation} />} */}

    </div>
  );
}

export default App;
