import "./App.css";
import Render from "./components/Render";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const dataHandler = (value) => {
    setData((preValue) => {
      return [value, ...preValue];
    });
  };
  return (
    <div>
      <Render onData={dataHandler} onListItems={data} />
    </div>
  );
}

export default App;
