import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark"); //whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else setMode("dark");
  };

  return (
    <>
      {/* <Navbar title="TextTools" about="About Us" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextTools" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
