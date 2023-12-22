// src/components/CustomInput.tsx
import React, { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  
}

const CustomInput: React.FC<CustomInputProps> = ({ ...props }) => {
  return (
    <div className="mb-3">
      <label className="block mb-2">
        {props.name}
        <input
          type="email"
          placeholder="alex@example.com"
          className="mt-1 p-2 bg-gray-100 w-full rounded"
          {...props}
        />
      </label>
    </div>
  );
};

export default CustomInput;