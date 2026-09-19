import Image from "next/image";

export default function CoverIllustration() {
  return (
    <div className="relative aspect-[1440/531] w-full bg-black">
      <Image
        src="/blogs/post/cover-illustration.png"
        alt=""
        fill
        className="object-cover"
        aria-hidden
        priority
      />
    </div>
  );
}
