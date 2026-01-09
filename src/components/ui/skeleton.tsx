import { clsx } from "clsx";

interface LoaderProps {
  width?: number | string;
  height: number | string;
}

export function Skeleton({ width = "100%", height }: LoaderProps) {
  return (
    <div
      role="status"
      className={clsx(["flex animate-pulse items-center justify-center"])}
      style={{ width, height }}
    >
      <div className="h-2.5 h-full w-full bg-black/20"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
