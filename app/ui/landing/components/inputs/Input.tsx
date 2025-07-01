"use client";
import { cn } from "@/app/ui";
import { ChangeEvent, ReactNode } from "react";

interface SearchInputProps {
  variant?: "black" | "white";
  onChange(value: string): void;
  placeholder?: string;
  icon?: ReactNode;
  defaultValue?: string;
  type?: HTMLInputElement["type"];
  name?: string;
  error?: string[];
  width?: string;
}

export const Input = ({
  variant = "white",
  onChange,
  placeholder = "Search...",
  icon,
  defaultValue,
  error,
  width,
  ...props
}: SearchInputProps) => {
  const variantStyles = {
    black: "text-primary border-primary placeholder-primary",
    white: "text-secondary border-secondary placeholder-secondary",
    error: "text-red-500 border-red-500 placeholder-red-300",
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={cn("w-full flex flex-col gap-2", width)}>
      <div
        className={cn(
          "border flex px-4 py-2 gap-2 w-full",
          variantStyles[variant],
          error && variantStyles.error,
        )}
      >
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleInputChange}
          className="bg-transparent outline-none flex-1 w-full"
          defaultValue={defaultValue}
          {...props}
        />
        {icon}
      </div>
      {error?.map((error, i) => (
        <p key={error + i} className={"text-red-500"}>
          {error}
        </p>
      ))}
    </div>
  );
};
