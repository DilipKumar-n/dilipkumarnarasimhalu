import { SectionHeading } from "@/components/common/section-heading";
import { ExperienceList } from "@/components/sections/experience-list";
import { experienceItems } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section className="section-padding bg-[color:var(--color-surface)]">
      <div className="container-width space-y-10 md:space-y-12">
        <SectionHeading title="My Experience" centered />
        <ExperienceList items={experienceItems} />
      </div>
    </section>
  );
}
