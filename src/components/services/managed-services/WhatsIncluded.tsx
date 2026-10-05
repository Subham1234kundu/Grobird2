"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { cardsSlideReveal, gsap, useGSAP } from "@/lib/gsap";

const M = "/services/managed-services/mobile";
const FADE = "/services/system-integration/card-fade.png";

/* ---------- Phone artwork, laid out from the Figma mobile frame ---------- */

function MonitoringArt() {
  return (
    <>
      <div className="absolute top-[223.2px] left-[81.5px] h-[390px] w-[549px] overflow-hidden rounded-tl-[24px] border-[13px] border-white/17 blur-[1.15px]">
        <Image src={`${M}/dashboard.jpg`} alt="" fill sizes="549px" className="object-cover" />
      </div>
      <div className="absolute top-[315px] right-[18px] left-4 flex h-[34px] items-center rounded-lg bg-[#ff884c] px-2">
        <p className="text-sm leading-[22px] text-white">Server would be down for 2 mins.</p>
      </div>
      <div className="absolute top-[358px] right-[18px] left-[332px] h-[34px] overflow-hidden rounded-[4.67px] bg-[#ff884c]">
        <div className="absolute inset-[1.39%_-2.2%_-3.57%_35.71%]">
          <Image src={`${M}/badge-shape.svg`} alt="" fill className="object-fill" />
        </div>
        <div className="absolute inset-[61.28%_27.13%_30.22%_64%]">
          <Image src={`${M}/badge-dot.svg`} alt="" fill className="object-fill" />
        </div>
      </div>
    </>
  );
}

function PerformanceArt() {
  return (
    <>
      <div className="absolute inset-[calc(57.51%+0.15px)_calc(17.95%-0.64px)_calc(-18.39%-1.37px)_calc(17.95%-0.64px)]">
        <Image src={`${M}/stopwatch.svg`} alt="" fill className="object-fill" />
      </div>
      <div className="absolute bottom-[-23.4px] left-1/2 h-[186px] w-[299px] -translate-x-1/2 -scale-x-100">
        <Image src={FADE} alt="" fill sizes="299px" className="object-cover" />
      </div>
    </>
  );
}

const TASKS = [
  { title: "Optimize experience for mobile web", tag: "FEEDBACK", tagBg: "bg-[#5a9dfe]", id: "NUC-335", count: 2 },
  { title: "Bump version for new API", tag: "FORMS", tagBg: "bg-[#9e91ee]", id: "NUC-336", count: 5 },
  { title: "Adapt web app on new payments provider", tag: "FORMS", tagBg: "bg-[#9e91ee]", id: "NUC-336", count: 5 },
];

