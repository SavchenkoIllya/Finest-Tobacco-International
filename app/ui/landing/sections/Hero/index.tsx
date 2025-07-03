"use client";
import { LandingSections } from "@/app/lib";
import { ScrollButton } from "@/app/ui/landing/sections/Hero/components/ScrollButton";
import BackgroundPlayer from "next-video/background-player";

export const Hero = ({ video_url }: { video_url?: string }) => {
  if (!video_url) return null;

  return (
    <section
      id={LandingSections.HERO}
      className="relative min-h-screen overflow-hidden"
    >
      <BackgroundPlayer
        className="w-full h-full min-w-full min-h-full z-[-1]"
        src={"https://youtu.be/RTTXmx9E6Z8"}
      />
      <div className="z-20 absolute bottom-0 mb-10 left-[50%] transform -translate-x-1/2 flex flex-col justify-center gap-2">
        <ScrollButton text={"↓"} />
      </div>
    </section>
  );
};
