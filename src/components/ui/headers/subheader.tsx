export default function SubHeader({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`text-xl ${className}`}>{children}</div>;
}
