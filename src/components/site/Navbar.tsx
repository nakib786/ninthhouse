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
    const onScroll = () => setScrolled(window.scrollY > 80);
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
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
        scrolled || open ? "bg-bg shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="The Ninth House Immigration" className="h-12 w-12 object-contain" width={48} height={48} />
          <div className="hidden sm:block leading-none">
            <div className="font-display text-[17px] font-semibold text-bg-dark">THE NINTH HOUSE</div>
            <div className="font-mono text-[9px] tracking-[0.18em] text-text-muted mt-1">IMMIGRATION SOLUTIONS INC.</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body text-[13px] uppercase tracking-[0.16em] transition-colors duration-200 hover:text-red pb-1 ${
                  active ? "text-bg-dark border-b-2 border-red" : "text-bg-dark"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link to="/contact" className="btn-primary">Book a Consultation</Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-bg-dark"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-20 bg-bg-dark flex flex-col justify-between p-8"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-display text-4xl text-white hover:text-red transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link to="/contact" className="btn-primary w-full text-center">Book a Consultation</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
