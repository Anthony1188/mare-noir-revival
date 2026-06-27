export const Logo = ({ className = "h-4" }: { className?: string }) => (
  <span
    aria-label="MARÉ NOIR"
    className={`inline-flex items-baseline font-mono-sans font-extralight uppercase leading-none text-bone select-none ${className}`}
    style={{ fontSize: "1em", letterSpacing: "0.42em" }}
  >
    <span>MARÉ</span>
    <span className="mx-[0.35em] inline-block w-[0.35em] h-[1px] bg-current opacity-60 -translate-y-[0.35em]" />
    <span>NOIR</span>
  </span>
);