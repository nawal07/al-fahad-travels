"use client";

import Image from "next/image";
import { useState } from "react";
import type { PartnerSlot } from "@/data/partners-content";
import { cn } from "@/lib/utils";

type PartnerLogoCardProps = {
  partner: PartnerSlot;
};

export function PartnerLogoCard({ partner }: PartnerLogoCardProps) {
  const [imgError, setImgError] = useState(false);
  const showLogo = partner.logo && !imgError;

  const initials = partner.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex h-24 items-center justify-center rounded-xl border border-border bg-card p-3 sm:h-28 sm:p-4",
        "transition-all duration-300 hover:border-gold/40 hover:shadow-soft",
      )}
    >
      {showLogo ? (
        // Light plate keeps dark brand logos (Marriott, Hilton, Qatar) legible on the dark theme
        <div className="flex size-full items-center justify-center rounded-lg bg-pearl px-4 py-2">
          <Image
            src={partner.logo!}
            alt={partner.name}
            width={160}
            height={64}
            className="max-h-full w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 text-center">
          <span
            className="flex size-12 items-center justify-center rounded-lg bg-card font-heading text-sm text-pearl/50"
            aria-hidden
          >
            {initials}
          </span>
          <span className="text-xs font-heading tracking-wide text-muted">
            {partner.name}
          </span>
        </div>
      )}
    </div>
  );
}
