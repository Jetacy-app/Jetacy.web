import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  CalendarClock,
  Camera,
  Clock,
  Coins,
  Compass,
  Droplets,
  Gauge,
  Linkedin,
  Mail,
  MapPin,
  Plane,
  Radar,
  ScanLine,
  ShieldCheck,
  UserCheck,
  Users,
  Zap,
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
          "Jetacy connects clients, fleet operations & detailers through one operating system for business aviation care.",
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
          <a href="#problem" className="transition-colors hover:text-foreground">
            Why Jetacy
          </a>
          <a href="#interfaces" className="transition-colors hover:text-foreground">
            Interfaces
          </a>
          <a href="#workflow" className="transition-colors hover:text-foreground">
            Workflow
          </a>
          <a href="#workforce" className="transition-colors hover:text-foreground">
            Workforce
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
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[340px_1fr] lg:gap-16">
        <div className="order-1 lg:order-2">
          <p className="eyebrow">WHO WE ARE</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem]">
            Business Jet Detailing
            <br className="hidden sm:block" />
            <span className="text-brand">operating system</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slatejet sm:text-lg">
            Engineered to empower specialized aircraft detailers, alongside FBOs & Fleet Ops, to digitize the entire detailing lifecycle & simplify the workflow. Connecting Clients, Fleet Ops & Detailers through three dedicated interfaces, with transparency & speed.
          </p>
          <p className="mt-8 font-display text-sm font-semibold tracking-[0.2em] text-slatejet">
            3 INTERFACES · 1 EXECUTION LAYER
          </p>
        </div>
        <div className="order-2 lg:order-1">
          <FramedScreenshot
            src={appHomeScreenshot.url}
            alt="Jetacy home screen with Client, Fleet Ops & Detailers interfaces"
            width={678}
            height={1198}
            portrait
            maxWClass="max-w-[300px] lg:max-w-[340px]"
          />
        </div>
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
    line: "Request & track jobs, with photo proof.",
  },
  {
    name: "FLEET OPS",
    sub: "Operations control",
    color: "#48BA5D",
    icon: Plane,
    line: "Calendar, billing & reports in one view.",
  },
  {
    name: "DETAILERS",
    sub: "Service execution",
    color: "#449BCF",
    icon: ShieldCheck,
    line: "Job cards, checklists & performance profiles.",
  },
];

const jobCardTags = [
  { icon: Plane, label: "Aircraft & location" },
  { icon: Radar, label: "Ramp & telemetry" },
  { icon: UserCheck, label: "Assigned detailer" },
  { icon: Gauge, label: "Status & progress" },
  { icon: Zap, label: "Auto priority tags" },
  { icon: Droplets, label: "Stain removal flags" },
  { icon: Clock, label: "Start & turnaround time" },
  { icon: Camera, label: "Before & after photos" },
];

