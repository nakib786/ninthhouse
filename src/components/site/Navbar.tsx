import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-4 md:top-6 inset-x-0 z-[100] flex justify-center px-4"
    >
      <div
        className={`w-full max-w-[1180px] flex items-center justify-between gap-4 rounded-full border transition-all duration-300 ${
          scrolled || open
            ? "bg-bg/85 backdrop-blur-xl border-border shadow-[0_10px_40px_-10px_rgba(0,0,0,0.18)]"
            : "bg-bg/60 backdrop-blur-md border-white/40 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]"
        } pl-3 pr-3 md:pl-4 md:pr-2 py-2`}
      >
        <Link to="/" className="flex items-center gap-3 pl-1">
          <img src={logo} alt="The Ninth House Immigration" className="h-10 w-10 object-contain" width={40} height={40} />
          <div className="hidden sm:block leading-none">
            <div className="font-display text-[15px] font-semibold text-bg-dark">THE NINTH HOUSE</div>
            <div className="font-mono text-[8px] tracking-[0.18em] text-text-muted mt-1">IMMIGRATION SOLUTIONS INC.</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 relative">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative font-body text-[12px] uppercase tracking-[0.14em] px-4 py-2 rounded-full transition-colors duration-200 ${
                  active ? "text-red" : "text-bg-dark/80 hover:text-red"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-tubelight"
                    className="absolute inset-0 -z-10 rounded-full bg-red/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-1 w-8 bg-red rounded-full">
                      <span className="absolute -top-1 -left-2 h-3 w-12 bg-red/40 rounded-full blur-md" />
                      <span className="absolute -top-2 left-0 h-4 w-8 bg-red/30 rounded-full blur-lg" />
                    </span>
                  </motion.span>
                )}
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden md:inline-flex btn-primary !rounded-full !py-2.5 !px-5">
            Book a Consultation
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-bg-dark p-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed inset-x-4 top-24 bg-bg-dark rounded-3xl flex flex-col p-8 shadow-2xl"
          >
            <nav className="flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-display text-3xl text-white hover:text-red transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link to="/contact" className="btn-primary !rounded-full mt-8 w-full text-center">Book a Consultation</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
