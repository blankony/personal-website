"use client";

import Image from "next/image";
import { useState } from "react";

export default function LocalImage({ src, alt, sizes, priority = false, className = "", placeholder }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`grid place-items-center bg-[#edf2ff] px-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#1f5eff]/80 ${className}`}>
        {placeholder}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
