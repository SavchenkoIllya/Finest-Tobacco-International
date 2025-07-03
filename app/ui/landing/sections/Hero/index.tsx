"use client";
import { LandingSections } from "@/app/lib";
import { ScrollButton } from "@/app/ui/landing/sections/Hero/components/ScrollButton";

export const Hero = ({ video_url }: { video_url?: string }) => {
  return (
    <section
      id={LandingSections.HERO}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full min-w-full min-h-full z-[-1]"
          src="https://customer-835voqu02pldhkl9.cloudflarestream.com/563571594c01d35726747f61578d03f3/downloads/default.mp4"
          muted
          autoPlay
          loop
          playsInline
        />
      </div>

      <div className="z-20 absolute bottom-0 mb-10 left-1/2 transform -translate-x-1/2 flex flex-col justify-center gap-2">
        <ScrollButton text="↓" />
      </div>
    </section>
  );
};
