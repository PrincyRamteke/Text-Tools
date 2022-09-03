import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About.js";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#13466e";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextTools - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextTools - LightMode";
    }
  };

  return (
    <>
      {/* <Navbar title="TextTools" about="About Us" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar
          title="TextTools"
          mode={mode}
          toggleMode={toggleMode}
          about="About Us"
        />
        <Alert alert={alert} />
        <div
          className="container my-3"
          style={{ padding: "0px 100px 0px 100px" }}
        >
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextTools - Convert to Uppercase, lowercase, remove extra spaces"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
