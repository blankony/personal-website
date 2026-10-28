"use client";

import Image from "next/image";
import { useState } from "react";

export default function LocalImage({ src, alt, sizes, priority = false, className = "", placeholder, fallback }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    if (fallback) return fallback;
    return (
      <div className={`grid place-items-center bg-tint px-4 text-center font-mono text-xs font-bold uppercase tracking-[0.12em] text-signal/80 ${className}`}>
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