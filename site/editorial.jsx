/* aRcj website — articles (with filter), about, contact, footer. */
const NS2 = () => window.ARcjDesignSystem_f07cf4;

// ─── Set this to YOUR Formspree form endpoint (see the launch checklist) ───
// Until you do, the form still shows the thank-you state but won't deliver email.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const ARTICLES = [
  { t: "The Maker's Mindset", c: 'Mindset', img: 'makers-mindset.png', read: '5 min', big: true,
    d: 'Why the best founders still build with their hands — and how to keep that instinct as you scale.' },
  { t: 'Boards that Build', c: 'Advisory', img: 'boards-that-build.png', read: '6 min',
    d: 'A board should add horsepower, not paperwork.' },
  { t: 'The Shortest Path to Business Success', c: 'Growth', img: 'the-efficiency-gap.png', read: '5 min', url: 'articles/strategy-and-growth.html',
    d: 'Positioning, pricing and go-to-market — the shortest line from where you are to where your business needs to be.' },
  { t: 'The Responsible Founder', c: 'Mindset', img: 'responsible-founder.png', read: '7 min',
    d: 'Building a company you would still be proud of in ten years.' },
  { t: 'Build to Last', c: 'Strategy', img: 'build-to-last.png', read: '5 min',
    d: 'Strategy that compounds — not quick wins that fade.' },
];
const FILTERS = ['All', 'Strategy', 'Growth', 'Advisory', 'Mindset'];

