"use client";

import { useState } from "react";
import { TestimonialAvatar } from "@/components/common/testimonial-avatar";
import { TestimonialModal } from "@/components/sections/testimonial-modal";
import type { TestimonialDisplay } from "@/types/portfolio";

const PREVIEW_CHAR_LIMIT = 220;

type TestimonialsGridProps = {
  testimonials: TestimonialDisplay[];
};

function getPreviewQuote(quote: string): string {
  if (quote.length <= PREVIEW_CHAR_LIMIT) return quote;
  const trimmed = quote.slice(0, PREVIEW_CHAR_LIMIT).trimEnd();
  const lastSpace = trimmed.lastIndexOf(" ");
  const cut = lastSpace > PREVIEW_CHAR_LIMIT * 0.6 ? trimmed.slice(0, lastSpace) : trimmed;
  return `${cut}…`;
}

export function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  const [activeTestimonial, setActiveTestimonial] =
    useState<TestimonialDisplay | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item, index) => {
          const isTruncated = item.quote.length > PREVIEW_CHAR_LIMIT;
          const previewQuote = isTruncated
            ? getPreviewQuote(item.quote)
            : item.quote;

          return (
            <article
              key={`${item.author}-${index}`}
              className="surface-card flex flex-col p-6"
            >
              <p className="line-clamp-6 flex-1 leading-7 text-zinc-600">
                &ldquo;{previewQuote}&rdquo;
              
                {isTruncated && (
                  <button
                    type="button"
                    onClick={() => setActiveTestimonial(item)}
                    className="mt-3 w-fit text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline"
                  >
                    show more
                  </button>
                )}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <TestimonialAvatar author={item.author} src={item.avatarUrl} />
                <div>
                  <p className="font-bold">{item.author}</p>
                  <p className="text-sm text-zinc-500">{item.designation}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {activeTestimonial && (
        <TestimonialModal
          testimonial={activeTestimonial}
          onClose={() => setActiveTestimonial(null)}
        />
      )}
    </>
  );
}
