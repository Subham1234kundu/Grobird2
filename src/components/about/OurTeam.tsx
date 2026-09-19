import Image from "next/image";

const PILLARS = [
  {
    number: "01",
    title: "Operations",
    subtitle: "Process design & execution",
    image: "/about/team-operations.png",
  },
  {
    number: "02",
    title: "Architecture",
    subtitle: "System design & integration",
    image: "/about/team-architecture.png",
  },
  {
    number: "03",
    title: "Implementation",
    subtitle: "Build, deploy, optimise",
    image: "/about/team-implementation.png",
  },
  {
    number: "04",
    title: "Global Delivery",
    subtitle: "South Asia & worldwide",
    image: "/about/team-global.png",
  },
];

export default function OurTeam() {
  return (
    <section className="bg-black px-6 py-16 sm:px-10 lg:px-[48px] lg:py-[80px]">
      <div className="mx-auto max-w-[1261px] border-[0.8px] border-[rgba(75,73,73,0.4)] p-6 lg:p-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col lg:w-[476px]">
            <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[48px]">
              Our <span className="text-[#ff884c]">Team</span>
            </h2>
            <p className="mt-6 text-base leading-[26px] text-white/80">
              GroBird is built by technologists who&apos;ve worked across
              operations, architecture, and implementation. We&apos;ve led
              teams. We&apos;ve managed large programs. We&apos;ve worked
              with enterprise platforms and built from scratch. We
              understand what it takes to deliver.
            </p>
            <p className="mt-5 text-base leading-[26px] text-[#858382]">
              We&apos;re based in India and serve B2B companies across South
              Asia and globally. We&apos;re familiar with local context
              while applying global best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[2px] lg:w-[517px]">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="relative min-h-[176px] overflow-hidden border-[0.8px] border-[rgba(75,73,73,0.4)] p-6"
              >
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-2">
                  <p className="font-mono text-[9px] tracking-[2px] text-[#ff884c] uppercase">
                    {pillar.number}
                  </p>
                  <p className="font-sora text-[15px] font-semibold text-white">
                    {pillar.title}
                  </p>
                  <p className="max-w-[120px] text-xs leading-[18px] text-white">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
