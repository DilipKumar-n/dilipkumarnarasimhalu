import { SectionHeading } from "@/components/common/section-heading";
import { experienceItems } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section className="section-padding bg-[color:var(--color-surface)]">
      <div className="container-width space-y-10 md:space-y-12">
        <SectionHeading title="My Experience" centered />
        <div className="space-y-5">
          {experienceItems.map((item) => (
            <article
              key={`${item.company}-${item.duration}`}
              className="rounded-2xl border border-black/20 bg-white p-6 transition-colors hover:bg-white/10 md:p-8"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-bold">
                  {item.role} at {item.company}
                </h3>
                <span className="text-sm font-medium text-zinc-500">
                  {item.duration}
                </span>
              </div>
              {item.description.map((paragraph) => (
                <p key={paragraph.slice(0, 18)} className="mt-4 leading-7 text-zinc">{item.description}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
