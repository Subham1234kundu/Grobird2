import Image from "next/image";

export default function CoverIllustration({ src }: { src?: string | null }) {
  return (
    <div className="relative hidden aspect-[1440/531] w-full bg-black lg:block">
      <Image
        src={src ?? "/blogs/post/cover-illustration.png"}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden
        priority
      />
    </div>
  );
}
