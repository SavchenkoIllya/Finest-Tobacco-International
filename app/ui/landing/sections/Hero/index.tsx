import { LandingSections } from "@/app/lib";

export const Hero = () => {
  return (
    <section
      id={LandingSections.HERO}
      className="relative min-h-screen"
    >

      <video
          className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] transition-opacity duration-1000`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/video/TabakGrishaVers2.mp4"
      />
    </section>
  );
};
