import React from "react";
import regName from "../assets/images/regname.png";
import Navbar from "./nav/Navbar";
import Main from "./fields/Main";
import QuestionSection from "./fields/QuestionSection";
import Footer from "./fields/Footer";

export default function Home({ open, setOpen }) {
  const handleButtonClick1 = () => {
    setOpen(false);
  };

  const handleButtonClick2 = () => {
    setOpen(!open);
  };
  console.log(open, "open");

  return (
    <div>
      <Navbar
        open={open}
        onClickfunction1={handleButtonClick1} // Pass handleButtonClick1 as prop
        // onClickfunction2={handleButtonClick2} // Pass handleButtonClick2 as prop
        button1={"Get Projects"}
        extraCSS="border rounded-full md:mx-4 md:my-4 m-2"
        button2={"Onboard Talent"}
        button1CSS={
          "p-4 border rounded-full hover:cursor-pointer mx-2 md:text-sm text-xs hover:cursor-pointer hover:shadow-none transition-transform duration-300 transform hover:scale-90 hover:bg-gray-100"
        }
        button2CSS={
          "p-4 md:lg-4 border rounded-full hover:cursor-pointer ml-2 bg-black mx-2 md:text-sm text-xs text-white hover:cursor-pointer hover:shadow-none transition-transform duration-300 transform hover:scale-90 hover:bg-gray-700"
        }
      />

      <Main />
      <QuestionSection />
      <Footer />
    </div>
  );
}
