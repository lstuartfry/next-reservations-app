import { type HTMLAttributes } from "react";

export default function SubHeader({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={`text-2xl ${className}`}>{children}</div>;
}
