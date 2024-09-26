export default function SubHeader({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`text-2xl ${className}`}>{children}</div>;
}
