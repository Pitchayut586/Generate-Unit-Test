"use-client";
import { ButtonType } from "@/types/button.type";
import React from "react";

const CustomButton = ({ name }: ButtonType) => {
  return (
    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {name}
    </button>
  );
};

export default CustomButton;
