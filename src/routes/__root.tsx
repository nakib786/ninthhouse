import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-semibold text-bg-dark">404</h1>
        <p className="mt-4 text-text-muted">This page doesn't exist.</p>
        <Link to="/" className="btn-primary mt-8 inline-flex">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-text-muted">Try refreshing or head back home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Ninth House Immigration Solutions Inc. | RCIC-IRB Licensed | Kamloops, BC" },
      { name: "description", content: "Licensed Canadian immigration consulting in Kamloops, BC. Led by Keerti Kumar, RCIC-IRB." },
      { name: "author", content: "The Ninth House Immigration Solutions Inc." },
      { property: "og:title", content: "The Ninth House Immigration Solutions Inc. | RCIC-IRB Licensed | Kamloops, BC" },
      { property: "og:description", content: "Licensed Canadian immigration consulting in Kamloops, BC. Led by Keerti Kumar, RCIC-IRB." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Ninth House Immigration Solutions Inc. | RCIC-IRB Licensed | Kamloops, BC" },
      { name: "twitter:description", content: "Licensed Canadian immigration consulting in Kamloops, BC. Led by Keerti Kumar, RCIC-IRB." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/551d0378-f127-45a6-82cc-168f3044b6af/id-preview-a4acd9b2--6626e971-d06a-4149-a37c-3c55ad400bc4.lovable.app-1778654329554.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/551d0378-f127-45a6-82cc-168f3044b6af/id-preview-a4acd9b2--6626e971-d06a-4149-a37c-3c55ad400bc4.lovable.app-1778654329554.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-red focus:text-white focus:px-4 focus:py-2">Skip to content</a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main id="main" className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}
