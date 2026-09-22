"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Landing-page intro. The mark starts oversized and close, then recedes
 * into the distance as the curtain lifts, handing off to the hero. The
 * hero listens for `grobird:loaded` so its own reveal starts only once
 * this has cleared.
 */
export default function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      // Nothing should scroll while the curtain is up.
      document.body.style.overflow = "hidden";

      const finish = () => {
        document.body.style.overflow = "";
        window.__grobirdLoaded = true;
        window.dispatchEvent(new Event("grobird:loaded"));
        setDone(true);
      };

      gsap
        .timeline({ onComplete: finish })
        .fromTo(
          ".loader-mark",
          { scale: 5.5, opacity: 0, filter: "blur(18px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.05,
            ease: "expo.out",
          },
        )
        // The mark keeps travelling away from the viewer as it leaves.
        .to(
          ".loader-mark",
          {
            scale: 0.2,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.5,
            ease: "power3.in",
          },
          "+=0.15",
        )
        .to(
          ".loader-curtain",
          { yPercent: -100, duration: 0.6, ease: "power4.inOut" },
          "-=0.22",
        );
    },
    { scope: root },
  );

  if (done) return null;

  return (
    <div ref={root} aria-hidden>
      <div className="loader-curtain fixed inset-0 z-[100] flex items-center justify-center bg-black">
        <Image
          src="/landing/why-choose-bg.png"
          alt=""
          width={720}
          height={726}
          priority
          className="loader-mark h-auto w-[300px] opacity-0 sm:w-[420px] lg:w-[520px]"
        />
      </div>
    </div>
  );
}
