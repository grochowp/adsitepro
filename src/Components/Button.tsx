import React from "react";

export const Button = ({
  filled,
  children,
}: {
  filled: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`h-8 w-[116px] rounded-md ${filled ? "border-none bg-[#0147ff] text-[#f7f7f7]" : "border-[1px] border-[#0147ff] bg-transparent text-[#0147ff]"} text-center font-robotoFlex text-[10px] font-normal duration-300 hover:scale-105 sm:h-10 sm:w-32 sm:text-sm md:h-12 md:w-40 md:text-base`}
    >
      {children}
    </button>
  );
};
