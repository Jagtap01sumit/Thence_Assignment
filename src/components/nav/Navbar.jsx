import React from "react";
import Image from "../../assets/images/logo.png";

export default function Navbar({
  button1,
  button2,
  button2CSS,
  button1CSS,
  setOpen,
  open,
  extraCSS,
  onClickfunction1,
  onClickfunction2,
  img,
}) {
  return (
    <>
      <nav className={` mx-auto  top-0 left-0 right-0  p-5 ${extraCSS}`}>
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <img src={Image} className="md:w-20 md:h-10 w-18 h-8" />
          </div>
          <div className="flex items-center">
            {button1 && (
              <div className={button1CSS} onClick={onClickfunction1}>
                <div> {button1}</div>
              </div>
            )}
            {button2 && (
              <div className={button2CSS} onClick={onClickfunction2}>
                {img ? (
                  <img src={img} className="w-10 h-10"></img>
                ) : (
                  <div>{button2}</div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
