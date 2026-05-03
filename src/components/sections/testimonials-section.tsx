import { SectionHeading } from "@/components/common/section-heading";
import { testimonials } from "@/lib/portfolio-data";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-[color:var(--color-surface)]">
      <div className="container-width space-y-10 md:space-y-12">
        <SectionHeading title="My Testimonial" centered />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={`${item.author}-${index}`}
              className="surface-card p-6"
            >
              <p className="leading-7 text-zinc-600">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-5">
                <p className="font-bold">{item.author}</p>
                <p className="text-sm text-zinc-500">{item.designation}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
