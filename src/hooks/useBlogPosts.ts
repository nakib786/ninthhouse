// Replace this hook with a real Wix Headless API fetch later.
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  coverImage: string | null;
  publishedDate: string;
  category: string;
};

const POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "express-entry-2025-changes",
    title: "Express Entry in 2025: What's Changing and How to Prepare",
    excerpt: "Category-based draws, CRS thresholds, and language requirements are evolving. Here's what skilled workers need to know to stay competitive.",
    body: "IRCC continues to refine the Express Entry system in 2025, with more category-based draws targeting healthcare, trades, and French-speaking candidates...",
    coverImage: null,
    publishedDate: "2025-04-12",
    category: "Express Entry",
  },
  {
    id: "2",
    slug: "bc-pnp-skilled-worker-guide",
    title: "British Columbia PNP: A Practical Guide for Skilled Workers",
    excerpt: "Provincial nominations from BC remain one of the most reliable routes to permanent residency. We break down eligibility and the application timeline.",
    body: "BC PNP runs multiple streams suited to different professions and experience levels...",
    coverImage: null,
    publishedDate: "2025-03-22",
    category: "PNP",
  },
  {
    id: "3",
    slug: "spousal-sponsorship-common-mistakes",
    title: "Spousal Sponsorship: 7 Common Mistakes That Cause Refusals",
    excerpt: "Genuineness of relationship, financial documentation, and proof of cohabitation often trip up applicants. Avoid these pitfalls.",
    body: "Family class spousal sponsorship is intended to be straightforward, but refusals happen for predictable reasons...",
    coverImage: null,
    publishedDate: "2025-03-04",
    category: "Family Sponsorship",
  },
  {
    id: "4",
    slug: "refugee-appeal-rad-process",
    title: "Inside the RAD: What Happens After a Refused Refugee Claim",
    excerpt: "An RPD refusal is not the end. The Refugee Appeal Division offers a meaningful chance to challenge errors of law and fact.",
    body: "Many claimants do not realise they have appeal rights to the Refugee Appeal Division within strict deadlines...",
    coverImage: null,
    publishedDate: "2025-02-18",
    category: "IRB",
  },
  {
    id: "5",
    slug: "pgwp-eligibility-2025",
    title: "PGWP Eligibility in 2025: New Rules for International Graduates",
    excerpt: "Field-of-study restrictions and program length requirements have changed. Here's how recent graduates should plan.",
    body: "The Post-Graduation Work Permit program saw significant tightening in 2024 and 2025...",
    coverImage: null,
    publishedDate: "2025-02-02",
    category: "Work Permits",
  },
  {
    id: "6",
    slug: "super-visa-vs-pgp",
    title: "Super Visa vs Parents and Grandparents Program: Which Is Right for Your Family?",
    excerpt: "Both pathways bring parents to Canada, but the trade-offs in time, cost, and permanence differ significantly.",
    body: "The Super Visa offers immediate certainty for many families while PGP applicants wait years in the lottery system...",
    coverImage: null,
    publishedDate: "2025-01-15",
    category: "Immigration News",
  },
  {
    id: "7",
    slug: "h-and-c-applications-explained",
    title: "Humanitarian & Compassionate Applications: When and Why",
    excerpt: "H&C is a discretionary remedy of last resort. Understand when it applies and what evidence makes a strong case.",
    body: "Humanitarian and Compassionate applications under section 25 of the IRPA are powerful but limited...",
    coverImage: null,
    publishedDate: "2024-12-20",
    category: "IRB",
  },
];

export function useBlogPosts() {
  // Swap with real fetch when Wix Headless API is connected.
  return { posts: POSTS, isLoading: false };
}

export function useBlogPost(slug: string) {
  const post = POSTS.find((p) => p.slug === slug);
  return { post, isLoading: false };
}