function TrackingArt() {
  return (
    <>
      <div className="absolute top-[181px] left-[92px] flex w-[251px] flex-col items-end gap-9">
        <div className="flex w-full flex-col gap-[13px]">
          <p className="text-xs whitespace-nowrap text-[#5f5f5f]">PRODUCT &amp; ISSUE TRACKING</p>
          <p className="text-xl leading-tight font-semibold text-[#797575]">
            Software
            <br />
            Tracking
          </p>
        </div>
        <div className="flex h-[323px] items-center justify-end overflow-hidden rounded-tl-md bg-[#202020] pt-2.5 pl-2.5">
          <div className="flex h-[299px] w-[185px] flex-col gap-2.5">
            <p className="text-xs text-[#7e7e7e]">IN PROGRESS</p>
            <div className="flex flex-col gap-2">
              {TASKS.map((t, i) => (
                <div key={i} className="flex flex-col gap-2.5 rounded-l-lg bg-[#22282c] px-2.5 py-1.5">
                  <p className="text-xs text-[#b1b1b1]">{t.title}</p>
                  <span className={`w-fit rounded-[5px] px-2 py-0.5 text-[10px] text-[#202020] ${t.tagBg}`}>{t.tag}</span>
                  <div className="flex w-[164px] items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="flex size-[23px] items-center justify-center rounded-[5px] bg-[#039855]">
                        <Image src={`${M}/task-icon.svg`} alt="" width={12} height={12} />
                      </span>
                      <span className="text-[10px] text-[#b1b1b1]">{t.id}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full bg-[#3f3f3f] px-2 py-0.5 text-[10px] text-[#c5c5c5]">{t.count}</span>
                      <Image src={`${M}/task-chevron.svg`} alt="" width={11} height={11} className="-rotate-90" />
                      <Image src={`${M}/task-avatar.png`} alt="" width={20} height={20} className="rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-1.4px] left-[calc(50%-1.06px)] h-[186px] w-[299px] -translate-x-1/2 -scale-x-100">
        <Image src={FADE} alt="" fill sizes="299px" className="object-cover" />
      </div>
    </>
  );
}

function PlatformArt() {
  return (
    <>
      <div className="absolute top-[178.2px] left-[calc(50%-25px)] h-[1198px] w-[677px] -translate-x-1/2 blur-[27.1px]">
        <Image src={`${M}/swoosh.png`} alt="" fill sizes="677px" className="object-cover" />
      </div>
      <div className="absolute bottom-[-11.4px] left-[calc(50%-5.9px)] h-[186px] w-[414.7px] -translate-x-1/2 -scale-x-100">
        <Image src={`${M}/card-fade-wide.png`} alt="" fill sizes="415px" className="object-cover" />
      </div>
      <div className="absolute top-[149px] left-[calc(50%-7px)] z-[1] h-[665px] w-[310px] -translate-x-1/2">
        <Image src={`${M}/phone.png`} alt="" fill sizes="310px" className="object-cover" />
      </div>
    </>
  );
}

type Card = {
  key: string;
  bg: string;
  title: string;
  description: string;
  /** Phone text offset from the Figma card frame. */
  textPos: string;
  descWidth?: string;
  art: ReactNode;
};

const CARDS: Card[] = [
  {
    key: "monitoring-and-alerting",
    bg: "/services/managed-services/card-monitoring.png",
    title: "Monitoring and alerting",
    description:
      "We watch your systems 24/7 and respond to issues before they impact your team.",
    textPos: "max-sm:top-[30px] max-sm:left-4",
    art: <MonitoringArt />,
  },
  {
    key: "performance-optimization",
    bg: "/services/managed-services/card-performance.png",
    title: "Performance optimization",
    description:
      "We analyze usage patterns and optimize for speed, reliability, and cost.",
    textPos: "max-sm:top-[31px] max-sm:left-3.5",
    art: <PerformanceArt />,
  },
  {
    key: "bug-fixes-and-enhancements",
    bg: "/services/managed-services/card-bugfixes.png",
    title: "Bug fixes and enhancements",
    description:
      "As you identify needed changes, we prioritize and implement them.",
    textPos: "max-sm:top-[26px] max-sm:left-[19px]",
    art: <TrackingArt />,
  },
  {
    key: "platform-updates-and-user-support",
    bg: "/services/managed-services/card-platform-support.png",
    title: "Platform updates and User support",
    description:
      "When your integrated systems update, we ensure your customizations and integrations remain compatible.",
    textPos: "max-sm:top-[34px] max-sm:left-4",
    descWidth: "max-sm:max-w-[344px]",
    art: <PlatformArt />,
  },
];

export default function WhatsIncluded() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".included-heading", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".included-heading", start: "top 85%" },
      });

      cardsSlideReveal(".included-card", { trigger: root.current });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black px-5 pt-12 pb-12 sm:px-10 sm:pt-0 sm:pb-20 lg:px-[99px] lg:pt-[97px] lg:pb-[80px]">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="gsap-fade included-heading translate-y-8 font-sora text-[26px] leading-[28.6px] tracking-[-1.5px] text-[#858382] sm:text-4xl sm:leading-normal sm:tracking-[-2px] lg:text-[52px]">
          What&apos;s <span className="text-[#ff884c]">Included</span>
        </h2>

        <div className="included-grid mt-8 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-[57px] lg:grid-cols-4 lg:gap-[32px]">
          {CARDS.map((card) => (
            <div
              key={card.key}
              className="gsap-fade included-card relative h-[473px] overflow-hidden rounded-[12px] border border-white/16 sm:h-[380px] sm:border-[0.8px] lg:h-[473px]"
            >
              <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden>
                {card.art}
              </div>
              <Image
                src={card.bg}
                alt=""
                fill
                className="hidden object-cover sm:block"
              />
              <div
                className={`absolute top-5 left-[15px] z-10 flex w-[calc(100%-30px)] max-w-[282px] flex-col gap-6 max-sm:max-w-none sm:gap-[7px] ${card.textPos}`}
              >
                <h3 className="font-sora text-[18px] leading-[22.7px] whitespace-nowrap text-white sm:text-[24px] sm:whitespace-normal">
                  {card.title}
                </h3>
                <p className={`max-w-[267px] text-[16px] leading-[19.4px] text-white/50 sm:leading-normal ${card.descWidth ?? ""}`}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
