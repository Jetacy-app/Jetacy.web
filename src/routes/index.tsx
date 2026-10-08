import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Coins,
  Compass,
  Gauge,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Plane,
  ScanLine,
  ShieldCheck,
  Users,
} from "lucide-react";
import jobCardScreenshot from "@/assets/jetacy-job-card.png.asset.json";
import appHomeScreenshot from "@/assets/jetacy-home.png.asset.json";
import stepsScreenshot from "@/assets/jetacy-steps.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jetacy | Business Jet Detailing Operations" },
      {
        name: "description",
        content:
          "Jetacy connects clients, fleet operations, and detailers through one operating system for business aviation care.",
      },
      { property: "og:title", content: "Jetacy | Business Jet Detailing Operations" },
      {
        property: "og:description",
        content:
          "One operating system for faster, clearer business jet detailing operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CALENDLY_URL =
  "https://calendly.com/jetacy/30min?hide_gdpr_banner=1&background_color=131314&text_color=f5f8f8&primary_color=449bcf";
const LINKEDIN_URL = "https://www.linkedin.com/company/jetacy";
const EMAIL = "jetacy.app@gmail.com";

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-2xl font-bold text-brand">
          Jetacy
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slatejet lg:flex">
          <a href="#who" className="transition-colors hover:text-foreground">
            Who we are
          </a>
          <a href="#interfaces" className="transition-colors hover:text-foreground">
            Interfaces
          </a>
          <a href="#workflow" className="transition-colors hover:text-foreground">
            Workflow
          </a>
          <a href="#problem" className="transition-colors hover:text-foreground">
            Why Jetacy
          </a>
          <a href="#platform" className="transition-colors hover:text-foreground">
            Platform
          </a>
          <a href="#vision" className="transition-colors hover:text-foreground">
            Vision
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Jetacy on LinkedIn"
            className="rounded-lg border border-border p-2 text-slatejet transition-colors hover:border-brand hover:text-brand"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Request Demo
          </a>
        </div>
      </div>
    </header>
  );
}

function FramedScreenshot({
  src,
  alt,
  width,
  height,
  portrait = false,
  maxWClass,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  portrait?: boolean;
  maxWClass?: string;
}) {
  return (
    <div
      className={`mx-auto w-full ${
        maxWClass ?? (portrait ? "max-w-[360px]" : "max-w-[560px]")
      }`}
    >
      <div className="rounded-[2rem] border border-border bg-surface p-3 shadow-2xl">
        <div className="overflow-hidden rounded-[1.5rem] bg-ink">
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">Business aviation · detailing operations</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            The operating system for{" "}
            <span className="text-brand">business jet detailing</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slatejet sm:text-lg">
            Jetacy connects Clients, Fleet Ops & Detailers through three
            dedicated interfaces for seamless turnaround execution.
          </p>
          <p className="mt-8 font-display text-sm font-semibold tracking-[0.2em] text-slatejet">
            3 INTERFACES · 1 EXECUTION LAYER
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-display text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Request Demo <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <FramedScreenshot
          src={appHomeScreenshot.url}
          alt="Jetacy home screen with Client, Fleet Ops, and Detailers interfaces"
          width={678}
          height={1198}
          portrait
        />
      </div>
    </section>
  );
}

const interfaces = [
  {
    name: "CLIENT",
    sub: "Direct jet care",
    color: "#FCD042",
    icon: Users,
    points: [
      "Request & track services in real time",
      "Before/after photo proof on every job",
      "Membership packages per aircraft category",
    ],
  },
  {
    name: "FLEET OPS",
    sub: "Operations control",
    color: "#48BA5D",
    icon: Plane,
    points: [
      "Calendar across all bookings & history",
      "Billing, invoices & fleet reports",
      "Integrated detailer communication",
    ],
  },
  {
    name: "DETAILERS",
    sub: "Service execution",
    color: "#449BCF",
    icon: ShieldCheck,
    points: [
      "Digital job cards & 5-step checklists",
      "GPS-tracked execution, live progress",
      "Performance profiles: level, hours, permits & qualifications",
    ],
  },
];

