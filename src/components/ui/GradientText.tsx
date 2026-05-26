interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export default function GradientText({
  children,
  className = '',
  from = 'from-accent-400',
  to = 'to-accent-600',
}: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent gradient-hero ${className}`}>
      {children}
    </span>
  );
}
