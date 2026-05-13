export type Seo = { title: string; description: string };

export const seo = {
  home: { title: "The Ninth House Immigration Solutions Inc. | RCIC-IRB Licensed | Kamloops, BC", description: "Licensed Canadian immigration consulting in Kamloops, BC. Led by Keerti Kumar, RCIC-IRB. Express Entry, PNP, IRB representation, work and study permits." },
  about: { title: "About Keerti Kumar, RCIC-IRB | The Ninth House Immigration", description: "Meet Keerti Kumar, RCIC-IRB Class L3, Founder of The Ninth House Immigration Solutions Inc. — 10+ years of immigration expertise rooted in clarity, courage and compassion." },
  services: { title: "Immigration Services | Express Entry, IRB, PNP & More | The Ninth House", description: "Full-service immigration consulting: IRB representation, permanent residency, family sponsorship, work and study permits, and specialized humanitarian cases." },
  testimonials: { title: "Client Success Stories | The Ninth House Immigration", description: "Real families. Real results. Read what clients across Canada say about working with Keerti Kumar, RCIC-IRB." },
  blog: { title: "Immigration Insights & News | The Ninth House Immigration", description: "Updates, guides, and immigration news from Keerti Kumar, RCIC-IRB." },
  contact: { title: "Contact Us | Book a Free Consultation | The Ninth House Immigration", description: "Book a free immigration consultation with Keerti Kumar, RCIC-IRB. We respond within 24 hours." },
} as const;
