import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Plus,
  Sun,
  Moon,
  Plane,
  Layers3,
  Workflow,
  Network,
  Users,
  Check,
  Radio,
  CalendarDays,
  Mail,
  Linkedin,
  Phone,
  MessageSquare,
  Mic,
  ShieldCheck,
  Clock3,
  CreditCard,
  ChartNoAxesCombined,
  Building2,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SITE_URL = import.meta.env["VITE_SITE_URL"]?.replace(/\/+$/, "");
const description = "A centralized operating system for aircraft detailing & cabin care services.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jetacy | Business Jet Detailing OS" },
      { name: "description", content: description },
      { property: "og:title", content: "Jetacy | Business Jet Detailing OS" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL ?? ""}/images/jetacy-og.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jetacy | Business Jet Detailing OS" },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL ?? ""}/images/jetacy-og.png` },
      ...(SITE_URL ? [{ property: "og:url", content: SITE_URL }] : []),
    ],
    links: SITE_URL ? [{ rel: "canonical", href: SITE_URL }] : [],
  }),
  component: Index,
});
const modules = [
  {
    id: "who",
    label: "Who we are",
    sub: "Purpose-built for business aviation",
    icon: Layers3,
    color: "blue",
  },
  {
    id: "workflow",
    label: "Workflow",
    sub: "Three interfaces. One execution layer.",
    icon: Workflow,
    color: "green",
  },
  {
    id: "api",
    label: "Integrations",
    sub: "Your systems, connected",
    icon: Network,
    color: "yellow",
  },
  {
    id: "workforce",
    label: "Workforce optimization",
    sub: "The right people, on demand",
    icon: Users,
    color: "orange",
  },
];
function Logo() {
  return (
    <svg className="wordmark" viewBox="231 671 1238 359" role="img" aria-label="Jetacy">
      <image href="/images/jetacy-logo.png" width="1700" height="1701" />
    </svg>
  );
}
function DemoLink({ children = "Request Demo" }: { children?: React.ReactNode }) {
  return (
    <a className="button primary" href="https://calendly.com/jetacy/30min" target="_blank">
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}
function PhoneMockup({
  src,
  label,
  color,
  main = false,
}: {
  src: string;
  label: string;
  color: string;
  main?: boolean;
}) {
  return (
    <figure className={`phone-figure ${main ? "main-phone" : ""}`}>
      {label != "" && <figcaption className={`role-label ${color}`}>
        <span className="status-dot" />
        {label}
      </figcaption>}
      <div className="phone-frame">
        <img
          src={src}
          alt={`Jetacy ${label} interface preview`}
          loading="lazy"
          width="678"
          height="1198"
        />
      </div>
    </figure>
  );
}
function Who() {
  return (
    <div className="who-content content-grid">
      <div>
        <span className="pill">Built around your operation</span>
        <h2>
          Business Jet Detailing
          <br />
          <span className="blue-text">Operating System</span>
        </h2>
        <p>
          Engineered to empower specialized Aircraft Detailers, alongside FBOs & Fleet operators,
          digitizing the entire detailing lifecycle & easing operational friction.
        </p>
        <p>
          Coordinating Detailers with Clients & Fleet Ops, each through its own dedicated interface,
          in one centralized workflow.
        </p>
        {/* <div className="inline-note">
          <span className="status-dot" />3 INTERFACES <span>·</span> 1 EXECUTION LAYER
        </div> */}
      </div>
      <PhoneMockup
        src="/images/jetacy-home-2.png"
        label=""
        color="blue"
        main
      />
    </div>
  );
}
const interfaces = [
  { label: "Fleet Ops", color: "green", src: "/images/jetacy-home.png" },
  { label: "Detailer", color: "blue", src: "/images/jetacy-cards-busy.png" },
  { label: "Client", color: "yellow", src: "/images/jetacy-home-2.png" },
];
function InterfaceCarousel() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(query.matches);
      setPaused(query.matches);
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % interfaces.length),
      4500,
    );
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);
  function navigate(direction: number) {
    setPaused(true);
    setActive((value) => (value + direction + interfaces.length) % interfaces.length);
  }
  return (
    <section
      className="interface-carousel"
      aria-label="Jetacy interfaces"
      aria-roledescription="carousel"
    >
      <div className="interface-stage" onFocusCapture={() => setPaused(true)}>
        {interfaces.map((item, i) => {
          const offset = (i - active + interfaces.length) % interfaces.length;
          const position = offset === 0 ? "center" : offset === 1 ? "right" : "left";
          return (
            <div
              className={`interface-slide is-${position}`}
              key={item.label}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of 3: ${item.label}`}
            >
              <PhoneMockup {...item} main={position === "center"} />
              <button
                type="button"
                className="interface-select"
                aria-label={`Show ${item.label} interface`}
                aria-pressed={active === i}
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="interface-controls">
        <button type="button" onClick={() => navigate(-1)} aria-label="Previous interface">
          <ChevronLeft size={19} />
        </button>
        <button
          type="button"
          onClick={() => {
            setReducedMotion(false);
            setPaused((value) => !value);
          }}
          aria-label={paused ? "Play interface carousel" : "Pause interface carousel"}
        >
          {paused ? <Play size={16} /> : <Pause size={17} />}
        </button>
        <button type="button" onClick={() => navigate(1)} aria-label="Next interface">
          <ChevronRight size={19} />
        </button>
      </div>
      <span className="sr-only" aria-live={paused ? "polite" : "off"}>
        {interfaces[active]!.label} interface
      </span>
    </section>
  );
}
const stages = ["Safety", "Inspect", "Detail", "Photos", "RTS"];
function WorkflowContent() {
  const [step, setStep] = useState(2);
  return (
    <div className="workflow-content" style={{ paddingBottom: 0 }}>
      <div className="section-heading">
        <p className="eyebrow">LIVE JOB CARDS</p>
        <h2>A dedicated card for each order.</h2>
        <span className="pill">3 interfaces · 1 execution layer</span>
      </div>
      <div style={{ flex: 1 }}>
        <InterfaceCarousel />
        {/* <div className="workflow-demo">
        <div>
          <p className="eyebrow">FROM ON-STATION TO SIGN-OFF</p>
          <h3>Every step. Accounted for.</h3>
          <p>A clear process, live progress & photo proof in one job card.</p>
          <div className="step-tabs" role="tablist" aria-label="Detailing process">
            {stages.map((s, i) => (
              <button
                id={`step-${i}`}
                key={s}
                role="tab"
                aria-selected={step === i}
                aria-controls="step-preview"
                onClick={() => setStep(i)}
              >
                {String(i + 1).padStart(2, "0")}
                <span>{s}</span>
              </button>
            ))}
          </div>
          <div className="coordination">
            {[
              [Phone, "Call"],
              [MessageSquare, "Chat"],
              [Mic, "Voice notes"],
            ].map(([Icon, text]) => {
              const I = Icon as LucideIcon;
              return (
                <span key={String(text)}>
                  <I size={14} />
                  {String(text)}
                </span>
              );
            })}
          </div>
        </div>
        <div
          className="step-preview"
          id="step-preview"
          role="tabpanel"
          aria-labelledby={`step-${step}`}
        >
          <img
            src={`/images/jetacy-step-${step + 1}.png`}
            alt={`${stages[step]} stage in the Jetacy detailing workflow`}
            width="678"
            height="1198"
            loading="lazy"
          />
        </div>
      </div> */}
      </div>
    </div>
  );
}
const integrations = [
  {
    name: "Fleet systems",
    description: "Connect aircraft and fleet information to keep detailing work aligned with each aircraft's needs.",
    icon: Plane,
    x: 17,
    y: 19,
    path: "M170 122 H430 Q460 122 460 152 V300"
  },
  {
    name: "Scheduling",
    description: "Align bookings, aircraft availability, and teams.",
    icon: CalendarDays,
    x: 65,
    y: 13,
    path: "M650 83 H530 Q500 83 500 113 V300",
  },
  {
    name: "Ground operations",
    description: "Share service needs, handovers, and progress.",
    icon: Radio,
    x: 27,
    y: 48,
    path: "M270 307 H480"
  },
  {
    name: "Payments",
    description: "Link completed services to billing and payments.",
    icon: CreditCard,
    x: 87,
    y: 48,
    path: "M870 307 H480"
  },
  {
    name: "Reporting",
    description: "Track service activity and performance.",
    icon: ChartNoAxesCombined,
    x: 48,
    y: 85,
    path: "M480 544 V300"
  },
  {
    name: "Your platform",
    description: "Connect your existing tools through the Jetacy API.",
    icon: SlidersHorizontal,
    x: 83,
    y: 80,
    path: "M830 512 H570 Q540 512 540 482 V300 H480",
  },
];
function Integrations() {
  const [selected, setSelected] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected === null) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      const node = event.target instanceof Element
        ? event.target.closest(".integration-node")
        : null;
      if (!node || !contentRef.current?.contains(node)) {
        setSelected(null);
      }
    };

    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [selected]);

  return (
    <div className="integration-content" ref={contentRef}>
      <div
        className="integration-network"
        role="group"
        aria-label="API connections to the Jetacy execution layer"
      >
        <svg className="integration-wires" viewBox="0 0 1000 640" fill="none" aria-hidden="true">
          {integrations.map((item, i) => (
            <g key={item.name} className={selected === i ? "wire-active" : ""}>
              <path className="integration-wire" d={item.path} />
              <path
                className="integration-pulse"
                d={item.path}
                pathLength="1"
                style={{ animationDelay: `${i * -0.7}s` }}
              />
            </g>
          ))}
        </svg>
        <div className="integration-hub" role="img" aria-label="Jetacy execution layer">
          <div className="integration-hub-inner">
            <Logo />
          </div>
        </div>
        {integrations.map((item, i) => (
          <button
            type="button"
            key={item.name}
            className={`integration-node${item.x > 60 ? " integration-node-right" : ""}`}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            aria-label={item.name}
            aria-pressed={selected === i}
            aria-describedby={selected === i ? `integration-details-${i}` : undefined}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <item.icon strokeWidth={1.5} aria-hidden="true" />
            {selected === i && (
              <span
                id={`integration-details-${i}`}
                className="integration-details"
                role="status"
              >
                <strong>{item.name}</strong>
                <span>{item.description}</span>
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
function WorkforceContent() {
  return (
    <div className="workforce-content">
      <div>
        <p className="eyebrow">A MORE FLEXIBLE OPERATION</p>
        <div className="content">
          <div>
            <h2>
              On-Demand
              <br />
              Workforce Module
            </h2>
            <p>
              An added layer with on-demand hourly paid staff, without growing the full-time
              headcount.
            </p>
          </div>
          <div>
            <br></br>
            <span className="pill">
              Not a marketplace.
              &nbsp;
              <span className="blue-text">You decide who works.</span>
            </span>
          </div>
        </div>
      </div>
      <ol className="workforce-steps" aria-label="Workforce process">
        {[
          { icon: ShieldCheck, label: "Approve", detail: "Set your standard. Choose your people." },
          { icon: Users, label: "Hire", detail: "Add capacity when you need it." },
          { icon: Sparkles, label: "Train", detail: "Prepare every team for your operation." },
          { icon: Radio, label: "Supervise", detail: "Keep work aligned with your standards." },
          { icon: CreditCard, label: "Auto payouts", detail: "Keep hourly payments moving." },
          { icon: ChartNoAxesCombined, label: "Ranked profiles", detail: "Build a picture of team performance." },
        ].map(({ icon: Icon, label, detail }, i) => (
          <li key={label}>
            <span className="workforce-step-number" aria-hidden="true">0{i + 1}</span>

            <span className="workforce-step-icon">
              <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
            </span>

            <div className="workforce-step-copy">
              <h3>{label}</h3>
              {/* <p>{detail}</p> */}
            </div>


          </li>
        ))}
      </ol>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState("");
  const [light, setLight] = useState(false);
  const [calendar, setCalendar] = useState(false);
  useEffect(() => {
    try {
      setLight(localStorage.getItem("jetacy-theme") === "light");
    } catch {
      /* Theme works without storage. */
    }
  }, []);
  useEffect(() => {
    const syncHash = () => {
      const hash = location.hash.slice(1);
      if (modules.some((m) => m.id === hash)) setOpen(hash);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);
  function toggleTheme() {
    const next = !light;
    setLight(next);
    try {
      localStorage.setItem("jetacy-theme", next ? "light" : "dark");
    } catch {
      /* Optional persistence. */
    }
  }
  return (
    <div className={`jetacy-site ${light ? "light-theme" : ""}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a href="#top" aria-label="Jetacy home">
            <Logo />
          </a>
          <nav aria-label="Main navigation">
            {modules.map((m) => (
              <a key={m.id} href={`#${m.id}`} onClick={() => setOpen(m.id)}>
                {m.id === "api" ? "Integrations" : m.id === "workforce" ? "Workforce" : m.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${light ? "dark" : "light"} theme`}
            >
              {light ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <DemoLink />
          </div>
        </div>
      </header>

      <main id="main">
        <div className="page-shell" id="top">
          {false && <section className="intro" aria-labelledby="page-title">
            <div className="intro-top">
              {/* <span className="eyebrow">
                <span className="status-dot" />
                THE BUSINESS AVIATION EXECUTION LAYER
              </span> */}
              {/* <span className="instrument-label">
                <Radio size={12} /> CONNECTED BY DESIGN
              </span> */}
            </div>
            <div className="intro-main">
              <h1 id="page-title">
                Precision on the ground.
                <br />
                <span>Confidence in the air.</span>
              </h1>
              <div className="intro-aside">
                <p>
                  The operating system for
                  <br />
                  business jet detailing & cabin care.
                </p>
                {/* <a href="#who" onClick={() => setOpen("who")} className="text-link">
                  Explore Jetacy <ArrowUpRight size={15} />
                </a> */}
              </div>
            </div>
          </section>}

          {false && <div className="system-ticker" aria-label="Platform overview">
            <span>
              <span className="status-dot" /> ONE CONNECTED OPERATION
            </span>
            <span>
              <i className="green" /> FLEET OPS
            </span>
            <span>
              <i className="blue" /> DETAILER
            </span>
            <span>
              <i className="yellow" /> CLIENT
            </span>
            <span className="ticker-end">
              3 INTERFACES <span> / </span> 1 EXECUTION LAYER
            </span>
          </div>}

          {false && <div className="module-heading">
            <span>EXPLORE THE SYSTEM</span>
            <span>
              SELECT A MODULE TO EXPAND <Plus size={11} />
            </span>
          </div>}

          <Accordion.Root
            type="single"
            collapsible
            value={open}
            onValueChange={setOpen}
            className="modules"
          >
            {modules.map((m, i) => (
              <Accordion.Item className={`module ${m.color}`} value={m.id} id={m.id} key={m.id}>
                <Accordion.Header>
                  <Accordion.Trigger className="module-trigger">
                    <span className="module-number">0{i + 1}</span>
                    <span className="module-icon">
                      <m.icon size={21} strokeWidth={1.5} />
                    </span>
                    <span className="module-title">{m.label}</span>
                    <span className="module-subtitle">{m.sub}</span>
                    {/* <span className="module-state">{open === m.id ? "CLOSE" : "EXPLORE"}</span> */}
                    <span className="plus-box">
                      <Plus size={17} />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="module-content">
                  {m.id === "who" ? (
                    <Who />
                  ) : m.id === "workflow" ? (
                    <WorkflowContent />
                  ) : m.id === "api" ? (
                    <Integrations />
                  ) : (
                    <WorkforceContent />
                  )}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          {false && <section id="contact" className="contact-section" aria-labelledby="demo-title">
            <div className="contact-copy">
              <h2 id="demo-title">See Jetacy in action.</h2>
              <p>A 30-minute walkthrough, tailored to your operation.</p>
              <p className="contact-note">
                White-label. Connected to your systems. Built around your brand.
              </p>
            </div>
            <div className="contact-actions">
              <button
                className="button demo-button"
                onClick={() => setCalendar((value) => !value)}
                aria-expanded={calendar}
                aria-controls="demo-calendar"
              >
                {calendar ? "Close booking" : "Request Demo"}
                {calendar ? (
                  <Plus className="close-booking" size={15} />
                ) : (
                  <ArrowUpRight size={15} />
                )}
              </button>
              <a className="email-link" href="mailto:info@jetacy.com">
                info@jetacy.com
              </a>
            </div>
            {calendar && (
              <div className="contact-calendar" id="demo-calendar">
                <iframe
                  key={light ? "light" : "dark"}
                  title="Schedule a Jetacy walkthrough"
                  src={`https://calendly.com/jetacy/30min?hide_gdpr_banner=1&background_color=${light ? "f5f8f8" : "131314"}&text_color=${light ? "1b1f23" : "f5f8f8"}&primary_color=449bcf`}
                />
                <a
                  className="calendar-fallback text-link"
                  href="https://calendly.com/jetacy/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open booking in a new tab <ArrowUpRight size={13} />
                </a>
              </div>
            )}
          </section>}

          {false && <footer className="site-footer">
            <a href="#top" aria-label="Jetacy home">
              <Logo />
            </a>
            <span className="footer-slogan">Jet Detailing OS</span>
            <span className="copyright">© {new Date().getFullYear()} Jetacy</span>
            <a href="mailto:info@jetacy.com" aria-label="Email Jetacy">
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/jetacy"
              target="_blank"
              rel="noreferrer"
              aria-label="Jetacy on LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <span className="footer-note">
              <Check size={12} /> BUILT FOR THE TURNAROUND
            </span>
          </footer>}
        </div>
      </main>
    </div>
  );
}
