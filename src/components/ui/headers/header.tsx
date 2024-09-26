export default function Header({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`text-4xl ${className}`}>{children}</div>;
}
