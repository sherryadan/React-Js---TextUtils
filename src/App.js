import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [gmode, setGmode] = useState("light");

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
      document.body.style.backgroundColor = "#131314";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Home";
    }
  };
  const toggleGmode = () => {
    if (gmode === "light") {
      setGmode("green");
      document.body.style.backgroundColor = "#5ab86d";
      showAlert("Green mode has been enabled", "success");
      document.title = "TextUtils - Green Mode";
    } else {
      setGmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Home";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          gmode={gmode}
          toggleGmode={toggleGmode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  buttonText="Convert to Uppercase"
                  button2Text="Convert to Lowercase"
                  button3Text="Clear All"
                  button4Text="Copy All"
                  mode={mode}
                  toggleMode={toggleMode}
                  gmode={gmode}
                  toggleGmode={toggleGmode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
