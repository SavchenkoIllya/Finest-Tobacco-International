"use client";
import { LandingSections } from "@/app/lib";
import { ScrollButton } from "@/app/ui/landing/sections/Hero/components/ScrollButton";

export const Hero = ({ video_url }: { video_url?: string }) => {
  if (!video_url) return null;

  return (
    <section
      id={LandingSections.HERO}
      className="relative min-h-screen overflow-hidden"
    >
      <video autoplay muted loop playsinline className={"object-cover, w-full h-full"}>
        <source src="https://customer-835voqu02pldhk19.cloudflarestream.com/56357159dc01d35726747f61578d03f3/manifest/video.m3u8" type="application/x-mpegURL">
      </video>
      <div className="z-20 absolute bottom-0 mb-10 left-[50%] transform -translate-x-1/2 flex flex-col justify-center gap-2">
        <ScrollButton text={"↓"} />
      </div>
    </section>
  );
};
