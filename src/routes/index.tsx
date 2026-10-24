import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarClock,
  Coins,
  Compass,
  Gauge,
  Linkedin,
  Mail,
  MapPin,
  ScanLine,
} from "lucide-react";
import jobCardScreenshot from "@/assets/jetacy-cards-busy.png.asset.json";
import appHomeScreenshot from "@/assets/jetacy-home-2.png.asset.json";
import ogScreenshot from "@/assets/jetacy-og.png.asset.json";
import stepShot1 from "@/assets/jetacy-step-1.png.asset.json";
import stepShot2 from "@/assets/jetacy-step-2.png.asset.json";
import stepShot3 from "@/assets/jetacy-step-3.png.asset.json";
import stepShot4 from "@/assets/jetacy-step-4.png.asset.json";
import stepShot5 from "@/assets/jetacy-step-5.png.asset.json";

const SITE_URL = "https://jetacy.lovable.app";
const OG_IMAGE = `${SITE_URL}${ogScreenshot.url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jetacy | Business Jet Detailing OS" },
      {
        name: "description",
        content:
          "Jetacy is the business jet detailing operating system. Clients, Fleet Ops & Detailers on one execution layer, with live job cards, dynamic scheduling & photo proof.",
      },
      { property: "og:title", content: "Jetacy | Business Jet Detailing OS" },
      {
        property: "og:description",
        content:
          "One operating system for faster, clearer business jet detailing operations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
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
          <h1 className="mt-4 text-[31px] font-bold leading-[1.08] sm:text-[43px] lg:text-[47px] xl:text-[52.6px]">
            Business Jet Detailing{"\u00a0"}
            <br />
            <span className="text-brand">Operating System</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slatejet sm:text-lg">
            Engineered to empower specialized Aircraft Detailers, alongside FBOs & Ground Handlers, digitizing the entire detailing lifecycle & easing operational friction.
            <br />
            <br />
            Coordinating Detailers with Clients & Fleet Ops, each through its own dedicated interface, in one centralized workflow.
          </p>
          <p className="mt-8 font-display text-sm font-semibold tracking-[0.2em] text-foreground">
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


function WhoWeAre() {
  return (
    <section id="who" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">LIVE JOB CARDS</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              A dedicated card for each order.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slatejet">
              Every detail the job needs, in one place.
            </p>
          </div>
          <FramedScreenshot
            src={jobCardScreenshot.url}
            alt="Jetacy live job cards for three aircraft in progress on the ramp"
            width={678}
            height={1197}
            portrait
            maxWClass="max-w-[300px] lg:max-w-[360px]"
          />
        </div>

      </div>
    </section>
  );
}


const stepSlides = [
  { src: stepShot1.url, name: "Safety", code: "ON-STN", nameMs: 2000, holdMs: 4000, alt: "Jetacy step 1: Safety" },
  { src: stepShot2.url, name: "Inspect", code: "INSP-OK", nameMs: 2000, holdMs: 4000, alt: "Jetacy step 2: Inspect" },
  { src: stepShot3.url, name: "Detail", code: "DTL CLN GRM DWASH CAB-SVC", nameMs: 1000, holdMs: 5000, alt: "Jetacy step 3: Detail" },
  { src: stepShot4.url, name: "Photos", code: "QC", nameMs: 2000, holdMs: 4000, alt: "Jetacy step 4: Photos" },
  { src: stepShot5.url, name: "RTS", code: "Sign-Off", nameMs: 2000, holdMs: 4000, alt: "Jetacy step 5: RTS" },
];

const SLIDE_MS = 900;
const SNAP_MS = SLIDE_MS + 50;

const detailCodes = ["DTL", "CLN", "GRM", "DWASH", "CAB-SVC"];
const CODE_CYCLE_MS = 2000 / 3;

function DetailerWorkflow() {
  const total = stepSlides.length;
  const [pos, setPos] = React.useState(0);
  const [instant, setInstant] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);
  const [codeIdx, setCodeIdx] = React.useState(0);
  const firstSlide = stepSlides[0]!;

  React.useEffect(() => {
    if (pos >= total) {
      const snap = setTimeout(() => {
        setInstant(true);
        setPos(0);
      }, SNAP_MS);
      return () => clearTimeout(snap);
    }
    const meta = stepSlides[pos] ?? stepSlides[0]!;
    const toCode = setTimeout(() => setShowCode(true), meta.nameMs);
    const advance = setTimeout(() => {
      setShowCode(false);
      setPos(pos + 1);
    }, meta.holdMs);
    return () => {
      clearTimeout(toCode);
      clearTimeout(advance);
    };
  }, [pos]);

  React.useEffect(() => {
    if (!instant) return;
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
    return () => cancelAnimationFrame(raf);
  }, [instant]);

  React.useEffect(() => {
    if (pos === 2 && showCode) {
      const cycle = setInterval(
        () => setCodeIdx((i) => (i + 1) % detailCodes.length),
        CODE_CYCLE_MS,
      );
      return () => clearInterval(cycle);
    }
    setCodeIdx(0);
    return undefined;
  }, [pos, showCode]);

  return (
    <section id="workflow" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="hairline mb-12" />
        <div className="text-center">
          <p className="eyebrow">DETAILERS ORDER PROCESS</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Five steps
          </h2>
        </div>
        <div className="mx-auto mt-10 w-full max-w-[300px] lg:w-[360px] lg:max-w-none">
          <div className="rounded-[2rem] border border-border bg-surface p-3 shadow-2xl">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-ink">
              <div
                className="flex"
                style={{
                  transform: `translateX(-${pos * 100}%)`,
                  transition: instant ? "none" : `transform ${SLIDE_MS}ms cubic-bezier(0.45, 0, 0.25, 1)`,
                }}
              >
                {[...stepSlides, firstSlide].map((s, i) => {
                  const active = i === pos;
                  const flip = active && showCode;
                  const code =
                    s.name === "Detail" ? detailCodes[codeIdx] ?? detailCodes[0]! : s.code;
                  return (
                    <div key={`${s.name}-${i}`} className="relative w-full shrink-0">
                      <img
                        src={s.src}
                        alt={s.alt}
                        width={678}
                        height={1198}
                        className="h-auto w-full"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-x-0 top-0 bg-linear-to-b from-ink/85 via-ink/40 to-transparent px-6 pb-12 pt-8 text-center">
                        <p
                          className={`font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-opacity duration-500 ${
                            flip ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          {s.name}
                        </p>
                        <p
                          className={`absolute inset-x-0 top-8 font-display text-xs font-semibold uppercase tracking-[0.14em] text-brand transition-opacity duration-500 ${
                            flip ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {code}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const workforceSteps = [
  { name: "Apply", desc: "Candidates apply & submit their details." },
  { name: "Approve", desc: "Your team interviews them\n& clears permits." },
  { name: "Qualify", desc: "Train cleaners into detailers\n& supervise them." },
  { name: "Accept", desc: "Approved detailers take jobs\n& work by the hour." },
  { name: "Get paid", desc: "Hours tracked with automated payouts." },
  { name: "Grow", desc: "Performance-based profiles\ntrack progress & ranks." },
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
            <p className="eyebrow text-center text-brand">WORKFORCE OPTIMIZATION</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              On-Demand Hourly Workforce Module
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slatejet">
              An added layer with on-demand, hourly paid staff, {'\n'}
              <br />
              without growing full-time headcount.
            </p>
          </div>
          <ol className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workforceSteps.map((s, i) => (
              <li
                key={s.name}
                className="rounded-2xl border border-border bg-ink/70 p-5 transition-colors hover:border-brand/50"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display w-6 shrink-0 text-xl font-bold text-brand">
                    {String(i + 1)}
                  </span>
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
                    {s.name}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slatejet">{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="relative mt-10 text-center font-display text-xl font-semibold leading-snug sm:text-2xl">
            Not a marketplace.
            <br />
            <span className="text-brand">You decide who works.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

const platformFeatures = [
  { icon: ScanLine, title: "Tail auto-lookup", body: "Aircraft details auto-fill." },
  { icon: Compass, title: "Flight & FBO sync", body: "Live flight data." },
  { icon: CalendarClock, title: "Dynamic scheduling", body: "Auto time priority. In-sync calendar" },
  { icon: Gauge, title: "Live digital job cards", body: "Status, progress & departure countdown." },
  { icon: MapPin, title: "GPS tracking", body: "Detailer location on ramp." },
  { icon: Coins, title: "Billing & finance audit", body: "Invoices, reports & auto payouts" },
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
    { label: "Specialized Aircraft Detailers", dot: "bg-brand" },
    { label: "FBOs & Fleet Ops", dot: "bg-fleet" },
    { label: "BizAv Ground Handlers", dot: "bg-ground" },
    { label: "Aircraft Management", dot: "bg-royal" },
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
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-slatejet">
          We deploy as a white-label partner, integrated into your system & customized to your brand.
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
              See Jetacy on your own turnaround ?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slatejet">
              Book a walkthrough. Choose a suitable time.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              src={CALENDLY_URL}
              title="Schedule a Jetacy demo on Calendly"
              className="h-[307px] w-full border-0"
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
