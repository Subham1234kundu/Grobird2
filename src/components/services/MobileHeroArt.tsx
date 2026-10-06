import Image from "next/image";

const LAYERS = {
  "custom-software": [
    ["absolute top-[63px] left-[156px] h-[365px] w-[349px]", ""],
    ["absolute bottom-[82px] left-[calc(50%-39px)] h-[229px] w-[684px] -translate-x-1/2", ""],
    ["absolute bottom-[-82px] left-[calc(50%+174px)] flex h-[684px] w-[652px] -translate-x-1/2 items-center justify-center", "relative h-[652px] w-[684px] shrink-0 -rotate-90"],
  ],
  "workflow-automation": [
    ["absolute top-[-99px] left-[144px] h-[625px] w-[626px]", ""],
    ["absolute bottom-[-9px] left-[calc(50%-10px)] h-[279px] w-[750px] -translate-x-1/2", ""],
    ["absolute bottom-[-195.98px] left-[calc(50%+36.01px)] flex h-[750.997px] w-[258.901px] -translate-x-1/2 items-center justify-center", "relative h-[257.226px] w-[750.425px] shrink-0 rotate-[89.87deg]"],
    ["absolute right-0 bottom-[-180px] flex h-[750px] w-[212px] items-center justify-center", "relative h-[212px] w-[750px] shrink-0 -rotate-90"],
  ],
  "system-integration": [
    ["absolute top-[calc(50%-19.5px)] left-[calc(50%+136.5px)] h-[470px] w-[835px] -translate-x-1/2 -translate-y-1/2", ""],
    ["absolute bottom-0 left-[calc(50%-69.5px)] h-[292px] w-[1003px] -translate-x-1/2", ""],
    ["absolute bottom-[-393.64px] left-[calc(50%-2.33px)] flex h-[1003.636px] w-[245.35px] -translate-x-1/2 items-center justify-center", "relative h-[243.111px] w-[1003.096px] shrink-0 rotate-[89.87deg]"],
  ],
  "business-intelligence": [
    ["absolute top-[-76px] left-[-23px] h-[688px] w-[515px] opacity-70", ""],
    ["absolute bottom-[36.25px] left-[calc(50%-26.5px)] flex h-[841px] w-[377px] -translate-x-1/2 items-center justify-center", "relative h-[377px] w-[841px] shrink-0 -rotate-90 -scale-y-100"],
    ["absolute bottom-[36px] left-[calc(50%+4.5px)] h-[217px] w-[439px] -translate-x-1/2", ""],
  ],
} as const;

export default function MobileHeroArt({ service }: { service: keyof typeof LAYERS }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden sm:hidden" aria-hidden>
      {LAYERS[service].map(([position, rotation], index) => {
        const art = (
          <Image
            src={`/services/${service}/mobile/${index === 0 ? "hero-art" : `hero-fade-${index}`}.png`}
            alt=""
            fill
            sizes="(max-width: 639px) 1003px, 1px"
            className="object-cover"
            loading="eager"
            priority={index === 0}
          />
        );
        return <div key={index} className={position}>{rotation ? <div className={rotation}>{art}</div> : art}</div>;
      })}
    </div>
  );
}
