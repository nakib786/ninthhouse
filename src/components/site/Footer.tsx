import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.6 6.3a5 5 0 0 1-3.5-1.5 5 5 0 0 1-1.4-3H11v12.5a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V8.4a6 6 0 1 0 5 5.9V9.9a8 8 0 0 0 4.6 1.5V7.7c-.5 0-1 0-1.4-.1l1.2-1.3z" />
    </svg>
  );
}

const social = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: TikTok, label: "TikTok", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-20 pb-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="" className="h-12 w-12 object-contain" width={48} height={48} />
              <div className="leading-tight">
                <div className="font-display text-lg">The Ninth House</div>
                <div className="font-mono text-[10px] tracking-widest text-white/60">IMMIGRATION SOLUTIONS INC.</div>
              </div>
            </div>
            <p className="font-display italic text-lg text-white/70 max-w-xs">
              Guiding your journey with clarity, courage, and compassion.
            </p>
            <div className="flex gap-4 mt-6">
              {social.map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="text-white hover:text-green transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] tracking-widest text-green uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Testimonials", "/testimonials"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white hover:text-green transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] tracking-widest text-yellow uppercase mb-5">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
               <li className="flex gap-3"><MapPin className="w-4 h-4 text-green flex-shrink-0 mt-1" aria-hidden="true" />306 Waddington Dr., Kamloops, BC, V2E 1P8</li>
               <li className="flex gap-3"><Phone className="w-4 h-4 text-yellow flex-shrink-0 mt-1" aria-hidden="true" /><a href="tel:+17789190026" className="hover:text-green">+1 (778) 919-0026</a></li>
               <li className="flex gap-3"><Mail className="w-4 h-4 text-red flex-shrink-0 mt-1" aria-hidden="true" /><a href="mailto:info@theninthhouseimmigration.com" className="hover:text-red break-all">info@theninthhouseimmigration.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 text-center font-mono text-[11px] text-white/50 tracking-wider">
          RCIC-IRB LICENSED &nbsp;|&nbsp; CICC MEMBER &nbsp;|&nbsp; CAPIC MEMBER &nbsp;|&nbsp; AUTHORIZED IRB REPRESENTATIVE
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <div>© 2025 The Ninth House Immigration Solutions Inc. All rights reserved.</div>
          <div>Designed & Built by Aurora N&N Business Solutions</div>
        </div>
      </div>
    </footer>
  );
}
