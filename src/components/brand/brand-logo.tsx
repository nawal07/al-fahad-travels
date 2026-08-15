import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "full" | "icon";
  className?: string;
  /** Renders on a dark background — swaps the wordmark to a light tone */
  onDark?: boolean;
  size?: "default" | "sm";
};

export function BrandLogo({
  variant = "full",
  className,
  onDark = false,
  size = "default",
}: BrandLogoProps) {
  if (variant === "icon") {
    return (
      <span
        className={cn(
          "relative inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-purple font-display text-base font-bold tracking-tight text-pearl",
          className,
        )}
        aria-hidden
      >
        AF
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 flex-col leading-none",
        className,
      )}
    >
      <span
        className={cn(
          "font-display font-bold tracking-tight transition-colors duration-300",
          size === "sm" ? "text-xl" : "text-2xl lg:text-3xl",
          onDark ? "text-pearl" : "text-navy",
        )}
      >
        Al&#8209;Fahad
      </span>
      <span
        className={cn(
          "mt-0.5 font-heading uppercase text-gold",
          size === "sm"
            ? "text-[0.55rem] tracking-[0.35em]"
            : "text-[0.62rem] tracking-[0.4em]",
        )}
      >
        Travels
      </span>
    </span>
  );
}
