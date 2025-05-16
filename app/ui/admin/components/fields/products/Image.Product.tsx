"use client";
import { ProductsWithLocales } from "@/app/db/types";
import { ProductImage } from "@/app/ui";
import { useState } from "react";

export const ImageProduct = ({
  image_url,
}: {
  image_url?: ProductsWithLocales["select"]["image_url"];
}) => {
  const [open, setOpen] = useState(false);
  let hoverTimeout: ReturnType<typeof setTimeout>;

  if (!image_url) return null;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setOpen(false), 200); // задержка для плавности
  };

  return (
    <div>
      <button
        className="relative hover:underline text-blue-600 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {image_url}
      </button>

      {open && (
        <div
          className="absolute z-10 flex items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-8 bg-white rounded-3xl text-right shadow-lg">
            <ProductImage image_url={image_url} width={300} height={300} />
          </div>
        </div>
      )}
    </div>
  );
};
