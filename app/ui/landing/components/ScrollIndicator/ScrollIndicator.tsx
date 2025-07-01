"use client";
import { cn, safeScroll, Tooltip } from "@/app/ui";
import { sections } from "@/app/ui/landing";
import { useEffect, useRef, useState } from "react";

export function ScrollIndicator() {
  const [active, setActive] = useState<string | null>(null);
  const activeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return null;

          const rect = element.getBoundingClientRect();
          const visiblePercentage = calculateVisiblePercentage(rect);

          return {
            id: section.id,
            visiblePercentage,
            top: rect.top,
            element,
          };
        })
        .filter(Boolean);

      const mostVisible = [...sectionElements].sort((a, b) => {
        const visibilityDiff = b!.visiblePercentage - a!.visiblePercentage;

        if (Math.abs(visibilityDiff) < 10) {
          return a!.top - b!.top;
        }

        return visibilityDiff;
      })[0];

      let activeIndex = 0;
      if (mostVisible) {
        activeIndex = sections.findIndex(
          (section) => section.id === mostVisible.id,
        );
        if (activeIndex < 0) return;
      }

      if (mostVisible && mostVisible.id !== active) {
        if (activeTimeoutRef.current) {
          clearTimeout(activeTimeoutRef.current);
        }

        activeTimeoutRef.current = setTimeout(() => {
          setActive(mostVisible.id);
        }, 100);
      }
    };

    function calculateVisiblePercentage(rect: DOMRect) {
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > windowHeight) {
        return 0;
      }

      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      return (visibleHeight / rect.height) * 100;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (activeTimeoutRef.current) {
        clearTimeout(activeTimeoutRef.current);
      }
    };
  }, [active]);

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center">
      <div className="relative w-4 h-80 flex flex-col justify-between items-center">
        <svg
          className="absolute left-1/2 top-0 -translate-x-1/2"
          width="4"
          height="100%"
          viewBox="0 0 4 320"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="line-mask" maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="320" fill="white" />
              {sections.map((section, idx) => (
                <circle
                  key={section.id}
                  cx="2"
                  cy={(320 / (sections.length - 1)) * idx}
                  r="8"
                  fill="black"
                />
              ))}
            </mask>
          </defs>

          <rect
            x="0"
            y="0"
            width="4"
            height="320"
            fill="currentColor"
            className="text-accent opacity-75"
            mask="url(#line-mask)"
          />
        </svg>

        {sections.map((section, idx) => (
          <Tooltip label={section.label} placement={"left"} key={section.id}>
            <button
              className="relative z-10"
              onClick={() => safeScroll(section.id)}
              style={{
                position: "absolute",
                top: `${(100 / (sections.length - 1)) * idx}%`,
                transform: "translate(-50%, -50%)",
                left: "50%",
              }}
            >
              <div
                className={cn(
                  "w-3 h-3 rounded-full border cursor-pointer transition-all duration-300",
                  active === section.id
                    ? "bg-accent border-accent"
                    : "border-accent bg-transparent",
                )}
                style={{
                  boxShadow:
                    active === section.id
                      ? "0 0 8px 2px var(--accent)"
                      : "none",
                  transition:
                    "box-shadow 0.3s ease, background-color 0.3s ease",
                }}
              />
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
