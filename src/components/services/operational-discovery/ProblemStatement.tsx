import Image from "next/image";

export default function ProblemStatement() {
  return (
    <section className="relative flex h-[300px] items-start overflow-hidden bg-black pt-10 sm:h-[380px] sm:pt-14 lg:h-[478px] lg:pt-[103px]">
      <Image
        src="/services/operational-discovery/problem-lines-bg.png"
        alt=""
        fill
        className="object-cover opacity-70"
        aria-hidden
      />
      <p className="relative z-10 mx-auto max-w-[800px] px-6 text-center font-sora text-2xl leading-[1.55] tracking-[-0.8px] sm:text-3xl lg:text-[36px] lg:leading-[56px]">
        <span className="text-white/85">
          We diagnose the root of your operational friction so{" "}
        </span>
        <span className="text-white">solutions actually stick.</span>{" "}
        <span className="text-white/30">
          Not the symptom. Not the tool gap. The process breakdown underneath
          it all.
        </span>
      </p>
    </section>
  );
}
