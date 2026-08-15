import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  variant?: "default" | "elevated" | "gradient" | "cta" | "sand" | "dark";
};

const variantStyles = {
  default: "bg-dark text-pearl",
  dark: "bg-dark text-pearl",
  elevated: "bg-dark-elevated text-pearl",
  sand: "bg-dark-elevated text-pearl",
  gradient:
    "bg-gradient-to-b from-dark via-[#100e0a] to-dark text-pearl",
  cta: "bg-gradient-to-br from-purple-dark via-[#0a2e3d] to-purple-dark text-pearl",
} as const;

export function SectionWrapper({
  id,
  children,
  className,
  as: Component = "section",
  variant = "default",
}: SectionWrapperProps) {
  return (
    <Component
      id={id}
      className={cn("section-padding", variantStyles[variant], className)}
    >
      <div className="container-luxury">{children}</div>
    </Component>
  );
}