function WhoWeAre() {
  return (
    <section id="who" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">LIVE JOB CARDS</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              A dedicated job card for each order.
            </h2>
          </div>
          <FramedScreenshot
            src={jobCardScreenshot.url}
            alt="Jetacy live detailing job card for a Gulfstream G150 turnaround"
            width={678}
            height={614}
            maxWClass="max-w-[448px]"
          />
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
          {jobCardTags.map((t) => (
            <div key={t.label} className="flex justify-center">
              <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-foreground">
                <t.icon className="size-3.5 shrink-0 text-brand" />
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Interfaces() {
  return (
    <section id="interfaces" className="py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-10" />
        <p className="eyebrow">The interfaces</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
          Each role, its own view.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {interfaces.map((it) => (
            <div
              key={it.name}
              className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-line/40"
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
              <p className="mt-3 text-sm text-slatejet">{it.line}</p>
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
  { name: "Detail", desc: "Checklist executed task by task. Stain removal tiers." },
  { name: "Photos", desc: "Time-stamped before & after proof" },
  { name: "Complete", desc: "Job summary signed off on the ramp" },
];

function DetailerWorkflow() {
  return (
    <section id="workflow" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <div className="grid items-center justify-center gap-10 lg:grid-cols-[auto_auto] lg:gap-16">
          <div className="order-last lg:order-first">
            <FramedScreenshot
              src={stepsScreenshot.url}
              alt="Jetacy detailer checklist screen showing step 3 of 5 on an active job"
              width={678}
              height={1198}
              portrait
              maxWClass="max-w-[300px] lg:max-w-[360px] lg:w-[360px]"
            />
          </div>
          <div>
            <p className="eyebrow">The detailer workflow</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Five steps, one sign-off.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slatejet">
              The same sequence on every job, logged step by step.
            </p>
            <ol className="mt-8 space-y-3.5">
              {workflowSteps.map((s, i) => (
                <li
                  key={s.name}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
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

const workforceSteps = [
  { name: "Apply", desc: "Candidates sign up in the app." },
  { name: "Approve", desc: "Your team interviews them & clears permits." },
  { name: "Qualify", desc: "Train cleaners into detailers & supervise them." },
  { name: "Accept", desc: "Approved detailers take jobs & work by the hour." },
  { name: "Get paid", desc: "Hours tracked with automated weekly payouts." },
  { name: "Grow", desc: "Performance-based profiles track progress & rank." },
];

function WorkforceModule() {
  return (
    <section id="workforce" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <div
          className="relative overflow-hidden rounded-3xl border border-brand/30 bg-surface p-7 sm:p-10"
          style={{ boxShadow: "0 0 0 1px #449bcf1a, 0 30px 80px -40px #000000, 0 0 120px -50px #449bcf88" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 size-[28rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(closest-side, #449bcf, transparent)" }}
          />
          <div className="relative text-center">
            <p className="eyebrow" style={{ color: "#449BCF" }}>
              Workforce module
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              On-Demand Hourly Workforce Module
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slatejet">
              An added layer with on-demand, hourly paid staff, without growing
              full-time headcount.
            </p>
          </div>
          <ol className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workforceSteps.map((s, i) => (
              <li
                key={s.name}
                className="rounded-2xl border border-border bg-ink/70 p-5 transition-colors hover:border-brand/50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand-soft font-display text-sm font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
                    {s.name}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slatejet">{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="relative mt-10 text-center font-display text-xl font-semibold sm:text-2xl">
            Not a marketplace.{" "}
            <span className="text-brand">You decide who works.</span>
          </p>
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
  "Live job cards with real-time stage & departure countdown",
  "Structured 5-step digital checklists with time-stamped photo proof",
  "Automated tail lookup & live flight / FBO sync on every order",
];

function ProblemSolution() {
  return (
    <section id="problem" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow">The problem · the solution</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
          Centralized workflow.
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
  { icon: ScanLine, title: "Tail auto-lookup", body: "Enter a tail. Details auto-fill." },
  { icon: Compass, title: "Flight & FBO sync", body: "Live data keeps every job on schedule." },
  { icon: CalendarClock, title: "Dynamic scheduling", body: "Auto rush priority. Slots adjust live." },
  { icon: Gauge, title: "Live digital job cards", body: "Stage, progress & departure countdown for all." },
  { icon: MapPin, title: "GPS & hourly logs", body: "Verified arrival, service time & hours." },
  { icon: Coins, title: "Billing & finance audit", body: "Invoices, auto payouts & audit-ready reports." },
];

function Platform() {
  return (
    <section id="platform" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <p className="eyebrow">The platform</p>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Powered by API.
        </h2>
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

function BuiltFor() {
  const items = [
    { label: "Specialized Aircraft Detailers", dot: "bg-royal" },
    { label: "FBOs (Fixed-Base Operators)", dot: "bg-fleet" },
    { label: "BizAv Ground Handlers", dot: "bg-brand" },
    { label: "Fleet Ops & Aircraft Management", dot: "bg-slatejet" },
  ];
  return (
    <section id="built-for" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <p className="eyebrow">Who Jetacy is built for</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
              <span className={`size-2 shrink-0 rounded-full ${it.dot}`} />
              <span className="text-sm font-medium text-foreground">{it.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-base text-slatejet">
          We deploy as a white-label partner, integrated into your workflow &
          your branding.
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
              Book a live walkthrough. Pick a suitable time to show you the
              full lifecycle.
            </p>
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
            Jet Detailing OS
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
        <ProblemSolution />
        <Interfaces />
        <DetailerWorkflow />
        <Platform />
        <WorkforceModule />
        <BuiltFor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
