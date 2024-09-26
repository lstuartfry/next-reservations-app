import { type HTMLAttributes } from "react";

export default function Header({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={`text-4xl ${className}`}>{children}</div>;
}
