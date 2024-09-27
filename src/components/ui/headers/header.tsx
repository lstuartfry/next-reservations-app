export default function Header({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`text-2xl ${className}`}>{children}</div>;
}
