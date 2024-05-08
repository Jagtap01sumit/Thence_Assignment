import React, { useState } from "react";
import "./App.css";
import RegistrationForm from "./components/forms/RegistrationForm";
import Home from "./components/Home";
import Congratulations from "./components/CongPage";

function App() {
  const [open, setOpen] = useState(true);
  const [submit, setSubmit] = useState(false);

  return (
    <div>
      {open ? (
        <Home setOpen={setOpen} open={open} />
      ) : submit ? (
        <div>
          <Congratulations
            submit={submit}
            setSubmit={setSubmit}
            setOpen={setOpen}
            open={open}
          />
        </div>
      ) : (
        <div className="h-[636px] w-full">
          <RegistrationForm
            setOpen={setOpen}
            open={open}
            submit={submit}
            setSubmit={setSubmit}
          />
        </div>
      )}
    </div>
  );
}

export default App;
