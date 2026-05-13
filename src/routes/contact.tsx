import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Globe, Loader2, CheckCircle, Facebook, Youtube, Instagram } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
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

function Field({
  label,
  error,
  children,
  htmlFor,
}: { label: string; error?: string; children: React.ReactNode; htmlFor: string }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="font-mono text-[11px] uppercase tracking-widest text-text-muted block mb-2">{label}</label>
      {children}
      {error && <div className="text-[13px] text-red mt-1.5">{error}</div>}
    </div>
  );
}

const inputCls =
  "w-full bg-transparent border-0 border-b border-input focus:border-red outline-none py-3 text-base focus:ring-0 transition-colors duration-200";

function Contact() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      // Replace with real webhook URL after export
      await new Promise((r) => setTimeout(r, 900));
      console.info("Contact submission", { ...data, submittedAt: new Date().toISOString() });
      setDone(true);
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <>
      <PageHero title="Get In Touch" breadcrumb="Contact" subtitle="Book a free consultation or send us a message. We respond within 24 hours." />

      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid lg:grid-cols-[38%_1fr] gap-16">
          {/* LEFT */}
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">We're Here to Help</h2>
            <p className="mt-4 text-text-muted">Whether you have a quick question or a complex case, Keerti Kumar and the team are ready to listen.</p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-3"><MapPin className="w-5 h-5 text-red mt-0.5 flex-shrink-0" aria-hidden="true" /><span>306 Waddington Dr., Kamloops, BC, V2E 1P8</span></li>
              <li className="flex gap-3"><Phone className="w-5 h-5 text-red mt-0.5 flex-shrink-0" aria-hidden="true" /><a href="tel:+17789190026" className="hover:text-red">+1 (778) 919-0026</a></li>
              <li className="flex gap-3"><Mail className="w-5 h-5 text-red mt-0.5 flex-shrink-0" aria-hidden="true" /><a href="mailto:info@theninthhouseimmigration.com" className="hover:text-red break-all">info@theninthhouseimmigration.com</a></li>
              <li className="flex gap-3"><Globe className="w-5 h-5 text-red mt-0.5 flex-shrink-0" aria-hidden="true" /><span>www.theninthhouseimmigration.com</span></li>
            </ul>

            <div className="font-mono text-xs text-text-muted mt-6">Mon–Fri: 9:00 AM – 6:00 PM PST &nbsp;|&nbsp; Sat: By Appointment</div>

            <div className="flex gap-4 mt-6">
              {[Facebook, Youtube, Instagram, TikTok].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="text-red hover:text-navy transition-colors"><Icon className="w-5 h-5" /></a>
              ))}
            </div>

            <div className="mt-10 aspect-[4/3] bg-navy relative overflow-hidden flex items-center justify-center text-white">
              <MapPin className="w-8 h-8 text-red mr-2" aria-hidden="true" />
              <div className="font-display text-2xl">Kamloops, BC</div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={0.05}>
            <div className="bg-white p-8 md:p-12 border border-border">
              {done ? (
                <div className="py-20 text-center">
                  <CheckCircle className="w-12 h-12 text-red mx-auto mb-4" aria-hidden="true" />
                  <div className="font-display text-3xl">Thank you! We will respond within 24 hours.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-7" noValidate>
                  <div className="grid md:grid-cols-2 gap-7">
                    <Field label="Full Name" error={errors.name?.message} htmlFor="name">
                      <input id="name" {...register("name")} className={inputCls} autoComplete="name" />
                    </Field>
                    <Field label="Email" error={errors.email?.message} htmlFor="email">
                      <input id="email" type="email" {...register("email")} className={inputCls} autoComplete="email" />
                    </Field>
                  </div>
                  <div className="grid md:grid-cols-2 gap-7">
                    <Field label="Phone (optional)" error={errors.phone?.message} htmlFor="phone">
                      <input id="phone" type="tel" {...register("phone")} className={inputCls} autoComplete="tel" />
                    </Field>
                    <Field label="Service Interested In" error={errors.service?.message} htmlFor="service">
                      <select id="service" {...register("service")} className={inputCls + " appearance-none"} defaultValue="">
                        <option value="" disabled>Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field label="Message" error={errors.message?.message} htmlFor="message">
                    <textarea id="message" rows={5} {...register("message")} className={inputCls + " resize-none"} />
                  </Field>
                  <Field label="How did you hear about us?" error={errors.referral?.message} htmlFor="referral">
                    <select id="referral" {...register("referral")} className={inputCls + " appearance-none"} defaultValue="">
                      <option value="" disabled>Select an option</option>
                      {referrals.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </Field>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-red text-white font-mono text-[13px] uppercase tracking-widest py-4 hover:bg-bg-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                    {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
