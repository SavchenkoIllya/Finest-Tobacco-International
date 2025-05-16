"use client";
import { ChangeEvent, ReactNode } from "react";

interface TextareaProps {
  variant?: "black" | "white";
  onChange(value: string): void;
  placeholder?: string;
  icon?: ReactNode;
}

export const Textarea = ({
  variant = "white",
  onChange,
  placeholder = "Enter text...",
  icon,
}: TextareaProps) => {
  const baseStyles =
    "flex items-start w-full border px-4 py-2 gap-2";
  const variantStyles =
    variant === "black"
      ? "bg-secondary text-primary border-primary placeholder-primary"
      : "bg-primary text-secondary border-secondary placeholder-secondary";

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`${baseStyles} ${variantStyles}`}>
      <textarea
        placeholder={placeholder}
        onChange={handleTextareaChange}
        className="bg-transparent outline-none flex-1 resize-none"
        rows={4}
      />
      {icon}
    </div>
  );
};
