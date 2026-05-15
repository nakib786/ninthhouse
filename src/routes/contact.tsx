import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Globe, Loader2, CheckCircle, Facebook, Youtube, Instagram, ArrowRight, MessageSquare, Clock, Shield } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: seo.contact.title }, { name: "description", content: seo.contact.description }] }),
  component: Contact,
});

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Please provide at least 20 characters"),
  referral: z.string().min(1, "Please select an option"),
});
type FormData = z.infer<typeof schema>;

const services = ["Express Entry / PNP", "Family Sponsorship", "IRB Representation", "Work / Study Permit", "Status & Compliance", "Specialized Services", "Not Sure / General Inquiry"];
const referrals = ["Google Search", "Referral", "Facebook", "Instagram", "YouTube", "TikTok", "Other"];

function TikTok({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M19.6 6.3a5 5 0 0 1-3.5-1.5 5 5 0 0 1-1.4-3H11v12.5a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V8.4a6 6 0 1 0 5 5.9V9.9a8 8 0 0 0 4.6 1.5V7.7c-.5 0-1 0-1.4-.1l1.2-1.3z" /></svg>;
}

function FloatingField({
  label,
  error,
  children,
  id,
  value,
}: { label: string; error?: string; children: React.ReactElement; id: string; value?: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative group">
      <div className={`
        absolute left-0 transition-all duration-300 pointer-events-none z-10
        ${(isFocused || hasValue) ? "-top-2 text-[10px] text-green font-bold uppercase tracking-tighter" : "top-4 text-base text-text-muted"}
      `}>
        {label}
      </div>
      {/* Clone children to add focus events */}
      {React.cloneElement(children, {
        onFocus: (e: any) => {
          setIsFocused(true);
          children.props.onFocus?.(e);
        },
        onBlur: (e: any) => {
          setIsFocused(false);
          children.props.onBlur?.(e);
        }
      })}
      <div className={`absolute bottom-0 left-0 h-[2px] bg-green transition-all duration-500 ease-out ${isFocused ? "w-full" : "w-0"}`} />
      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -10 }}
            className="text-[11px] text-red mt-1 font-mono uppercase tracking-tighter"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls = "w-full bg-transparent border-0 border-b border-black/10 focus:border-green/30 outline-none pt-6 pb-2 text-base focus:ring-0 transition-all duration-300";

function Contact() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({ 
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      referral: ""
    }
  });

  const formValues = watch();

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((r) => setTimeout(r, 1200));
      console.info("Contact submission", { ...data, submittedAt: new Date().toISOString() });
      setDone(true);
      toast.success("Message sent successfully!");
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <div className="bg-bg min-h-screen selection:bg-green/10 selection:text-green">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-green/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 0], 
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-1/4 w-[700px] h-[700px] bg-yellow/5 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 grain opacity-40" />
      </div>

      <main className="relative z-10 pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Header Section */}
          <div className="mb-20">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-green" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-green font-bold">Contact Us</span>
              </div>
              <h1 className="font-display text-5xl md:text-8xl tracking-tighter leading-[0.9] mb-8">
                Let's Build Your <br />
                <span className="italic text-green">Canadian Future</span> Together.
              </h1>
              <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                Whether it's a refugee appeal, family sponsorship, or a complex work permit — we provide the clarity and courage you need.
              </p>
            </Reveal>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Contact Form Card - Main Block */}
            <div className="lg:col-span-8 lg:row-span-4 bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] rounded-[2rem] overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                <MessageSquare className="w-64 h-64 -mr-20 -mt-20" />
              </div>
              
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle className="w-10 h-10 text-green" />
                    </div>
                    <h2 className="font-display text-4xl mb-4">Message Sent!</h2>
                    <p className="text-text-muted text-lg max-w-md mx-auto mb-10">
                      Thank you for reaching out. Keerti Kumar and our team will review your inquiry and respond within 24 hours.
                    </p>
                    <button 
                      onClick={() => setDone(false)}
                      className="btn-outline !px-8"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-10 relative z-10"
                  >
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                      <FloatingField label="Full Name" error={errors.name?.message} id="name" value={formValues.name}>
                        <input id="name" {...register("name")} className={inputCls} autoComplete="name" />
                      </FloatingField>
                      
                      <FloatingField label="Email Address" error={errors.email?.message} id="email" value={formValues.email}>
                        <input id="email" type="email" {...register("email")} className={inputCls} autoComplete="email" />
                      </FloatingField>

                      <FloatingField label="Phone Number" error={errors.phone?.message} id="phone" value={formValues.phone}>
                        <input id="phone" type="tel" {...register("phone")} className={inputCls} autoComplete="tel" />
                      </FloatingField>

                      <FloatingField label="Service Required" error={errors.service?.message} id="service" value={formValues.service}>
                        <select id="service" {...register("service")} className={inputCls + " appearance-none cursor-pointer"}>
                          <option value="" disabled></option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </FloatingField>
                    </div>

                    <FloatingField label="Your Message" error={errors.message?.message} id="message" value={formValues.message}>
                      <textarea id="message" rows={4} {...register("message")} className={inputCls + " resize-none"} />
                    </FloatingField>

                    <FloatingField label="How did you find us?" error={errors.referral?.message} id="referral" value={formValues.referral}>
                      <select id="referral" {...register("referral")} className={inputCls + " appearance-none cursor-pointer"}>
                        <option value="" disabled></option>
                        {referrals.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </FloatingField>

                    <div className="flex items-center justify-between pt-4">
                      <div className="hidden md:flex items-center gap-4 text-xs font-mono text-text-muted uppercase tracking-widest">
                        <Clock className="w-4 h-4 text-yellow" />
                        Avg. Response: 2 hours
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="btn-primary !py-5 !px-10 group shadow-[0_20px_40px_-12px_rgba(204,0,0,0.3)] hover:shadow-[0_20px_40px_-12px_rgba(204,0,0,0.5)] flex items-center gap-3"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Info Card - Email/Phone */}
            <div className="lg:col-span-4 lg:row-span-2 bg-bg-dark text-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
              <div>
                <Shield className="w-10 h-10 text-yellow mb-8" />
                <h3 className="font-display text-3xl mb-6">Connect Directly</h3>
                <div className="space-y-6">
                  <a href="mailto:info@theninthhouseimmigration.com" className="flex flex-col group/link">
                    <span className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1">Email Us</span>
                    <span className="text-lg group-hover/link:text-green transition-colors break-all">info@theninthhouseimmigration.com</span>
                  </a>
                  <a href="tel:+17789190026" className="flex flex-col group/link">
                    <span className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1">Call Us</span>
                    <span className="text-lg group-hover/link:text-yellow transition-colors">+1 (778) 919-0026</span>
                  </a>
                </div>
              </div>
              <div className="mt-10 flex gap-4">
                {[Facebook, Youtube, Instagram, TikTok].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-bg-dark transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Location Card */}
            <div className="lg:col-span-4 lg:row-span-2 bg-navy-light p-10 rounded-[2rem] shadow-lg relative overflow-hidden flex flex-col justify-between group">
              <motion.div 
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none"
              >
                <MapPin className="w-48 h-48" />
              </motion.div>
              <div>
                <MapPin className="w-10 h-10 text-green mb-8" />
                <h3 className="font-display text-3xl mb-4">Our Office</h3>
                <p className="text-text-muted leading-relaxed max-w-[240px]">
                  306 Waddington Dr., Kamloops, BC, V2E 1P8
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-black/5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2">Office Hours</div>
                <div className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM PST</div>
                <div className="text-sm opacity-60 italic">Saturday by Appointment</div>
              </div>
            </div>

            {/* Map Integration / Decorative Card */}
            <div className="lg:col-span-12 bg-white/20 backdrop-blur-md border border-white/40 p-2 rounded-[2.5rem] shadow-inner relative overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-navy/5 flex items-center justify-center">
                 {/* Decorative Map Visual */}
                 <div className="relative w-full h-full grayscale opacity-40 mix-blend-overlay">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
                      alt="Map texture" 
                      className="w-full h-full object-cover"
                    />
                 </div>
                 <div className="absolute flex flex-col items-center">
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 bg-red rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(204,0,0,0.4)]"
                    >
                      <MapPin className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="mt-4 bg-white px-6 py-3 rounded-2xl shadow-xl border border-border">
                       <span className="font-display text-xl">Ninth House | Kamloops</span>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Trust Badges */}
      <section className="py-20 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-3">
              <img src="/Licensed.png" alt="CICC" className="h-14 w-auto object-contain" />
              <div className="font-mono text-[9px] uppercase tracking-widest leading-tight">CICC<br />Licensed</div>
            </div>
            <div className="flex items-center gap-3">
              <img src="/capic-member.png" alt="CAPIC" className="h-14 w-auto object-contain" />
              <div className="font-mono text-[9px] uppercase tracking-widest leading-tight">CAPIC<br />Member</div>
            </div>
            <div className="flex items-center gap-3">
              <img src="/Canada.png" alt="Canada" className="h-12 w-auto object-contain" />
              <div className="font-mono text-[9px] uppercase tracking-widest leading-tight">Federal<br />Services</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Internal React variable for cloning
import React from "react";
