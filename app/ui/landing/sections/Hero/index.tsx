"use client";
import { LandingSections } from "@/app/lib";
import { ScrollButton } from "@/app/ui/landing/sections/Hero/components/ScrollButton";
import { useEffect, useRef } from "react";

export const Hero = ({ video_url }: { video_url?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {
        // Optional: лог для отладки
      });
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
        src={video_url}
      />
      <div
        className={
          "z-20 absolute bottom-0 mb-10 left-[50%] flex flex-col justify-center gap-2"
        }
      >
        <ScrollButton text={"↓"} />
        <p className={"text-secondary"}>Explore</p>
      </div>
    </section>
  );
};