function WhoWeAre() {
  return (
    <section id="who" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <p className="eyebrow">Who we are</p>
        <div className="mt-4 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              One system for every detailing operation.
            </h2>
            <div className="mt-6 space-y-5 text-slatejet">
              <p className="text-base leading-relaxed sm:text-lg">
                Jetacy is a centralized operating system for business jet
                detailing services, built to eliminate operational friction by
                connecting Clients, Fleet Ops & Detailers through three
                dedicated interfaces for seamless turnaround execution.
              </p>
              <p className="text-base leading-relaxed sm:text-lg">
                Engineered to empower specialized aircraft detailers, alongside
                FBOs & Fleet Ops, with operational transparency & speed for
                BizAv presentation & care.
              </p>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <Lock className="mt-0.5 size-5 shrink-0 text-royal" />
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Not a marketplace.
                  </span>{" "}
                  No public listings or bidding wars. Your clients stay yours.
                  Discretion and reliability are built in.
                </p>
              </div>
            </div>
          </div>
          <FramedScreenshot
            src={jobCardScreenshot.url}
            alt="Jetacy live detailing job card for a Gulfstream G150 turnaround"
            width={678}
            height={614}
            maxWClass="max-w-[448px]"
          />
        </div>
      </div>
    </section>
  );
}

