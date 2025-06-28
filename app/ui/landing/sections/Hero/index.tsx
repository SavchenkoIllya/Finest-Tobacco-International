import { LandingSections } from "@/app/lib";
import { ScrollButton } from "@/app/ui/landing/sections/Hero/components/ScrollButton";

export const Hero = ({ video_url }: { video_url?: string }) => {
  if (!video_url) return null;

  return (
    <section id={LandingSections.HERO} className="relative min-h-screen">
      <video
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
