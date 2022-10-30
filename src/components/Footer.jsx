import React from "react";
import { ReactComponent as Zuri } from "../assets/zuri_logo.svg";
import { ReactComponent as I4G } from "../assets/I4G.svg";

const Footer = () => {
  return (
    <footer className="static bottom-0 flex flex-col justify-between w-full h-32 space-y-3 md:px-16 md:fixed md:flex-row">
      <div className="md:absolute top-0 w-[93%] mx-auto md:h-full border-t opacity-50 border-[#98A2B3]"></div>
      <Zuri />
      <span className="px-4 text-gray-500 uppercase md:mt-8 md:px-0">HNG Intership 9 Frontend Task</span>
      <I4G />
    </footer>
  );
};

export default Footer;
