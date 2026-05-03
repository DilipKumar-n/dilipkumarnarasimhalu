import Image from "next/image";
import type { ReactNode } from "react";
import { heroData, socialLinks } from "@/lib/portfolio-data";

const socialIcons: Record<string, ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.22 1.83 1.22 1.06 1.81 2.79 1.29 3.47.99.11-.77.42-1.29.76-1.59-2.67-.3-5.47-1.32-5.47-5.89 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.22a11.58 11.58 0 0 1 6.01 0c2.29-1.54 3.3-1.22 3.3-1.22.66 1.66.24 2.89.12 3.19.77.83 1.24 1.9 1.24 3.2 0 4.58-2.81 5.58-5.49 5.88.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
      />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001A2.5 2.5 0 0 0 4.98 3.5ZM3 9.5h4v11H3v-11Zm7 0h3.83v1.62h.05c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.63 4.74 6.05v5.39h-4v-4.78c0-1.14-.02-2.61-1.59-2.61-1.59 0-1.83 1.24-1.83 2.53v4.86h-4v-11Z"
      />
    </svg>
  ),
};

export function HeroSection() {
  return (
    <section id="home" className="section-padding pb-14 md:pb-16 lg:pb-20">
      <div className="container-width grid items-center gap-8 md:gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-[3.5rem] xl:text-7xl">
            {heroData.greeting}
            <span className="mt-1 block">{heroData.role}</span>
            <span className="mt-1 block text-zinc-500">{heroData.location}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 md:mt-6 md:text-lg md:leading-8">
            {heroData.summary}
          </p>
          <div className="mt-7 flex items-center gap-2 md:mt-8 md:gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-black text-zinc-800 transition-colors hover:bg-black hover:text-white"
              >
                {socialIcons[social.name] ?? social.name.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>
        <div className="order-1 mx-auto w-full max-w-[420px] md:max-w-[470px] lg:order-2 lg:max-w-[520px]">
          <div className="relative aspect-[4/4.5]">
              <Image
                src="/images/about-me.jpg"
                fill
                alt="Dilip's Photo"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 100%"
                className="object-contain object-center scale-[1.18] translate-y-3"
                priority={false}
              />
            </div>
        </div>
      </div>
    </section>
  );
}
