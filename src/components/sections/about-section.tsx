import Image from "next/image";
import { SectionHeading } from "@/components/common/section-heading";
import { aboutParagraphs } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-width grid items-center gap-10 md:gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="mx-auto w-full max-w-[520px]">
          <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.25rem] border-4 border-black shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/about-me.jpg"
              alt="Illustration portrait"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 520px"
              className="object-contain object-bottom scale-[1.18] translate-y-3"
              priority={false}
            />
          </div>
        </div>
        <div className="space-y-5">
          <SectionHeading title="About Me" />
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 18)} className="text-base leading-7 text-zinc-600">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
