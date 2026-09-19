import Image from "next/image";

export default function ContactCta() {
  return (
    <section className="relative flex min-h-[455px] items-center overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-6 py-20 sm:px-10">
      <div className="pointer-events-none absolute top-1/2 right-[-160px] hidden h-[600px] w-[700px] -translate-y-1/2 lg:block">
        <Image
          src="/services/custom-software/contact-lines-bg.png"
          alt=""
          fill
          className="object-contain opacity-70"
          aria-hidden
        />
        <Image
          src="/services/custom-software/contact-orb.png"
          alt=""
          width={400}
          height={400}
          className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-90"
          aria-hidden
        />
        <Image
          src="/services/custom-software/contact-glass-box.svg"
          alt=""
          width={747}
          height={500}
          className="absolute top-1/2 left-1/2 h-[500px] w-[747px] -translate-x-1/2 -translate-y-1/2 object-contain"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[822px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-[19px]">
          <p className="font-sora text-3xl tracking-[-3px] text-[#858382] sm:text-4xl lg:text-[45px]">
            {"Let's explore whether custom software is "}
            <span className="text-white">the right next step </span>
            <span className="text-[#ff884c]">for your operation.</span>
          </p>
          <p className="text-base leading-[27px] text-white">
            Start your discovery today. We deliver a decision-ready roadmap
            in four weeks — no vendor bias, no guesswork.
          </p>
        </div>

        <a
          href="/contact"
          className="bg-[#ff884c] px-10 py-4 text-[15px] tracking-[0.5px] text-white transition-opacity hover:opacity-90"
        >
          Start a Custom Software Discussion
        </a>
      </div>
    </section>
  );
}
