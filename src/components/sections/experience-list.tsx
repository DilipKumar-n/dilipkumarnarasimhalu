"use client";

import { useState } from "react";
import type { ExperienceItem } from "@/types/portfolio";

const PAGE_SIZE = 3;

type ExperienceListProps = {
  items: ExperienceItem[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const start = page * PAGE_SIZE;
  const visibleItems = items.slice(start, start + PAGE_SIZE);

  const goToPage = (nextPage: number) => {
    setPage(Math.max(0, Math.min(nextPage, totalPages - 1)));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        {visibleItems.map((item) => (
          <article
            key={`${item.role}-${item.company}-${item.duration}`}
            className="rounded-2xl border border-black/20 bg-white p-6 transition-colors hover:bg-white/10 md:p-8"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-bold">
                {item.role}
                <span className="block text-base text-zinc-600">{item.company}</span>
              </h3>
              <span className="shrink-0 text-sm font-medium text-zinc-500">
                {item.duration}
              </span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-zinc-600">
              {item.description.map((paragraph) => (
                <li className="m-0" key={paragraph.slice(0, 48)}>
                  {paragraph}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          className="flex flex-wrap items-center justify-center gap-3"
          aria-label="Experience pagination"
        >
          <button
            type="button"
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            className="rounded-lg border border-black px-4 py-2 text-sm font-semibold transition-colors enabled:hover:bg-black enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToPage(index)}
                aria-label={`Go to page ${index + 1}`}
                aria-current={page === index ? "page" : undefined}
                className={`flex h-9 min-w-9 items-center justify-center rounded-lg border text-sm font-semibold transition-colors ${
                  page === index
                    ? "border-black bg-black text-white"
                    : "border-black/20 bg-white hover:border-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages - 1}
            className="rounded-lg border border-black px-4 py-2 text-sm font-semibold transition-colors enabled:hover:bg-black enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );
}
