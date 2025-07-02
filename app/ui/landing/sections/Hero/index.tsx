"use client";
import { LandingSections } from "@/app/lib";
import { ScrollButton } from "@/app/ui/landing/sections/Hero/components/ScrollButton";
import { useEffect, useRef } from "react";

export const Hero = ({ video_url }: { video_url?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleLoadStart = () => console.log("Loading starts");
  const handleCanPlay = () => console.log("Video ready");
  const handleError = (e) => console.error("Error:", e);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play();
    };

    document.addEventListener("touchstart", tryPlay, { once: true });

    return () => {
      document.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  if (!video_url) return null;

  return (
    <section id={LandingSections.HERO} className="relative min-h-screen">
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] transition-opacity duration-1000`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
        onError={handleError}
        src={
          process.env.NODE_ENV === "development"
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${video_url}`
            : video_url
        }
      />
      <div
        className={
          "z-20 absolute bottom-0 mb-10 left-[50%] flex flex-col justify-center gap-2"
        }
      >
        <ScrollButton text={"↓"} />
      </div>
    </section>
  );
};
