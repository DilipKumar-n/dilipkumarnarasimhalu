type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="section-title">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-zinc-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
