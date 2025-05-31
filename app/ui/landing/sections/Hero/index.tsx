import { LandingSections } from "@/app/lib";
import { ScrollButton } from "@/app/ui/landing/sections/Hero/components/ScrollButton";

const VIDEO_NAME="TabakGrishaVers2.mp4"

export const Hero = () => {
  return (
    <section id={LandingSections.HERO} className="relative min-h-screen">
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] transition-opacity duration-1000`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={`http://localhost:${process.env.NEXT_PUBLIC_MINIO_PORT!}/${process.env.NEXT_PUBLIC_VIDEO_BUCKET_NAME!}/${VIDEO_NAME}`}
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
