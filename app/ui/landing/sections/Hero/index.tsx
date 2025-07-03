"use client";
import { LandingSections } from "@/app/lib";
import { ScrollButton } from "@/app/ui/landing/sections/Hero/components/ScrollButton";
import { Stream } from "@cloudflare/stream-react";

export const Hero = ({ video_url }: { video_url?: string }) => {
  const videoIdOrSignedToken = "563571594c01d35726747f61578d03f3";

  return (
    <section
      id={LandingSections.HERO}
      className="relative min-h-screen overflow-hidden"
    >
      <Stream
        className={"object-cover w-full h-full"}
        muted
        autoplay
        loop
        src={videoIdOrSignedToken}
      />
      <div className="z-20 absolute bottom-0 mb-10 left-[50%] transform -translate-x-1/2 flex flex-col justify-center gap-2">
        <ScrollButton text={"↓"} />
      </div>
    </section>
  );
};
