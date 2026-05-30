import { SectionHeading } from "@/components/common/section-heading";
import { TestimonialsGrid } from "@/components/sections/testimonials-grid";
import { resolveTestimonialImageUrl } from "@/lib/avatar-url";
import { getTestimonials } from "@/lib/linkedin/get-testimonials";
import type { TestimonialDisplay } from "@/types/portfolio";

export async function TestimonialsSection() {
  const { testimonials } = await getTestimonials();

  const testimonialsWithAvatars: TestimonialDisplay[] = testimonials.map(
    (item) => ({
      ...item,
      avatarUrl: resolveTestimonialImageUrl(item),
    }),
  );

  return (
    <section className="section-padding bg-[color:var(--color-surface)]">
      <div className="container-width space-y-10 md:space-y-12">
        <SectionHeading title="My Testimonial" centered />
        <TestimonialsGrid testimonials={testimonialsWithAvatars} />
      </div>
    </section>
  );
}
