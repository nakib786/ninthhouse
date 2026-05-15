import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, ArrowUpRight, ShieldCheck, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";
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
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <footer className="relative bg-[#05070A] overflow-hidden pt-24 pb-12 border-t border-white/5">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
        >
          {/* Main Brand Tile */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-green/30 transition-colors duration-500"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-green/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img src={logo} alt="The Ninth House Logo" className="h-16 w-16 relative z-10 object-contain" />
                </div>
                <div className="leading-tight">
                  <h2 className="font-display text-2xl text-white tracking-tight">The Ninth House</h2>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-green uppercase font-bold">Immigration Solutions Inc.</p>
                </div>
              </div>
              <p className="text-lg text-white/70 font-display italic leading-relaxed max-w-sm">
                "Guiding your journey with clarity, courage, and compassion. Your trusted partner in Canadian immigration."
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              {social.map(({ Icon, label, href }) => (
                <a 
                  key={label} 
                  href={href} 
                  className="p-3 bg-white/5 rounded-full text-white/50 hover:text-green hover:bg-green/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Tile */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 lg:col-span-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-yellow/30 transition-colors duration-500"
          >
            <h3 className="font-mono text-[11px] tracking-widest text-yellow uppercase mb-8 flex items-center gap-2">
              <Globe className="w-3 h-3" /> Navigation
            </h3>
            <ul className="space-y-4">
              {[
                ["Home", "/"],
                ["Our Story", "/about"],
                ["Services", "/services"],
                ["Testimonials", "/testimonials"],
                ["Insights", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/60 hover:text-white flex items-center group/link transition-colors">
                    {label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 -translate-y-1 translate-x-1 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Tile */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 lg:col-span-5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-red/30 transition-colors duration-500"
          >
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Mail className="w-32 h-32 -rotate-12" />
             </div>
             
             <h3 className="font-mono text-[11px] tracking-widest text-red uppercase mb-8 flex items-center gap-2">
              <Mail className="w-3 h-3" /> Get In Touch
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-green" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-tighter mb-1">Office</p>
                    <p className="text-sm text-white/80 leading-relaxed">306 Waddington Dr.<br />Kamloops, BC, V2E 1P8</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-yellow" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-tighter mb-1">Call Us</p>
                    <a href="tel:+17789190026" className="text-sm text-white/80 hover:text-green transition-colors">+1 (778) 919-0026</a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-red" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-tighter mb-1">Email</p>
                    <a href="mailto:info@theninthhouseimmigration.com" className="text-sm text-white/80 hover:text-red break-all transition-colors">info@theninthhouseimmigration.com</a>
                  </div>
                </div>
                
                <div className="p-4 bg-green/10 border border-green/20 rounded-2xl">
                  <div className="flex items-center gap-2 text-green mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Verified RCIC</span>
                  </div>
                  <p className="text-[11px] text-white/60">Licensed by CICC to represent your case with integrity.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Wide Tile */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-12 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-wrap items-center justify-around gap-8 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-yellow" />
              <span className="font-mono text-[11px] text-white/70 tracking-widest uppercase">RCIC-IRB LICENSED</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            <div className="font-mono text-[11px] text-white/70 tracking-widest uppercase">CICC MEMBER</div>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            <div className="font-mono text-[11px] text-white/70 tracking-widest uppercase">CAPIC MEMBER</div>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            <div className="font-mono text-[11px] text-white/70 tracking-widest uppercase">AUTHORIZED IRB REPRESENTATIVE</div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-mono text-white/30 uppercase tracking-[0.2em]">
          <p>© 2026 The Ninth House Immigration Solutions Inc.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>Built by <a href="https://aurorabusiness.ca" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-green transition-colors">Aurora N&N</a></p>
        </div>
      </div>
    </footer>
  );
}
