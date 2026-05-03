import { SectionHeading } from "@/components/common/section-heading";
import { projects } from "@/lib/portfolio-data";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-[color:var(--color-dark)] text-white">
      <div className="container-width space-y-10 md:space-y-12">
        <SectionHeading title="My Projects" centered />
        <div className="space-y-10">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="rounded-2xl"
            >
              <div className="grid gap-7 lg:grid-cols-3 justify-center items-center rounded-xl">
                <div className={`relative aspect-4/3 ${index%2 === 0 ? 'lg:order-last' : 'lg:order-first'}`}>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 100%"
                    className="object-contain object-center w-100"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="my-3 leading-7 text-zinc-200">{project.description}</p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded bg-zinc-700 px-2 py-1 text-xs font-semibold text-zinc-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-black hover:text-white inline-flex lg:px-5 mt-2"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
