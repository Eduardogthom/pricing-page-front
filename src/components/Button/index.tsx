import { type } from "os";
import React, { useState, FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  label: string;
}

const Button: FC<ButtonProps> = ({
  name,
  label,
  type,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <button
      type={type}
      id={name}
      className={`w-full rounded border-0 bg-purple-dark p-2 font-semibold text-white hover:bg-purple-light focus:outline-none focus:ring focus:ring-gold disabled:bg-perfume ${
        className && className
      }`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
