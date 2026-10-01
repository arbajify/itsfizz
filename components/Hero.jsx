"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WORDS = ["WELCOME", "ITZFIZZ"];

const STATS = [
  { value: "98%", label: "of campaigns beat their launch target" },
  { value: "3.4x", label: "average growth in qualified traffic" },
  { value: "72%", label: "faster delivery than agency average" },
  { value: "120+", label: "brands launched across 14 countries" },
];

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1) INTRO: time-based, plays once on load
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .to("[data-letter]", { opacity: 1, y: 0, duration: 1.1, stagger: 0.05 })
          .to("[data-orb-inner]", { opacity: 1, scale: 1, duration: 1.4 }, "-=0.9")
          .to("[data-stat]", { opacity: 1, y: 0, duration: 0.9, stagger: 0.18 }, "-=0.7");

        // 2) SCROLL: progress-based, scrubbed to the scrollbar
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1, // 1s of smoothing behind the scrollbar
            },
          })
          .to("[data-orb]", { rotate: 160, scale: 1.7, xPercent: -28, ease: "none" }, 0)
          .to("[data-headline]", { yPercent: -45, opacity: 0.15, ease: "none" }, 0)
          .to("[data-stats]", { y: 70, ease: "none" }, 0);
      });

      // Reduced motion: show everything, no movement
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-letter], [data-stat], [data-orb-inner]", {
          opacity: 1,
          y: 0,
          scale: 1,
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    // Runway: gives the scroll something to measure
    <section ref={root} className="relative h-[200svh]">
      {/* Pinned screen */}
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Headline (scroll wrapper) */}
        <div data-headline className="relative z-10 px-4 pt-[14svh] text-center will-change-transform">
          <h1
            aria-label="Welcome Itzfizz"
            className="flex flex-wrap justify-center gap-x-[1.4em] text-[clamp(1.4rem,5.2vw,4.2rem)] font-light leading-tight tracking-[0.4em]"
          >
            {WORDS.map((word) => (
              <span key={word} aria-hidden="true" className="inline-flex">
                {word.split("").map((ch, i) => (
                  <span key={i} data-letter className="inline-block translate-y-10 opacity-0">
                    {ch}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        {/* Visual: outer = scroll, inner = intro (separate elements, no transform clash) */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <div data-orb className="w-[min(62vw,440px)] will-change-transform">
            <div data-orb-inner className="scale-75 opacity-0">
              <svg viewBox="0 0 400 400" role="img" aria-label="Abstract spinning disc">
                <circle cx="200" cy="200" r="190" fill="#2B4BFF" />
                <circle cx="200" cy="200" r="140" fill="none" stroke="#DCE4F2" strokeWidth="3" strokeDasharray="6 14" />
                <circle cx="200" cy="200" r="90" fill="#10204A" />
                <circle cx="298" cy="130" r="42" fill="#FFC93C" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div data-stats className="absolute inset-x-0 bottom-0 z-10 px-6 pb-[6svh] will-change-transform">
          <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
            {STATS.map((s) => (
              <li key={s.value} data-stat className="translate-y-6 opacity-0">
                <p className="text-4xl font-light md:text-5xl">{s.value}</p>
                <p className="mt-1 max-w-[16ch] text-sm leading-snug">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
