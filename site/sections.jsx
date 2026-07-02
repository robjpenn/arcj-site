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
  const links = [['Approach','approach'], ['Engagements','engagements'], ['Why aRcj','why'], ['Contact','contact']];
  return (
    <header className="wb-header">
      <div className="wb-shell wb-header__inner">
        <a className="wb-logo" href="#top" onClick={(e)=>{e.preventDefault();onNav('top');}}><Logo height={26} tone="ink" /></a>
        <nav className="wb-nav">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="wb-nav__link"
               onClick={(e)=>{e.preventDefault();onNav(id);}}>{label}</a>
          ))}
          <ToolsMenu />
        </nav>
        <div className="wb-header__cta">
          <Button variant="primary" size="sm" iconRight={<Arrow/>} onClick={onBook}>Start a conversation</Button>
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
          <Eyebrow rule>Strategic Consulting · London</Eyebrow>
          <h1 className="wb-hero__title">The full picture,<br/><span className="wb-ital">held.</span></h1>
          <p className="wb-hero__lead">We help businesses get somewhere they could not reach on their own — activating the full potential of what you already have, or establishing a physical presence in a new market. From first conversation to real-world outcome.</p>
          <div className="wb-hero__actions">
            <Button variant="primary" size="lg" iconRight={<Arrow/>} onClick={onBook}>Start a conversation</Button>
            <Button variant="secondary" size="lg" onClick={()=>onNav('engagements')}>How we engage</Button>
          </div>
        </div>
        <aside className="wb-hero__panel">
          <div className="wb-hero__paneltop">
            <span className="wb-hero__panel-eyebrow">Two ways we engage</span>
          </div>
          <button className="wb-engage" onClick={()=>onNav('engagements')}>
            <span className="wb-engage__num">01</span>
            <span className="wb-engage__body">
              <span className="wb-engage__k">Business Activation</span>
              <span className="wb-engage__d">Up to eight workstreams, held together and driven in parallel.</span>
            </span>
            <span className="wb-engage__arr"><Arrow/></span>
          </button>
          <button className="wb-engage" onClick={()=>onNav('engagements')}>
            <span className="wb-engage__num">02</span>
            <span className="wb-engage__body">
              <span className="wb-engage__k">Market Expansion</span>
              <span className="wb-engage__d">A physical footprint in the world's top 100 gateway cities.</span>
            </span>
            <span className="wb-engage__arr"><Arrow/></span>
          </button>
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
          <h2 className="wb-h2">Founders and senior leaders of <span className="wb-ital">established businesses.</span></h2>
        </div>
        <div className="wb-who__body">
          <p className="wb-lead-p">Companies with a proven model and genuine ambition, but that need a strategic partner to close the gap between where they are and where they want to be.</p>
          <p className="wb-body">We are not a large consulting firm. We do not produce reports that sit on shelves. We engage as a working partner — thinking at board level, producing real outputs at operational level, and maintaining both at once for as long as the engagement runs.</p>
        </div>
      </div>
      <div className="wb-shell">
        <blockquote className="wb-pull">
          <p>Our clients either need to activate a stronger, more coherent version of their existing business — or enter a new market, in a new place, with a physical presence built to last. <span className="wb-pull__em">Some need both.</span></p>
        </blockquote>
      </div>
    </section>
  );
}

const WORKSTREAMS = [
  'Brand & positioning', 'Financial clarity', 'Digital & e-commerce', 'Marketing & content',
  'Events & activations', 'Partnerships & sponsorships', 'Sales enablement', 'Operations',
];

