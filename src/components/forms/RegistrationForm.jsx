import React, { useState } from "react";
import InputField from "../fields/InputField";
import regName from "../../assets/images/regname.png";
import Navbar from "../nav/Navbar";
import { MdError } from "react-icons/md";
import XImage from "../../assets/images/x.png";

export default function RegistrationForm({ setOpen, open, submit, setSubmit }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleButtonClick1 = () => {
    setOpen(!open);
  };

  const handleButtonClick2 = () => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setNameError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError("Enter a valid email address");
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
    }

    if (!name) {
      setNameError("Username is required");
    }

    if (email && name && emailRegex.test(email)) {
      setSubmit(true);
    }
  };

  return (
    <>
      <Navbar
        button2={"X"}
        button2CSS={
          "border border-gray-300 shadow-md rounded-full p-2 hover:cursor-pointer hover:shadow-none transition-transform duration-300 transform hover:scale-90 hover:bg-gray-100"
        }
        img={XImage}
        onClickfunction1={handleButtonClick1}
        onClickfunction2={handleButtonClick2}
      />

      <section className="flex justify-center items-center  h-full">
        <div className="lg:p-6 m-4 h-full  flex items-center justify-center flex-col w-[500px]">
          <div className="wrap font-manrope font-semibold lg:text-5xl text-2xl leading-11 tracking-wider text-center lg:my-5 sm:my-3 flex items-center justify-center flex-col">
            <img className="w-[231px] h-[28px] mb-2" src={regName}></img>
            Start your success Journey here!
          </div>
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className="p-5">
              <div className="mb-6">
                <InputField
                  inputCSS="bg-gray-100 text-gray-100 text-sm rounded-full block p-4 m-2 w-[300px] text-black dark:text-black"
                  Text="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <InputField
                  inputCSS="bg-gray-100 text-gray-100 text-sm rounded-full block p-4 m-2 w-[300px] text-black dark:text-black"
                  Text="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {emailError || nameError ? (
                <p className="text-red-500 text-sm mt-2 px-5 flex">
                  <div className="flex items-center justify-center mx-1">
                    <MdError />
                    <span className="mx-1">{emailError || nameError}</span>
                  </div>
                </p>
              ) : null}

              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-gray-300 hover:bg-gray-200 hover:text-black text-white text-sm rounded-full block p-4 m-2 w-[300px] transition-transform duration-300 transform hover:scale-90"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