function Interfaces() {
  return (
    <section id="interfaces" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <p className="eyebrow">The interfaces</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
          Each role sees only what it needs.
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {interfaces.map((it) => (
            <div
              key={it.name}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-line/40"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${it.color}1a`, color: it.color }}
                >
                  <it.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-wide">
                    {it.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slatejet">
                    {it.sub}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-slatejet">
                {it.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <BadgeCheck
                      className="mt-0.5 size-4 shrink-0"
                      style={{ color: it.color }}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const workflowSteps = [
  { name: "Safety", desc: "Gates authorize ramp entry" },
  { name: "Inspect", desc: "Condition logged before work begins" },
  { name: "Detail", desc: "Checklist executed task by task" },
  { name: "Photos", desc: "Time-stamped before & after proof" },
  { name: "Complete", desc: "Job summary signed off on the ramp" },
];

function DetailerWorkflow() {
  return (
    <section id="workflow" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <p className="eyebrow">The detailer workflow</p>
        <div className="mt-4 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <FramedScreenshot
            src={stepsScreenshot.url}
            alt="Jetacy detailer checklist screen showing step 3 of 5 on an active job"
            width={678}
            height={1198}
            portrait
            maxWClass="max-w-[400px]"
          />
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Five steps, one sign-off.
            </h2>
            <ol className="mt-8 space-y-3">
              {workflowSteps.map((s, i) => (
                <li
                  key={s.name}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4"
                >
                  <span className="font-display w-6 shrink-0 text-xl font-bold text-brand">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
                      {s.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slatejet">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

const painPoints = [
  "Scheduling over phone calls & WhatsApp threads",
  "No live status. Teams keep asking if the jet is ready.",
  "Checklists & sign-offs on paper, photos lost in camera rolls",
  "Manual tail & flight details re-typed into every work order",
];

const solutions = [
  "Dynamic scheduling with automatic URGENT & RUSHED priority",
  "Live job cards with real-time stage, GO & departure countdowns",
  "Structured 5-step digital checklists with time-stamped photo proof",
  "Automated tail lookup & live flight / FBO sync on every order",
];

function ProblemSolution() {
  return (
    <section id="problem" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow">The problem · the solution</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
          Centralizing the workflow.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="eyebrow" style={{ color: "#9FA3A4" }}>
              Manual coordination
            </p>
            <ul className="mt-5 space-y-4">
              {painPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-slatejet">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-line" />
                  {p}
                </li>
              ))}
            </ul>
            </div>
          <div
            className="rounded-2xl border border-brand/30 bg-card p-7"
            style={{ boxShadow: "0 0 60px -30px #449bcf55" }}
          >
            <p className="eyebrow" style={{ color: "#449BCF" }}>
              With Jetacy: one system
            </p>
            <ul className="mt-5 space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-brand" />
                  {s}
                </li>
              ))}
            </ul>
            </div>
        </div>
      </div>
    </section>
  );
}

const platformFeatures = [
  {
    icon: ScanLine,
    title: "Automated tail lookups",
    body: "Enter a tail number and aircraft details auto-fill the work order.",
  },
  {
    icon: Compass,
    title: "Real-time traffic sync",
    body: "Live flight & FBO data keeps every job aligned with the actual schedule.",
  },
  {
    icon: CalendarClock,
    title: "Dynamic scheduling",
    body: "Auto-priority from booking time; slots shift as turnarounds change.",
  },
  {
    icon: Gauge,
    title: "Live digital job cards",
    body: "Stage, progress bar, GO time & TTD countdown visible to everyone.",
  },
  {
    icon: MapPin,
    title: "Detailer GPS tracking",
    body: "Know who is on which ramp, with verified arrival & service times.",
  },
  {
    icon: Coins,
    title: "Financial tracking",
    body: "Billing, tax invoices, payouts & audit-ready financial reporting.",
  },
];

function Platform() {
  return (
    <section id="platform" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <p className="eyebrow">The platform</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
            AI & API powered, from request to completion.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-slatejet">
            Every capability below feeds one goal: a seamless, transparent,
            reliable, on-time turnaround every single time.
          </p>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {platformFeatures.map((f) => (
            <div key={f.title} className="bg-card p-6 transition-colors hover:bg-surface">
              <div className="flex items-center gap-2.5">
                <f.icon className="size-5 shrink-0 text-brand" />
                <h3 className="font-display text-base font-semibold">{f.title}</h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slatejet">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section id="vision" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <p className="eyebrow">Vision & mission</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 size-48 rounded-full opacity-20 blur-2xl"
              style={{ background: "radial-gradient(closest-side, #449bcf, transparent)" }}
            />
            <p className="eyebrow" style={{ color: "#449BCF" }}>
              Vision
            </p>
            <p className="mt-4 font-display text-xl font-semibold leading-snug sm:text-2xl">
              A world where every business jet departs{" "}
              <span className="text-brand">presentation-perfect</span> through
              operations that are invisible, precise & effortless.
            </p>
            </div>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 size-48 rounded-full opacity-20 blur-2xl"
              style={{ background: "radial-gradient(closest-side, #fcd042, transparent)" }}
            />
            <p className="eyebrow" style={{ color: "#FCD042" }}>
              Mission
            </p>
            <p className="mt-4 font-display text-xl font-semibold leading-snug sm:text-2xl">
              Digitize aircraft detailing through{" "}
              <span className="text-royal">precision care, protection &
              presentation</span> for private & business aviation.
            </p>
            </div>
        </div>
        <p className="mt-8 text-center text-sm text-slatejet">
          Treated with care to clean, protect & preserve aircraft to the highest
          standard.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Request a demo</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              See Jetacy on your own turnaround.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slatejet">
              Book a live walkthrough. Pick a slot that suits your operation
              and we'll show you the full lifecycle: order to departure-ready.
            </p>
            <div className="mt-7 max-w-md rounded-xl border border-border bg-card p-5">
              <p className="eyebrow">Who Jetacy is built for</p>
              <ul className="mt-3 space-y-1.5 text-sm text-slatejet">
                <li className="flex items-baseline gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-royal" />
                  <span>
                    <span className="font-medium text-foreground">
                      Specialized aircraft detailers
                    </span>
                    , our primary focus
                  </span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-fleet" />
                  Fixed-Base Operators (FBOs)
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand" />
                  Business aviation service providers & handling agents
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-slatejet" />
                  Charter & private jet fleet operators
                </li>
              </ul>
              <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-slatejet">
                Two ways to come aboard: run your detailing operation on Jetacy
                as its dedicated platform, or partner with us to embed the
                technology into your existing aviation services.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              src={CALENDLY_URL}
              title="Schedule a Jetacy demo on Calendly"
              className="h-[480px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg font-bold text-brand">Jetacy</p>
          <p className="text-xs tracking-[0.14em] text-slatejet">
            JET DETAILERS · BIZAV CARE OPERATIONS
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs text-slatejet">
          <span>© 2026 Jetacy. All rights reserved.</span>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email Jetacy"
            className="rounded-lg border border-border p-2 transition-colors hover:border-brand hover:text-brand"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Jetacy on LinkedIn"
            className="rounded-lg border border-border p-2 transition-colors hover:border-brand hover:text-brand"
          >
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-ink text-foreground">
      <Nav />
      <main>
        <Hero />
        <WhoWeAre />
        <Interfaces />
        <DetailerWorkflow />
        <ProblemSolution />
        <Platform />
        <VisionMission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
