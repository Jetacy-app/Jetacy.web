import { useEffect, useState } from "react";
import { AppShowcase } from "@/components/app-showcase";
import { createFileRoute } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowUpRight,
  ClipboardList,
  Calculator,
  MessagesSquare,
  Droplets,
  Zap,
  Database,
  Crown,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Plus,
  Sun,
  Moon,
  Plane,
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
    id: "workflow",
    label: "Workflow",
    sub: "Three interfaces. One execution layer.",
    icon: Workflow,
    color: "blue",
  },
  {
    id: "features",
    label: "Features",
    sub: "Built for every step of the job",
    icon: Sparkles,
    color: "yellow",
  },
  {
    id: "api",
    label: "Integrations",
    sub: "Your systems, connected",
    icon: Network,
    color: "green",
  },
  {
    id: "Workforce",
    label: "Workforce",
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
function DemoLink({ children = "Demo" }: { children?: React.ReactNode }) {
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
  phoneColor = "",
  main = false,
}: {
  src: string;
  label: string;
  color: string;
  phoneColor?: string;
  main?: boolean;
}) {
  return (
    <figure className={`phone-figure ${main ? "main-phone" : ""}`}>
      {/* {label != "" && <figcaption className={`role-label ${color}`}>
        <span className="status-dot" />
        {label}
      </figcaption>} */}
      <div className="phone-frame" style={{ borderColor: phoneColor != "" ? `${phoneColor}` : 'var(--border)' }}>
        <div className="phone-notch" style={{ background: phoneColor != "" ? `${phoneColor}` : 'var(--border)' }}></div>
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
      <div className="aboutus-content">
        {/* <span className="pill">Built around your operation</span> */}
        <h2 id="who-title">
          BizJet Detailing
          <br />
          <span className="blue-text">Operating System</span>
        </h2>
        <p style={{ maxWidth: 400 }}>
          Engineered to empower specialized Aircraft Detailers, alongside FBOs & Fleet operators, digitizing the entire detailing lifecycle & easing operational friction.
        </p>
        {/* <p>
          Coordinating Detailers with Clients & Fleet Ops, each through its own dedicated interface,
          in one centralized workflow.
        </p> */}
        {/* <div className="inline-note">
          <span className="status-dot" />3 INTERFACES <span>·</span> 1 EXECUTION LAYER
        </div> */}
      </div>
      <AppShowcase />
    </div>
  );
}

