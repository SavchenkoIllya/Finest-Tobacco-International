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
      <iframe width="678" height="381" src="https://www.youtube.com/embed/RTTXmx9E6Z8" title="TabakGrishaVers2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="z-20 absolute bottom-0 mb-10 left-[50%] transform -translate-x-1/2 flex flex-col justify-center gap-2">
        <ScrollButton text={"↓"} />
      </div>
    </section>
  );
};
