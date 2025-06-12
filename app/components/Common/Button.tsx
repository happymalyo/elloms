import type { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center space-x-2 shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