const interfaces = [
  { label: "Detailer", color: "blue", phoneColor: "#449BCF", src: "/images/jetacy-detailer.png" },
  { label: "Client", color: "yellow", phoneColor: "#FCD042", src: "/images/jetacy-home.png" },
  { label: "Fleet Ops", color: "green", phoneColor: "#48ba5d", src: "/images/jetacy-fleet.png" },
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
              <PhoneMockup {...item} phoneColor={item.phoneColor} main={position === "center"} />
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
      {false && <div className="interface-controls">
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
      </div>}
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
        <p>Coordinating Detailers with Clients & Fleet Ops, each through its own dedicated interface, in one centralized workflow.</p>
        <span className="pill">3 interfaces · <span className="blue-text">1 execution layer</span></span>
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
function FeaturesContent() {
  return (
    <div className="features-content">
      <div className="section-heading">
        <p className="eyebrow">An operational system in sync</p>
        <h2>From Tail Number to Trip-Ready</h2>
      </div>
      <ul className="feature-grid">
        {[
          {
            icon: ClipboardList,
            title: "JOB CARDS",
            description: "Real-time mission cards uniting tail details, live service progress, assigned detailers, GPS tracking, before/after photos & turnaround countdowns.",
          },
          {
            icon: Calculator,
            title: "PRICING INTELLIGENCE",
            description: "Automated pricing logic scales with airframe class, service scope & ground time, enabling accurate costing & ramp duration.",
          },
          {
            icon: MessagesSquare,
            title: "UNIFIED COORDINATION",
            description: "In-app calls, chat, voice notes, photos, videos & documents. Connecting the stakeholders with on-demand LMRs.",
          },
          {
            icon: Droplets,
            title: "STAIN TREATMENT",
            description: "Multi-tier protocols (spot, deep, heavy) for stain removal, extraction, remediation & surface restoration.",
          },
          {
            icon: Zap,
            title: "PRIORITY DISPATCH",
            description: "Automated Rushed & Urgent tiers, on-demand queue prioritization & team deployment for time-sensitive departures.",
          },
          {
            icon: Database,
            title: "DATABASE SECURITY",
            description: "Centralised authentication, encrypted client data storage, secure backups & controlled record access.",
          },
          {
            icon: Crown,
            title: "ROYAL PROTOCOLS",
            description: "Bespoke white-glove tier for VIP aircraft, enforcing elevated service standards, discrete cabin care & verified execution.",
          },
          {
            icon: SlidersHorizontal,
            title: "SYSTEM INTEGRATION",
            description: "Adapted to provider's operational workflows, service portfolio, branding & commercial structure.",
          },
        ].map(({ icon: Icon, title, description }) => (
          <li key={title}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              {/* <Icon size={21} strokeWidth={1.5} aria-hidden="true" color={"#FCD042"} /> */}
              <Icon size={21} strokeWidth={1.5} aria-hidden="true" color={'var(--muted-foreground)'} />
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
          </li>
        ))}
      </ul>

      {/* <div className="feature-security-heading">
        <p className="eyebrow">PROPOSED SECURITY FEATURES</p>
        <h2>Control access. Protect operational data.</h2>
      </div> */}
      
      {false && <ul className="feature-grid">
        {[
          {
            icon: Users,
            title: "Role-based access",
            description: "Define permissions for detailers, clients and fleet operations, with access limited to the jobs and information each role needs.",
          },
          {
            icon: ShieldCheck,
            title: "Secure sign-in",
            description: "Add multi-factor authentication and session controls to help protect accounts and manage access from shared devices.",
          },
          {
            icon: Clock3,
            title: "Activity & audit trails",
            description: "Keep a timestamped record of job updates, approvals and pricing changes, showing who changed what and when.",
          },
          {
            icon: SlidersHorizontal,
            title: "Protected files & sharing",
            description: "Encrypt operational files in transit and at rest, with permission-controlled downloads and expiring share links.",
          },
        ].map(({ icon: Icon, title, description }) => (
          <li key={title}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              {/* <Icon size={21} strokeWidth={1.5} aria-hidden="true" color={"#FCD042"} /> */}
              <Icon size={21} strokeWidth={1.5} aria-hidden="true" color={'var(--muted-foreground)'} />
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
          </li>
        ))}
      </ul>}
    </div>
  );
}
const integrations = [
  {
    name: "Fleet systems",
    description: "Connect aircraft and fleet information to keep detailing work aligned with each aircraft's needs.",
    icon: Plane,
    x: 34,
    y: 20,
    path: "M500 320 C412 320 412 128 324 128"
  },
  {
    name: "Scheduling",
    description: "Align bookings, aircraft availability, and teams.",
    icon: CalendarDays,
    x: 34,
    y: 50,
    path: "M500 320 C430 260 394 380 324 320",
  },
  {
    name: "Ground operations",
    description: "Share service needs, handovers, and progress.",
    icon: Radio,
    x: 34,
    y: 80,
    path: "M500 320 C412 320 412 512 324 512"
  },
  {
    name: "Payments",
    description: "Link completed services to billing and payments.",
    icon: CreditCard,
    x: 66,
    y: 20,
    path: "M500 320 C588 320 588 128 676 128"
  },
  {
    name: "Reporting",
    description: "Track service activity and performance.",
    icon: ChartNoAxesCombined,
    x: 66,
    y: 50,
    path: "M500 320 C570 260 606 380 676 320"
  },
  {
    name: "Your platform",
    description: "Connect your existing tools through the Jetacy API.",
    icon: SlidersHorizontal,
    x: 66,
    y: 80,
    path: "M500 320 C588 320 588 512 676 512",
  },
];
function Integrations() {
  return (
    <div className="integration-content">
      <div
        className="integration-network"
        role="group"
        aria-label="API connections to the Jetacy execution layer"
      >
        <svg className="integration-wires" viewBox="0 0 1000 640" preserveAspectRatio="none" fill="none" aria-hidden="true">
          {integrations.map((item, i) => (
            <g key={item.name}>
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
            {/* <Logo /> */}
            <span style={{ fontSize: 29, fontWeight: '600', paddingLeft: 13, paddingRight: 13, color: '#48BA5D' }}>Jetacy</span>
          </div>
        </div>
        {integrations.map((item, i) => (
          <div
            key={item.name}
            className={`integration-node${i < 3 ? " integration-node-left" : ""}`}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            <item.icon strokeWidth={1.5} aria-hidden="true" color={'#48BA5D'} />
            <span
              id={`integration-details-${i}`}
              className="integration-details"
            >
              <strong>{item.name}</strong>
              <span>{item.description}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
function WorkforceContent() {
  return (
    <div className="workforce-content">
      <div style={{ flex: 1 }}>
        {/* <p className="eyebrow">A MORE FLEXIBLE OPERATION</p> */}
        <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* <div> */}
          <h2>On-Demand Team Module</h2>

          <p>
            An added layer of hourly detailers to scale ramp capacity & optimize the fixed full-time headcount.
          </p>

          {/* </div> */}

          <div>
            <br></br>
            <span className="pill">
              Approve. Hire. Train. Supervise. Auto-Pay. Rank.
              &nbsp;
              <span className="orange-text">You decide who works.</span>
            </span>
          </div>
        </div>
      </div>

      {false && <ol className="workforce-steps" aria-label="Workforce process">
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
      </ol>}

    </div>
  );
}

function Index() {
  const [open, setOpen] = useState("");
  const [light, setLight] = useState(false);
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
            <a href="#who">About us</a>
            {modules.map((m) => (
              <a key={m.id} href={`#${m.id}`} onClick={() => setOpen(m.id)}>
                {m.id === "api" ? "Integrations" : m.id === "workforce" ? "Workforce" : m.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a href="mailto:info@jetacy.com" aria-label="Email Jetacy" style={{ color: 'var(--muted-foreground)' }}>
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/jetacy"
              target="_blank"
              rel="noreferrer"
              aria-label="Jetacy on LinkedIn"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <Linkedin size={16} />
            </a>
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

          <section id="who" className="who-section" aria-labelledby="who-title">
            {/* <p className="eyebrow">Who we are</p> */}
            <Who />
          </section>

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
                    {/* <span className="module-number">0{i + 1}</span> */}
                    <span className="module-icon">
                      <m.icon size={21} strokeWidth={1.5} />
                    </span>
                    <span className="module-title">{m.label}</span>
                    {/* <span className="module-subtitle">{m.sub}</span> */}
                    {/* <span className="module-state">{open === m.id ? "CLOSE" : "EXPLORE"}</span> */}
                    <span className="plus-box" style={{ marginLeft: 'auto' }}>
                      <Plus size={17} />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="module-content">
                  {m.id === "workflow" ? (
                    <WorkflowContent />
                  ) : m.id === "features" ? (
                    <FeaturesContent />
                  ) : m.id === "api" ? (
                    <Integrations />
                  ) : (
                    <WorkforceContent />
                  )}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        <section id="contact" className="contact-section " aria-labelledby="demo-title">
          <div className="container">
            <div className="contact-copy">
              {/* <p className="contact-eyebrow">YOUR NEXT TURNAROUND STARTS HERE</p> */}
              <h2 id="demo-title">See <span className="blue-text">Jetacy</span> on your own turnaround</h2>
              <div style={{ paddingTop: '30px', display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '30px' }}>
                <p style={{ whiteSpace: 'nowrap' }}>Built for:</p>
                <ul className="demo-highlights">
                  <li><Check size={15} /> Aircraft Detailers</li>
                  <li><Check size={15} /> Private Aviation Cleaners</li>
                  <li><Check size={15} /> FBOs</li>
                  <li><Check size={15} /> Aircraft Management</li>
                  <li><Check size={15} /> Fleet operators</li>
                  <li><Check size={15} /> Charter service providers</li>
                </ul>
              </div>
              <p>
                <b>We deploy as a white-label B2B partners.</b>
                <br />
                Integrated into our partner's service workflow, customized to their brand & operations.
              </p>
              <br></br>
              <div className="contact-actions">
                <a className="button primary demo-button" href="https://calendly.com/jetacy/30min" target="_blank" rel="noreferrer">
                  Demo <ArrowUpRight size={16} />
                </a>
                <a className="email-link" href="mailto:info@jetacy.com">Prefer email? Get in touch <ArrowUpRight size={12} /></a>
              </div>
            </div>
            <div className="contact-calendar" id="demo-calendar">
              {/* <div className="calendar-heading">
                <span>Book a walkthrough</span>
                <span className="calendar-duration">Choose a suitable time</span>
              </div> */}
              <iframe
                title="Book a Jetacy demo"
                src="https://calendly.com/jetacy/30min?embed_domain=jetacy.com&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1"
              />
              {/* <a className="calendar-fallback text-link" href="https://calendly.com/jetacy/30min" target="_blank" rel="noreferrer">
                  Open booking in a new tab <ArrowUpRight size={13} />
                </a> */}
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
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
            {/* <span className="footer-note">
              <Check size={12} /> BUILT FOR THE TURNAROUND
            </span> */}
          </div>
        </footer>
      </main>
    </div>
  );
}
