import Image from "next/image";

const CARDS = [
  {
    key: "monitoring-and-alerting",
    bg: "/services/managed-services/card-monitoring.png",
    alt: "Monitoring and alerting — we watch your systems 24/7 and respond to issues before they impact your team.",
  },
  {
    key: "performance-optimization",
    bg: "/services/managed-services/card-performance.png",
    alt: "Performance optimization — we analyze usage patterns and optimize for speed, reliability, and cost.",
  },
  {
    key: "bug-fixes-and-enhancements",
    bg: "/services/managed-services/card-bugfixes.png",
    alt: "Bug fixes and enhancements — as you identify needed changes, we prioritize and implement them.",
  },
  {
    key: "platform-updates-and-user-support",
    bg: "/services/managed-services/card-platform-support.png",
    alt: "Platform updates and user support — when your integrated systems update, we ensure your customizations and integrations remain compatible.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-20 sm:px-10 lg:px-[99px] lg:pt-[97px] lg:pb-[80px]">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What&apos;s <span className="text-[#ff884c]">Included</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[57px] lg:grid-cols-4 lg:gap-[32px]">
          {CARDS.map((card) => (
            <div
              key={card.key}
              className="relative h-[380px] overflow-hidden rounded-[12px] border-[0.8px] border-white/16 lg:h-[473px]"
            >
              <Image src={card.bg} alt={card.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
