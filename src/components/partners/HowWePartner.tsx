import Image from "next/image";

const ROWS = [
  {
    imageSide: "left" as const,
    image: "/partners/partner-row-1.png",
    heading: (
      <>
        <span className="text-white/20">You recommend</span>
        <span className="text-white">, we estimate</span>
      </>
    ),
    description:
      "Share your recommendations and analysis. We provide a technical estimate and timeline.",
  },
  {
    imageSide: "right" as const,
    image: "/partners/partner-row-2.png",
    heading: (
      <>
        <span className="text-white/20">You retain the </span>
        <span className="text-white">client relationship</span>
      </>
    ),
    description:
      "We are a contractor in your engagement. Your client sees you as the leader. We execute your direction.",
  },
  {
    imageSide: "left" as const,
    image: "/partners/partner-row-3.png",
    heading: (
      <>
        <span className="text-white/20">We scale with </span>
        <span className="text-white">your throughput</span>
      </>
    ),
    description:
      "Whether one project a quarter or multiple simultaneous engagements, we scale to your volume.",
  },
  {
    imageSide: "right" as const,
    image: "/partners/partner-row-4.png",
    heading: (
      <>
        <span className="text-white/20">We offer </span>
        <span className="text-white">flexible commercial models</span>
      </>
    ),
    description:
      "Project pricing. Time-and-materials. Retainers for ongoing support. We structure deals to align with your engagement model.",
  },
];

function ImageBlock({ src }: { src: string }) {
  return (
    <div className="relative aspect-[635/331] w-full overflow-hidden rounded-[10px]">
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}

function TextBlock({
  heading,
  description,
}: {
  heading: React.ReactNode;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center">
      <p className="font-sora text-2xl font-semibold tracking-[-1.5px] lg:text-[28px]">
        {heading}
      </p>
      <p className="mt-4 max-w-[435px] text-lg leading-[27px] tracking-[-0.32px] text-white">
        {description}
      </p>
    </div>
  );
}

export default function HowWePartner() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pt-16 pb-24 sm:px-10 lg:px-[42px] lg:pt-[80px] lg:pb-32">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          How We <span className="text-[#ff884c]">Partner</span>
        </h2>

        <div className="mt-12 flex flex-col gap-16 lg:mt-16 lg:gap-20">
          {ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8"
            >
              {row.imageSide === "left" ? (
                <>
                  <ImageBlock src={row.image} />
                  <TextBlock
                    heading={row.heading}
                    description={row.description}
                  />
                </>
              ) : (
                <>
                  <TextBlock
                    heading={row.heading}
                    description={row.description}
                  />
                  <ImageBlock src={row.image} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-0 left-0 flex justify-center opacity-60">
        <Image
          src="/partners/sunburst.png"
          alt=""
          width={1308}
          height={1342}
          className="h-auto w-[90%] max-w-[1308px] translate-y-1/2"
          aria-hidden
        />
      </div>
    </section>
  );
}
