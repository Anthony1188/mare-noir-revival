import logoWhite from "@/assets/mn-logo-white.asset.json";

export const Logo = ({ className = "h-5" }: { className?: string }) => (
  <img
    src={logoWhite.url}
    alt="MARÉ NOIR"
    className={className}
    width={400}
    height={48}
  />
);