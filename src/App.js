import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

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
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const toggleGmode = () => {
    if (gmode === "light") {
      setGmode("green");
      document.body.style.backgroundColor = "#5ab86d";
      showAlert("Green mode has been enabled", "success");
    } else {
      setGmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        gmode={gmode}
        toggleGmode={toggleGmode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          buttonText="Convert to Uppercase"
          button2Text="Convert to Lowercase"
          button3Text="Clear All"
          button4Text="Copy All"
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
          gmode={gmode}
          toggleGmode={toggleGmode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
