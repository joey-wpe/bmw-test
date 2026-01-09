import { clsx } from "clsx";
import Link from "next/link";

interface ButtonProps {
  url: string;
  label: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
  target?: string;
}

export function Button({
  url,
  label,
  variant = "primary",
  size = "md",
  className = "",
  target = "",
}: ButtonProps) {
  return (
    <Link
      href={url}
      target={target}
      className={clsx([
        "text-nowrap",
        className,
        variant === "primary" && "btn-primary",
        variant === "secondary" && "btn-secondary",
        size === "md" && "h-[40px]",
        size === "lg" && "h-[50px] text-base",
      ])}
    >
      {label}
    </Link>
  );
}
