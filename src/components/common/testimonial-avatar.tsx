"use client";

import Image from "next/image";
import { useState } from "react";
import { getInitialsAvatarUrl } from "@/lib/avatar-url";

type TestimonialAvatarProps = {
  author: string;
  src: string;
};

export function TestimonialAvatar({ author, src }: TestimonialAvatarProps) {
  const fallbackSrc = getInitialsAvatarUrl(author);
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={author}
      width={56}
      height={56}
      className="size-14 shrink-0 rounded-full object-cover bg-zinc-200"
      onError={() => {
        if (imageSrc !== fallbackSrc) setImageSrc(fallbackSrc);
      }}
    />
  );
}
