import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  primary: "bg-brand-ink text-white hover:bg-black",
  secondary: "bg-brand-blue text-white hover:bg-blue-700",
  whatsapp: "bg-brand-whatsapp text-white hover:bg-[#1fb855]",
  outline: "border border-brand-border bg-white text-brand-ink hover:border-brand-ink",
  ghost: "bg-transparent text-brand-ink hover:bg-brand-surface"
};

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function Button({ href, children, className, variant = "primary", onClick, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition duration-200",
    variants[variant],
    className
  );

  if (href) {
    if (isExternal(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
