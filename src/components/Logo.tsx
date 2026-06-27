import logoAsset from "@/assets/mare-noir-logo.png.asset.json";

export const Logo = ({ className = "h-3" }: { className?: string }) => (
  <img
    src={logoAsset.url}
    alt="MARÉ NOIR"
    draggable={false}
    className={`w-auto select-none ${className}`}
    style={{ filter: "brightness(0) invert(1)" }}
  />
);