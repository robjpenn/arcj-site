/* aRcj website — header, hero, stats strip, services.
   Composes design-system primitives from the compiled bundle. */
const NS = () => window.ARcjDesignSystem_f07cf4;

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
);

function Header({ onNav, onBook }) {
  const { Logo, Button } = NS();
  const links = ['Services', 'Articles', 'About', 'Contact'];
  return (
    <header className="wb-header">
      <div className="wb-shell wb-header__inner">
        <a className="wb-logo" href="#top" onClick={(e)=>{e.preventDefault();onNav('top');}}><Logo height={28} tone="ink" /></a>
        <nav className="wb-nav">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="wb-nav__link"
               onClick={(e)=>{e.preventDefault();onNav(l.toLowerCase());}}>{l}</a>
          ))}
        </nav>
        <div className="wb-header__cta">
          <Button variant="primary" size="sm" iconRight={<Arrow/>} onClick={onBook}>Book a call</Button>
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
          <Eyebrow rule>Where creativity meets sustainable growth</Eyebrow>
          <h1 className="wb-hero__title">Build something<br/><span className="wb-ital">real.</span></h1>
          <p className="wb-hero__lead">aRcj is a London consultancy for founders and small teams. We turn a good idea into a business that lasts — across strategy, marketing and growth.</p>
          <div className="wb-hero__actions">
            <Button variant="accent" size="lg" iconRight={<Arrow/>} onClick={onBook}>Start a project</Button>
            <Button variant="secondary" size="lg" onClick={()=>onNav('services')}>How we work</Button>
          </div>
          <div className="wb-hero__meta">
            <span><strong>SME-focused</strong> · enterprise when it fits</span>
            <span className="wb-dot">•</span>
            <span>Based in London</span>
          </div>
        </div>
        <div className="wb-hero__media">
          <div className="wb-hero__panel">
            <img src="assets/imagery/build-something-real.png" alt="Build something real" />
          </div>
          <div className="wb-hero__badge">
            <img src="assets/logo/arcj-mark-white.svg" alt="" />
            <div>
              <div className="wb-hero__badge-k">aRcj Ltd</div>
              <div className="wb-hero__badge-s">Consultancy · London</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const { Stat } = NS();
  return (
    <section className="wb-stats">
      <div className="wb-shell wb-stats__grid">
        <Stat eyebrow="Raised" prefix="£" value="2.4" suffix="M" label="By our SME clients in 2025" onDark />
        <Stat eyebrow="Growth" value="3.4" suffix="×" label="Average pipeline uplift" trend={{dir:'up',label:'+18% YoY'}} onDark />
        <Stat eyebrow="Founders" value="40" suffix="+" label="Advised since launch" onDark />
        <Stat eyebrow="Retained" value="9" suffix="/10" label="Clients who work with us again" onDark />
      </div>
    </section>
  );
}

function Services({ onNav }) {
  const { Eyebrow, Card, Button, Badge } = NS();
  const services = [
    { k: 'Strategy & Growth', d: 'Positioning, pricing and go-to-market. We find the shortest line between where you are and where the business needs to be.', tag: 'Most requested' },
    { k: 'Marketing & Brand', d: 'Brand, content and demand. Diogo leads marketing that sounds like you and actually moves pipeline.', tag: null },
    { k: 'Board Advisory', d: 'Boards that build, not just govern. Practical counsel for owners stepping up to their next stage.', tag: null },
  ];
  return (
    <section className="wb-section" id="services">
      <div className="wb-shell">
        <div className="wb-section__head">
          <div>
            <Eyebrow rule>What we do</Eyebrow>
            <h2 className="wb-h2">Hands-on help, <span className="wb-ital">where it counts.</span></h2>
          </div>
          <p className="wb-section__intro">A small, senior team. You work directly with the people doing the thinking — no layers, no hand-offs.</p>
        </div>
        <div className="wb-services">
          {services.map((s, i) => (
            <Card key={s.k} elevation="raised" interactive accentTop={i===0} padding="lg" onClick={()=>onNav('contact')}>
              <div className="wb-service__num">0{i+1}</div>
              <h3 className="wb-h3">{s.k}{s.tag && <Badge variant="gold" style={{marginLeft:'10px',verticalAlign:'middle'}}>{s.tag}</Badge>}</h3>
              <p className="wb-body">{s.d}</p>
              <span className="wb-textlink">Talk to us <Arrow/></span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, StatsStrip, Services, WbArrow: Arrow });
