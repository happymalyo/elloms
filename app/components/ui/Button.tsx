import type { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center space-x-2 shadow-md ${className}`}
    >
      {children}
    </button>
  );
};
