interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-border-1 bg-surface-2 text-text-secondary ${className}`}
    >
      {children}
    </span>
  );
}
