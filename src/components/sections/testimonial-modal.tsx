"use client";

import { useEffect, useId } from "react";
import { TestimonialAvatar } from "@/components/common/testimonial-avatar";
import type { TestimonialDisplay } from "@/types/portfolio";

type TestimonialModalProps = {
  testimonial: TestimonialDisplay;
  onClose: () => void;
};

export function TestimonialModal({
  testimonial,
  onClose,
}: TestimonialModalProps) {
  const titleId = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close testimonial"
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="surface-card relative z-10 max-h-[min(90vh,720px)] w-full max-w-2xl overflow-y-auto p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg px-2 py-1 text-2xl leading-none text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
        >
          &times;
        </button>
        <p className="pr-8 leading-7 text-zinc-600">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
          <TestimonialAvatar
            author={testimonial.author}
            src={testimonial.avatarUrl}
          />
          <div>
            <p id={titleId} className="font-bold">
              {testimonial.author}
            </p>
            <p className="text-sm text-zinc-500">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
