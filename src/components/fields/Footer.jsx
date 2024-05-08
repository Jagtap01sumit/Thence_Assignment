import React from "react";
import { FaRegCopyright } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer   m-4 bg-[#F5F5F5] rounded-3xl">
      <div className="container p-12 flex md:flex-row flex-col justify-between ">
        <div className="flex justify-center items-center">
          <FaRegCopyright />
          <span className="font-bold mx-2">
            Talup 2023. All rights reserved
          </span>
        </div>
        <div className="flex justify-center items-center py-3 md:py-0">
          <p className="text-slate-600 underline mx-3">Term & Cndition</p>
          <p className="text-slate-600 underline mx-3">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
