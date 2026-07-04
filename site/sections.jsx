/* aRcj website — header, hero, who-we-work-with, the two engagements.
   Composes design-system primitives from the compiled bundle. */
const NS = () => window.ARcjDesignSystem_f07cf4;

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
);

/* Client tools dropdown — brand-styled, self-contained (no extra CSS needed).
   Add more tools by extending the `tools` array below. */
function ToolsMenu() {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(-1);
  const wrapRef = React.useRef(null);
  React.useEffect(() => {
    const onDoc = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey); };
  }, []);
  const tools = [
    { k: 'Focus Tool', d: 'Prioritise your ideas', href: '/focus' },
    // Add more tools here as you build them:
    // { k: 'Another Tool', d: 'Short description', href: '/another' },
  ];
  return (
    <div ref={wrapRef} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
         onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" aria-haspopup="true" aria-expanded={open} onClick={() => setOpen((o) => !o)}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', font: 'inherit', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', letterSpacing: 'var(--ls-snug)', color: open ? 'var(--text-primary)' : 'var(--text-secondary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', transition: 'color var(--dur-base) var(--ease-out)' }}>
        Client tools
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div role="menu" style={{ position: 'absolute', top: '100%', right: 0, paddingTop: '14px', opacity: open ? 1 : 0, visibility: open ? 'visible' : 'hidden', transform: open ? 'translateY(0)' : 'translateY(-6px)', transition: 'opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)', zIndex: 60 }}>
        <div style={{ minWidth: '216px', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '8px' }}>
          {tools.map((t, idx) => (
            <a key={t.href} role="menuitem" href={t.href}
               onMouseEnter={() => setHover(idx)} onMouseLeave={() => setHover(-1)}
               style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '10px 12px', borderRadius: 'var(--radius-md)', textDecoration: 'none', background: hover === idx ? 'var(--surface-sunken)' : 'transparent', transition: 'background var(--dur-base) var(--ease-out)' }}>
              <span style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-primary)', letterSpacing: 'var(--ls-snug)' }}>{t.k}</span>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{t.d}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header({ onNav, onBook }) {
  const { Logo, Button } = NS();
  const links = [['Strategy & Growth','strategy-growth.html'], ['Marketing & Brand','marketing-brand.html'], ['Board Advisory','board-advisory.html'], ['About','about.html']];
  return (
    <header className="wb-header">
      <div className="wb-shell wb-header__inner">
        <a className="wb-logo" href="#top" onClick={(e)=>{e.preventDefault();onNav('top');}}><Logo height={26} tone="ink" /></a>
        <nav className="wb-nav">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="wb-nav__link">{label}</a>
          ))}
          <ToolsMenu />
        </nav>
        <div className="wb-header__cta">
          <Button variant="primary" size="sm" iconRight={<Arrow/>} onClick={onBook}>Talk to us</Button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onBook, onNav }) {
  const { Button, Eyebrow } = NS();
  return (
    <section className="wb-hero" id="top">
      <div className="wb-shell wb-hero__grid">
        <div className="wb-hero__copy">
          <Eyebrow rule>Consultancy for founders &amp; SMEs · London</Eyebrow>
          <h1 className="wb-hero__title">The senior partner<br/>you <span className="wb-ital">haven't hired yet.</span></h1>
          <p className="wb-hero__lead">aRcj is a two-person consultancy for founders and SME leaders — senior strategy, brand and board-level counsel, delivered directly by the people doing the thinking. No hand-offs. No reports that sit on a shelf.</p>
          <div className="wb-hero__actions">
            <Button variant="primary" size="lg" iconRight={<Arrow/>} onClick={onBook}>Talk to us</Button>
            <Button variant="secondary" size="lg" onClick={()=>onNav('services')}>What we do</Button>
          </div>
        </div>
        <aside className="wb-hero__panel">
          <div className="wb-hero__paneltop">
            <span className="wb-hero__panel-eyebrow">Three service lines</span>
          </div>
          <a className="wb-engage" href="strategy-growth.html">
            <span className="wb-engage__num">01</span>
            <span className="wb-engage__body">
              <span className="wb-engage__k">Strategy &amp; Growth</span>
              <span className="wb-engage__d">Positioning, pricing and go-to-market.</span>
            </span>
            <span className="wb-engage__arr"><Arrow/></span>
          </a>
          <a className="wb-engage" href="marketing-brand.html">
            <span className="wb-engage__num">02</span>
            <span className="wb-engage__body">
              <span className="wb-engage__k">Marketing &amp; Brand</span>
              <span className="wb-engage__d">Brand, content and demand generation.</span>
            </span>
            <span className="wb-engage__arr"><Arrow/></span>
          </a>
          <a className="wb-engage" href="board-advisory.html">
            <span className="wb-engage__num">03</span>
            <span className="wb-engage__body">
              <span className="wb-engage__k">Board Advisory</span>
              <span className="wb-engage__d">Practical counsel for owners scaling up.</span>
            </span>
            <span className="wb-engage__arr"><Arrow/></span>
          </a>
          <div className="wb-hero__panelfoot">A working partner, not a report-writer.</div>
        </aside>
      </div>
    </section>
  );
}

