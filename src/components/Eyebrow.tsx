export const Eyebrow = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={`text-[10px] tracking-eyebrow uppercase text-bone/50 ${className}`}>
    {children}
  </span>
);