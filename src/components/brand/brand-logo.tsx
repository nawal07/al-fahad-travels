import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  /**
   * - `full`: mark + English wordmark lockup (header, drawer)
   * - `icon`: mark only
   * - `official`: the complete logo with Arabic wordmark (footer, large placements)
   */
  variant?: "full" | "icon" | "official";
  className?: string;
  /** Renders on a dark background — swaps the wordmark to a light tone */
  onDark?: boolean;
  size?: "default" | "sm";
};

/** Intrinsic sizes of the PNGs in /public/brand */
const MARK_SIZE = { width: 800, height: 634 };
const OFFICIAL_SIZE = { width: 1200, height: 1028 };

export function BrandLogo({
  variant = "full",
  className,
  onDark = false,
  size = "default",
}: BrandLogoProps) {
  if (variant === "icon") {
    return (
      <Image
        src={IMAGES.brand.mark}
        alt=""
        aria-hidden
        {...MARK_SIZE}
        className={cn("h-12 w-auto shrink-0", className)}
      />
    );
  }

  if (variant === "official") {
    return (
      <Image
        src={onDark ? IMAGES.brand.logoLight : IMAGES.brand.logo}
        alt="Al-Fahad Travels"
        {...OFFICIAL_SIZE}
        className={cn("h-28 w-auto shrink-0", className)}
      />
    );
  }

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center gap-3",
        className,
      )}
    >
      <Image
        src={IMAGES.brand.mark}
        alt=""
        aria-hidden
        {...MARK_SIZE}
        className={cn(
          "w-auto shrink-0 transition-[height] duration-300",
          size === "sm" ? "h-11" : "h-12 lg:h-16",
        )}
      />
      <span className="inline-flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold tracking-tight transition-colors duration-300",
            size === "sm" ? "text-2xl" : "text-3xl lg:text-4xl",
            onDark ? "text-pearl" : "text-navy",
          )}
        >
          Al&#8209;Fahad
        </span>
        <span
          className={cn(
            "mt-0.5 font-heading uppercase text-gold",
            size === "sm"
              ? "text-[0.62rem] tracking-[0.35em]"
              : "text-[0.7rem] tracking-[0.4em]",
          )}
        >
          Travels
        </span>
      </span>
    </span>
  );
}