function Articles() {
  const { Eyebrow, Card, Badge, Tag } = NS2();
  const [filter, setFilter] = React.useState('All');
  const list = filter === 'All' ? ARTICLES : ARTICLES.filter(a => a.c === filter);
  const feature = list.find(a => a.big) || list[0];
  const rest = list.filter(a => a !== feature);
  return (
    <section className="wb-section wb-section--alt" id="articles">
      <div className="wb-shell">
        <div className="wb-section__head">
          <div>
            <Eyebrow rule>Field notes</Eyebrow>
            <h2 className="wb-h2">Articles</h2>
          </div>
          <div className="wb-filters">
            {FILTERS.map(f => (
              <Tag key={f} selected={filter===f} onClick={()=>setFilter(f)}>{f}</Tag>
            ))}
          </div>
        </div>
        <div className="wb-articles">
          {feature && (
            <Card className="wb-article wb-article--feat" elevation="raised" interactive
                  onClick={feature.url ? () => { window.location.href = feature.url; } : undefined}
                  media={`assets/imagery/${feature.img}`} padding="lg">
              <Badge variant="gold">{feature.c}</Badge>
              <h3 className="wb-article__t wb-article__t--feat">{feature.t}</h3>
              <p className="wb-body">{feature.d}</p>
              <div className="wb-article__meta"><span>{feature.read} read</span></div>
            </Card>
          )}
          <div className="wb-articles__col">
            {rest.map(a => (
              <Card key={a.t} className="wb-article wb-article--row" elevation="flat" interactive padding="sm"
                    onClick={a.url ? () => { window.location.href = a.url; } : undefined}>
                <div className="wb-article__row">
                  <img className="wb-article__thumb" src={`assets/imagery/${a.img}`} alt="" />
                  <div className="wb-article__rowbody">
                    <Badge variant="navy">{a.c}</Badge>
                    <h4 className="wb-article__t">{a.t}</h4>
                    <p className="wb-small">{a.d}</p>
                    <span className="wb-article__read">{a.read} read</span>
                  </div>
                </div>
              </Card>
            ))}
            {rest.length === 0 && <p className="wb-empty">More on <strong>{filter}</strong> coming soon.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { Eyebrow, Avatar, Stat } = NS2();
  return (
    <section className="wb-section" id="about">
      <div className="wb-shell wb-about">
        <div className="wb-about__media">
          <img src="assets/imagery/makers-mindset.png" alt="The maker's mindset" />
          <div className="wb-about__tile">
            <img src="assets/logo/arcj-mark-white.svg" alt="" />
          </div>
        </div>
        <div className="wb-about__copy">
          <Eyebrow rule>Who we are</Eyebrow>
          <h2 className="wb-h2">A small firm,<br/><span className="wb-ital">on purpose.</span></h2>
          <p className="wb-body">aRcj is led by <strong>Robert Penn</strong>, with brand and marketing led by <strong>Diogo Campos</strong>. Two senior people who would rather do the work than manage a deck of it. We built aRcj for the SME market — and, like IWG, step up to larger clients where the fit is right.</p>
          <div className="wb-team">
            <div className="wb-person"><Avatar name="Robert Penn" size="lg" color="ink" /><div><div className="wb-person__n">Robert Penn</div><div className="wb-person__r">Founder · Lead Consultant</div></div></div>
            <div className="wb-person"><Avatar name="Diogo Campos" size="lg" color="navy" /><div><div className="wb-person__n">Diogo Campos</div><div className="wb-person__r">Marketing & Biz Dev</div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ onBook }) {
  const { Eyebrow, Input, Checkbox, Button } = NS2();
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
  const [name, setName] = React.useState('');
  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setName(form.name.value || '');
    // Demo fallback until a real Formspree endpoint is set
    if (FORMSPREE_ENDPOINT.indexOf('YOUR_FORM_ID') !== -1) { setStatus('sent'); return; }
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch (err) { setStatus('error'); }
  };
  return (
    <section className="wb-cta" id="contact">
      <div className="wb-shell wb-cta__grid">
        <div className="wb-cta__copy">
          <Eyebrow tone="onDark" rule>Start a conversation</Eyebrow>
          <h2 className="wb-cta__title">Let's build something<br/>that lasts.</h2>
          <p className="wb-cta__lead">Tell us where you're headed. We'll come back within one working day with a straight answer on whether — and how — we can help.</p>
          <div className="wb-cta__contactline">
            <img src="assets/logo/arcj-mark-gold.svg" alt="" />
            <span>rob@arcj.uk · London</span>
          </div>
        </div>
        <div className="wb-cta__form">
          {status === 'sent' ? (
            <div className="wb-sent">
              <div className="wb-sent__check">✓</div>
              <h3>Thanks{name ? `, ${name.split(' ')[0]}` : ''}.</h3>
              <p>Your note is on its way to Robert. Expect a reply within a working day.</p>
              <Button variant="secondary" onClick={()=>setStatus('idle')}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <input type="hidden" name="_subject" value="New enquiry from arcj.uk" />
              <Input label="Your name" name="name" placeholder="Robert Penn" required defaultValue="" />
              <Input label="Work email" type="email" name="email" placeholder="you@company.com" required />
              <Input label="What are you working on?" name="message" placeholder="A line or two is plenty" />
              <Checkbox label="Keep me on the aRcj list" hint="Occasional notes for founders. No spam." defaultChecked name="newsletter" value="yes" />
              <Button as="button" type="submit" variant="accent" size="lg" block iconRight={<WbArrow/>} disabled={status==='sending'}>{status==='sending' ? 'Sending…' : 'Send it over'}</Button>
              {status==='error' && <p style={{color:'var(--arcj-danger)',fontSize:'14px',margin:0}}>Something went wrong — please email <strong>rob@arcj.uk</strong> directly and we'll pick it up.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  const { Logo } = NS2();
  const cols = [
    { h: 'Services', items: ['Strategy & Growth', 'Marketing & Brand', 'Board Advisory'] },
    { h: 'Company', items: ['About', 'Articles', 'Contact'] },
  ];
  return (
    <footer className="wb-footer">
      <div className="wb-shell wb-footer__grid">
        <div className="wb-footer__brand">
          <Logo height={30} tone="white" />
          <p className="wb-footer__tag">Where creativity meets sustainable growth.</p>
          <div className="wb-footer__pattern" />
        </div>
        {cols.map(c => (
          <div key={c.h} className="wb-footer__col">
            <div className="wb-footer__h">{c.h}</div>
            {c.items.map(i => <a key={i} href="#top" className="wb-footer__link" onClick={(e)=>{e.preventDefault();onNav('top');}}>{i}</a>)}
          </div>
        ))}
        <div className="wb-footer__col">
          <div className="wb-footer__h">aRcj Ltd</div>
          <span className="wb-footer__muted">London, United Kingdom</span>
          <span className="wb-footer__muted">rob@arcj.uk</span>
        </div>
      </div>
      <div className="wb-shell wb-footer__legal">
        <span>© 2026 aRcj Ltd. All rights reserved.</span>
        <span>Registered in England &amp; Wales</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Articles, About, Contact, Footer });
