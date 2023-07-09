import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

import validator from "validator";

function App() {
  const [url, setUrl] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleChange(event) {
    event.preventDefault();
    // console.log(event.target.value);
    setUrl(event.target.value);
    setShowQr(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validator.isURL(url)) {
      //   setErrorMsg("valid");
      setShowQr(true);
    } else {
      setShowError(true);
      setShowQr(false);
    }
  }

  function toggleError() {
    setShowError((prev) => !prev);
  }

  setTimeout(() => {
    setShowError(false);
  }, 5000);

  return (
    <div className="App w-full h-screen bg-slate-300 flex flex-col items-center justify-center gradient-bg overflow-hidden font-inter">
      <Card
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        url={url}
        showQr={showQr}
        showError={showError}
        toggleError={toggleError}
      />
    </div>
  );
}

export default App;