function Engagements() {
  const { Eyebrow } = NS();
  return (
    <section className="wb-section wb-section--alt" id="engagements">
      <div className="wb-shell">
        <div className="wb-section__head">
          <div>
            <Eyebrow rule>02 — What we do</Eyebrow>
            <h2 className="wb-h2">Two engagements.</h2>
          </div>
          <p className="wb-section__intro">Each is delivered personally, sustained rather than project-based, and built to compound over time.</p>
        </div>

        {/* Engagement 01 */}
        <article className="wb-eng">
          <header className="wb-eng__bar">
            <span className="wb-eng__num">01</span>
            <div>
              <h3 className="wb-eng__title">Business Activation</h3>
              <p className="wb-eng__sub">For established businesses with competing internal priorities</p>
            </div>
          </header>
          <div className="wb-eng__body">
            <div className="wb-eng__cols">
              <div>
                <div className="wb-eng__label">The situation</div>
                <p className="wb-body">Your business has real foundations — a product, a team, a customer base. But brand, digital, partnerships, finance, sales and operations are all competing for attention, with no architecture holding them together. Something is always urgent. Nothing is ever complete.</p>
              </div>
              <div>
                <div className="wb-eng__label">What we do</div>
                <p className="wb-body">We map the full set of priorities, build a coherent architecture across all of them, and activate in parallel. Each workstream has a defined objective, a named metric and a 90-day milestone — sequenced correctly and driven forward, with the right specialists brought in when the work requires it.</p>
              </div>
            </div>
            <div className="wb-eng__divider"></div>
            <div className="wb-eng__detail">
              <div className="wb-eng__label">Up to eight concurrent workstreams</div>
              <div className="wb-ws">
                {WORKSTREAMS.map((w, i) => (
                  <span key={w} className="wb-ws__item"><span className="wb-ws__n">{String(i+1).padStart(2,'0')}</span>{w}</span>
                ))}
              </div>
              <div className="wb-northstar">
                <span className="wb-northstar__star" aria-hidden="true">✦</span>
                <p>Every engagement is measured against a single <strong>North Star metric</strong> — the one number that tells us the business is moving in the right direction — alongside per-workstream KPIs reviewed on a <strong>90-day cycle</strong>.</p>
              </div>
            </div>
          </div>
        </article>

        {/* Engagement 02 */}
        <article className="wb-eng">
          <header className="wb-eng__bar">
            <span className="wb-eng__num">02</span>
            <div>
              <h3 className="wb-eng__title">Market Expansion</h3>
              <p className="wb-eng__sub">For companies establishing a physical footprint in a new market</p>
            </div>
          </header>
          <div className="wb-eng__body">
            <div className="wb-eng__cols">
              <div>
                <div className="wb-eng__label">The situation</div>
                <p className="wb-body">You have a proven product or model and the ambition to enter a new geography or segment — one that requires a physical presence: a retail location, a showroom, a hospitality venue, an operational base. The opportunity is real; the relationships, local knowledge and time to navigate entry correctly are not yet there.</p>
              </div>
              <div>
                <div className="wb-eng__label">What we do</div>
                <p className="wb-body">We navigate the entry: the right city, the right location format, the right local partners and introductions, and the right sequencing to get something real on the ground without wasting resource on false starts. We coordinate the full support ecosystem and hold the strategic thread throughout.</p>
              </div>
            </div>
            <div className="wb-eng__divider"></div>
            <div className="wb-eng__detail">
              <div className="wb-eng__label">Where we focus</div>
              <p className="wb-body">The world's <strong>top 100 gateway cities</strong> — those built around major international airports, where global commerce, travel retail and high-value consumer activity concentrate: international footfall, established premium retail, strong connectivity. Not general market-entry consulting — a focused capability, built on direct experience of what it takes to put something real on the ground in a tier-one location.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ── Where we work: a low-key auto-advancing carousel ──
   Each slide shows a photo if one exists at its `img` path; until then a
   designed city panel stands in. To populate with real photography, drop the
   named files into assets/imagery/ (e.g. carousel-london.jpg) — no code change. */
const SLIDES = [
  { city: 'London', img: 'assets/imagery/carousel-london.jpg',
    bg: 'linear-gradient(135deg, #16223A 0%, #1F2E47 55%, #2A3C5A 100%)',
    title: 'The full picture, held',
    d: 'Every priority held at once — so nothing pulls against anything else.' },
  { city: 'New York', img: 'assets/imagery/carousel-newyork.jpg',
    bg: 'linear-gradient(135deg, #0A0A0A 0%, #141A26 60%, #1F2E47 100%)',
    title: 'Outputs, not recommendations',
    d: 'The actual deliverables — models, plans, frameworks — not slides about them.' },
  { city: 'Dubai', img: 'assets/imagery/carousel-dubai.jpg',
    bg: 'linear-gradient(135deg, #111F3A 0%, #1F2E47 50%, #3A2E1A 100%)',
    title: 'AI-augmented delivery',
    d: 'AI throughout: faster work, consistent across every output, no friction.' },
  { city: 'Singapore', img: 'assets/imagery/carousel-singapore.jpg',
    bg: 'linear-gradient(135deg, #0E1B2E 0%, #1F2E47 60%, #24506B 100%)',
    title: 'Physical footprint expertise',
    d: 'Direct experience of establishing a presence in a world-class city.' },
  { city: 'Paris', img: 'assets/imagery/carousel-paris.jpg',
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
                <span className="wb-slide__eyebrow">Gateway city · {s.city}</span>
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
