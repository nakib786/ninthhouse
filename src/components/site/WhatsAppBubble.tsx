import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronDown } from "lucide-react";

const PHONE = "17789190026";
const DISPLAY = "+1 (778) 919-0026";

const faqs = [
  {
    q: "Do you offer a free initial consultation?",
    a: "Yes — we offer a complimentary 15-minute discovery call to understand your case before recommending next steps.",
  },
  {
    q: "Are you a licensed immigration consultant?",
    a: "Yes. Keerti Kumar is a Regulated Canadian Immigration Consultant (RCIC-IRB) in good standing with the CICC.",
  },
  {
    q: "Which services do you provide?",
    a: "Express Entry / PNP, Family Sponsorship, IRB representation, Work & Study permits, status & compliance, and specialized cases.",
  },
  {
    q: "Where are you located?",
    a: "306 Waddington Dr., Kamloops, BC. We work with clients across Canada and internationally.",
  },
  {
    q: "How quickly do you respond?",
    a: "We respond to every inquiry within 24 business hours, usually much sooner on WhatsApp.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2 7.7L.3 31.6l8.1-2.1c2.2 1.2 4.7 1.9 7.4 1.9h.1c8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4h-.1c-2.4 0-4.7-.6-6.7-1.9l-.5-.3-4.8 1.3 1.3-4.7-.3-.5C3.5 20.6 2.8 18.3 2.8 16 2.8 8.7 8.7 2.8 16 2.8c3.5 0 6.8 1.4 9.3 3.9 2.5 2.5 3.9 5.8 3.9 9.3-.1 7.3-6 13.2-13.2 13.2zm7.2-9.9c-.4-.2-2.3-1.1-2.7-1.3s-.6-.2-.9.2-1 1.3-1.3 1.5c-.2.2-.5.3-.9.1s-1.7-.6-3.2-2c-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.4-.6s.1-.5 0-.7c-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.7.1-1 .5s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.1-.4-.2-.8-.4z" />
    </svg>
  );
}

export function WhatsAppBubble() {
  const [open, setOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const sendUrl = (text: string) =>
    `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-[110] w-[92vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
            role="dialog"
            aria-label="WhatsApp chat"
          >
            <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 leading-tight">
                <div className="font-display text-lg">The Ninth House</div>
                <div className="text-[11px] text-white/80">Typically replies within an hour</div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#ECE5DD] p-4 max-h-[55vh] overflow-y-auto">
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm mb-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-1">Keerti · RCIC-IRB</div>
                <p className="text-sm text-bg-dark">
                  Hi 👋 Thanks for reaching out! Browse common questions below or message us directly.
                </p>
              </div>

              <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted px-1 mb-2">FAQ</div>
              <div className="space-y-2">
                {faqs.map((f, i) => {
                  const isOpen = openIdx === i;
                  return (
                    <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-2 p-3 text-left text-sm font-medium text-bg-dark"
                      >
                        <span>{f.q}</span>
                        <ChevronDown
                          size={16}
                          className={`flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 pb-3 text-sm text-text-muted">
                              {f.a}
                              <a
                                href={sendUrl(`Hi, I have a question about: ${f.q}`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-2 text-[#075E54] font-medium hover:underline"
                              >
                                Ask on WhatsApp →
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            <a
              href={sendUrl("Hi! I'd like to ask about Canadian immigration.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-mono text-[12px] uppercase tracking-widest py-3 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp · {DISPLAY}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className="fixed bottom-5 right-5 z-[110] w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] flex items-center justify-center hover:scale-105 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        {open ? <X size={26} /> : <WhatsAppIcon className="w-7 h-7" />}
      </button>
    </>
  );
}
