import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { Menu } from "lucide-react";
import { useEffect } from "react";

const NAV = [
  { to: "/collection", label: "Collection" },
  { to: "/story", label: "Our Story" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-hair">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10 h-16 md:h-20">
          <Link to="/" aria-label="MARÉ NOIR home" className="justify-self-start">
            <Logo className="h-3.5 md:h-4 w-auto opacity-90" />
          </Link>
          <nav className="hidden md:flex items-center gap-12 text-[11px] tracking-eyebrow uppercase text-bone/70">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-bone ${isActive ? "text-bone" : ""}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="justify-self-end flex items-center gap-6 text-[11px] tracking-eyebrow uppercase text-bone/70">
            <span className="hidden sm:inline">Cart (0)</span>
            <button aria-label="Menu" className="md:hidden">
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16 md:pt-20">{children}</main>

      <footer className="mt-32 border-t border-hair">
        <div className="px-6 md:px-10 py-16 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <Logo className="h-4 w-auto opacity-90" />
            <p className="font-display italic text-bone/60 max-w-md text-lg leading-relaxed">
              Inspired by the depths. Crafted on the Mediterranean. Released in
              numbered editions, and then no more.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] tracking-eyebrow uppercase text-bone/40">Maison</p>
            <ul className="space-y-2 text-sm text-bone/70">
              <li><Link to="/collection">Collection</Link></li>
              <li><Link to="/story">Our Story</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] tracking-eyebrow uppercase text-bone/40">Inner Circle</p>
            <p className="text-sm text-bone/70">First access. Private drops.</p>
            <form className="flex border-b border-hair" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="email"
                className="flex-1 bg-transparent py-2 text-sm placeholder:text-bone/30 focus:outline-none"
              />
              <button className="text-bone/60 hover:text-gold transition-colors text-sm">→</button>
            </form>
          </div>
        </div>
        <div className="px-6 md:px-10 py-6 border-t border-hair flex flex-col md:flex-row justify-between gap-3 text-[10px] tracking-eyebrow uppercase text-bone/40">
          <span>© MARÉ NOIR — MMXXVI</span>
          <span>Inspired by the depths</span>
          <span>SS / MMXXVI</span>
        </div>
      </footer>
    </div>
  );
};