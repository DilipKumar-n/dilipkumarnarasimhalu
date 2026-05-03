import { SectionHeading } from "@/components/common/section-heading";
import { skills } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-[color:var(--color-dark)] text-white">
      <div className="container-width space-y-10 md:space-y-12">
        <SectionHeading title="My Skills" centered />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="surface-card px-5 py-5 text-center text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5 text-black"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