function WhoWeWorkWith() {
  const { Eyebrow } = NS();
  return (
    <section className="wb-section" id="approach">
      <div className="wb-shell wb-who">
        <div className="wb-who__head">
          <Eyebrow rule>01 — Who we work with</Eyebrow>
          <h2 className="wb-h2">Founders and SME leaders <span className="wb-ital">building something real.</span></h2>
        </div>
        <div className="wb-who__body">
          <p className="wb-lead-p">Small teams with a real product and genuine ambition, who need a senior partner to close the gap between where they are and where they want to be — plus larger clients where the fit is right.</p>
          <p className="wb-body">We are not a large consulting firm. We do not produce reports that sit on shelves. Clients work directly with the people doing the thinking — no layers, no hand-offs, no junior team relaying instructions. Just the work.</p>
        </div>
      </div>
      <div className="wb-shell">
        <blockquote className="wb-pull">
          <p>Whatever the business needs next — sharper strategy, a brand that converts, or a senior sounding board — we hold the full picture and stay close to the work. <span className="wb-pull__em">No hand-offs.</span></p>
        </blockquote>
      </div>
    </section>
  );
}

const SERVICES = [
  { n: '01', k: 'Strategy & Growth', d: 'Positioning, pricing and go-to-market — a clear plan you can act on this week, not another slide deck.', href: 'strategy-growth.html' },
  { n: '02', k: 'Marketing & Brand', d: 'Brand, content and demand generation built to bring in the right customers, not just look good.', href: 'marketing-brand.html' },
  { n: '03', k: 'Board Advisory', d: 'Practical, ongoing counsel for owners scaling up — a senior sounding board when the answer isn\u2019t obvious.', href: 'board-advisory.html' },
];

function Engagements() {
  const { Eyebrow } = NS();
  return (
    <section className="wb-section wb-section--alt" id="services">
      <div className="wb-shell">
        <div className="wb-section__head">
          <div>
            <Eyebrow rule>02 — What we do</Eyebrow>
            <h2 className="wb-h2">Three service lines.</h2>
          </div>
          <p className="wb-section__intro">Each is delivered personally, sustained rather than project-based, and built to compound over time.</p>
        </div>
        <div className="wb-services-grid">
          {SERVICES.map((s) => (
            <a key={s.n} className="wb-service-card" href={s.href}>
              <span className="wb-service-card__num">{s.n}</span>
              <h3 className="wb-h3">{s.k}</h3>
              <p className="wb-body">{s.d}</p>
              <span className="wb-service-card__more">Learn more<Arrow/></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Where we work: a low-key auto-advancing carousel ──
   Each slide shows a photo if one exists at its `img` path; until then a
   designed city panel stands in. To populate with real photography, drop the
   named files into assets/imagery/ (e.g. carousel-london.jpg) — no code change. */
const SLIDES = [
  { city: 'Strategy', img: 'assets/imagery/carousel-london.jpg',
    bg: 'linear-gradient(135deg, #16223A 0%, #1F2E47 55%, #2A3C5A 100%)',
    title: 'The senior partner you haven\u2019t hired yet',
    d: 'For founders and SME leaders who need senior thinking without a full-time hire.' },
  { city: 'Outputs', img: 'assets/imagery/carousel-newyork.jpg',
    bg: 'linear-gradient(135deg, #0A0A0A 0%, #141A26 60%, #1F2E47 100%)',
    title: 'Outputs, not recommendations',
    d: 'The actual deliverables — plans, campaigns, frameworks — not slides about them.' },
  { city: 'Speed', img: 'assets/imagery/carousel-dubai.jpg',
    bg: 'linear-gradient(135deg, #111F3A 0%, #1F2E47 50%, #3A2E1A 100%)',
    title: 'AI-augmented delivery',
    d: 'AI throughout: faster work, consistent across every output, no friction.' },
  { city: 'Direct access', img: 'assets/imagery/carousel-singapore.jpg',
    bg: 'linear-gradient(135deg, #0E1B2E 0%, #1F2E47 60%, #24506B 100%)',
    title: 'Two people. No layers.',
    d: 'You work directly with the people doing the thinking, start to finish.' },
  { city: 'No handoff', img: 'assets/imagery/carousel-paris.jpg',
    bg: 'linear-gradient(135deg, #1A1622 0%, #1F2E47 65%, #2A3C5A 100%)',
    title: 'No handoff',
    d: 'The person who scopes the engagement is the person who drives it.' },
];

function Showcase() {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = SLIDES.length;
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 5200);
    return () => clearInterval(t);
  }, [paused, n]);
  const go = (d) => setI((p) => (p + d + n) % n);
  return (
    <section className="wb-show__section" id="where">
      <div className="wb-shell">
        <div className="wb-show"
             onMouseEnter={() => setPaused(true)}
             onMouseLeave={() => setPaused(false)}>
          {SLIDES.map((s, idx) => (
            <div key={s.city}
                 className={`wb-slide ${idx === i ? 'is-active' : ''}`}
                 style={{ background: s.bg }}
                 aria-hidden={idx === i ? 'false' : 'true'}>
              <img className="wb-slide__img" src={s.img} alt=""
                   onError={(e) => { e.target.style.display = 'none'; }} />
              <span className="wb-slide__watermark" aria-hidden="true">{s.city}</span>
              <div className="wb-slide__scrim"></div>
              <div className="wb-slide__cap">
                <span className="wb-slide__eyebrow">aRcj · {s.city}</span>
                <span className="wb-slide__k">{s.title}</span>
                <span className="wb-slide__d">{s.d}</span>
              </div>
            </div>
          ))}
          <button className="wb-show__nav wb-show__nav--prev" aria-label="Previous" onClick={() => go(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <button className="wb-show__nav wb-show__nav--next" aria-label="Next" onClick={() => go(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
          </button>
          <div className="wb-show__dots">
            {SLIDES.map((s, idx) => (
              <button key={s.city} className={`wb-show__dot ${idx === i ? 'is-active' : ''}`}
                      aria-label={`Go to ${s.city}`} onClick={() => setI(idx)}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, WhoWeWorkWith, Engagements, Showcase, WbArrow: Arrow });
