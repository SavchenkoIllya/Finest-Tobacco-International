"use client";
import { cn } from "@/app/ui";
import { ChangeEvent, ReactNode } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange(checked: boolean): void;
  label: string;
  icon?: ReactNode;
}

export const Checkbox = ({ checked, onChange, label, icon }: CheckboxProps) => {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <div className="relative w-5 h-5">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="peer absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className="w-full h-full border-2 border-primary rounded-sm flex items-center justify-center transition">
          <svg
            className={cn(
              "w-3 h-3 text-accent transition-all",
              checked ? "opacity-100" : "opacity-0",
            )}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      {icon}
      <span className="text-primary">{label}</span>
    </label>
  );
};
