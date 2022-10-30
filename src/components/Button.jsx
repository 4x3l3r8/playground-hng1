import React from "react";

const Button = ({ to, htmlId, children }) => {
  return (
    <a
      href={to}
      id={htmlId}
      className="flex justify-center active:border-2 active:border-[#98A2B3] items-center w-full focus:border hover:bg-[#D0D5DD] focus:border-[#D0D5DD] bg-[#EAECF0] text-[#101828] h-16 font-medium text-xl rounded-md"
    >
      {children}
    </a>
  );
};

export default Button;
