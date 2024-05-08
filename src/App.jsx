import { useState } from "react";

import "./App.css";

import RegistrationForm from "./components/forms/RegistrationForm";
import Home from "./components/Home";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open ? (
        <div>
          <Home setOpen={setOpen} open={open} />
        </div>
      ) : (
        <div className="h-[636px] w-full ">
          <RegistrationForm setOpen={setOpen} open={open} />
        </div>
      )}
    </>
  );
}

export default App;
