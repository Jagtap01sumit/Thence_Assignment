import React, { useEffect, useState } from "react";
import cong from "../assets/images/cong.png";
import tick from "../assets/images/tick.png";
import Navbar from "./nav/Navbar";

const Congratulations = ({ submit, setSubmit, open, setOpen }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      setOpen(true);
      setSubmit(false);
    }

    return () => clearInterval(timer);
  }, [countdown, setSubmit]);
  const goBack = () => {
    setSubmit(false);
    setOpen(true);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="md:w-96 md:h-96 w-70 h-80 flex justify-center items-center p-5">
          <div className="flex flex-col items-center gap-4">
            <img className="md:w-14 md:h-14 h-10 w-10" src={tick} alt="tick" />
            <img src={cong} className="w-32 h-15 md:w-60 md:h-15" alt="cong" />
            <div className="text-center text-zinc-900 text-4xl md:text-6xl font-semibold font-Manrope">
              Congratulations
            </div>
            <div className="text-center self-stretch leading-5 text-neutral-500 text-xl font-normal font-Manrope">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </div>
          </div>
        </div>
        <div
          className="justify-center items-center flex hover:cursor-pointer transition-transform duration-300 transform hover:scale-90"
          onClick={goBack}
        >
          Redirecting you to Homepage in{" "}
          <span className="font-bold"> {countdown} Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
