import { Phone, Menu, X, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/officers", label: "Officers" },
  { to: "/events", label: "Events" },
  { to: "/chapters", label: "Chapters" },
  { to: "/faq", label: "FAQ" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "px-3 py-2 rounded-md text-sm font-semibold transition-colors",
      isActive
        ? "text-accent"
        : "text-primary-foreground/80 hover:text-accent"
    );

  return (
    <header
      className={cn(
        "bg-primary text-primary-foreground sticky top-0 z-50 shadow-md transition-transform duration-300",
        hidden && "-translate-y-full"
      )}
    >
      {/* Top bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-custom section-padding !py-2 flex items-center justify-between gap-2 text-sm">
          <a href="tel:5713891747" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">571-389-1747</span>
          </a>
          <div className="hidden sm:flex items-center gap-1">
            <Sparkles className="h-4 w-4 fill-warning text-warning" />
            <span className="font-semibold">Student-led</span>
            <span className="text-primary-foreground/70">TJ debate coaches</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-custom section-padding !py-4">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
              <span className="text-2xl font-bold text-accent-foreground">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-display">Speech Spark</h1>
              <p className="text-xs text-primary-foreground/70">Free middle school debate camp</p>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <a
              href="#contact-form"
              className="ml-3 flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-bold hover:bg-accent/90 transition-all shadow-glow"
            >
              Sign Up
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-primary-foreground/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden mt-4 flex flex-col gap-1 pb-2 animate-fade-in">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-3 rounded-md text-base font-semibold transition-colors",
                    isActive
                      ? "bg-primary-foreground/10 text-accent"
                      : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="#contact-form"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-bold hover:bg-accent/90 transition-all"
            >
              Sign Up
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
