"use client";
import {ChangeEvent, DetailedHTMLProps, ReactNode, TextareaHTMLAttributes} from "react";
import {cn} from "@/app/ui";

interface TextareaProps {
  variant?: "black" | "white";
  onChange(value: string): void;
  placeholder?: string;
  icon?: ReactNode;
  inputProps?: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
  error?:string[],
}

export const Textarea = ({
  variant = "white",
  onChange,
  placeholder = "Enter text...",
  icon,
  error,
  inputProps
}: TextareaProps) => {
  const baseStyles =
    "flex items-start w-full border px-4 py-2 gap-2";
  const variantStyles =
      {
        black: "text-primary border-primary placeholder-primary",
        white: "text-secondary border-secondary placeholder-secondary",
        error:"text-red-500 border-red-500 placeholder-red-300",
      }

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={"w-full flex flex-col gap-2"}>
      <div className={cn(baseStyles, variantStyles[variant], error && variantStyles.error)}>
        <textarea
          placeholder={placeholder}
          onChange={handleTextareaChange}
          className="bg-transparent outline-none flex-1 resize-none"
          rows={4}
          {...inputProps}
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
