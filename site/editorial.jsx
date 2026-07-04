/* aRcj website — how we work, why aRcj, contact, footer. */
const NS2 = () => window.ARcjDesignSystem_f07cf4;

// ─── Set this to YOUR Formspree form endpoint (see HOW-TO-LAUNCH.md) ───
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrevjked';

function HowWeWork() {
  const { Eyebrow } = NS2();
  const cards = [
    { k: 'A specialist network, on plan', d: 'Design, content, financial and legal specialists — brought in only when the work genuinely requires it, inside a plan we have already set together.' },
    { k: 'Delivered personally', d: 'No handoff to a junior team. The partner who sits across the table in the first conversation is the partner who drives the work throughout.' },
  ];
  return (
    <section className="wb-section" id="how">
      <div className="wb-shell">
        <div className="wb-section__head">
          <div>
            <Eyebrow rule>03 — How we work</Eyebrow>
            <h2 className="wb-h2">A senior <span className="wb-ital">working partner.</span></h2>
          </div>
          <p className="wb-section__intro">We hold the full picture and the relationships — with you, with the work, and with any specialists brought in to execute. We do not try to do everything ourselves, and we do not disappear once a specialist is engaged.</p>
        </div>
        <div className="wb-how">
          {cards.map((c) => (
            <div key={c.k} className="wb-how__card">
              <h3 className="wb-h3">{c.k}</h3>
              <p className="wb-body">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { k: 'Direct access, always', d: 'You work with the same senior partner from the first conversation to the last output — never a junior team relaying instructions.' },
  { k: 'Outputs, not recommendations', d: 'We produce the actual plans, campaigns and frameworks the work requires — not slides describing what should be done.' },
  { k: 'AI-augmented delivery', d: 'Our engagements use AI throughout — for research, drafting and modelling. We work faster and iterate without friction, at senior-consultant quality.' },
  { k: 'Honest scoping', d: 'We will tell you plainly if we are not the right fit for what you are trying to do — before any engagement starts.' },
  { k: 'No handoff', d: 'The same person who scopes the engagement drives it, start to finish. The quality of the thinking and the quality of the output are the same thing throughout.' },
];

function WhyArcj() {
  const { Eyebrow } = NS2();
  return (
    <section className="wb-section wb-section--ink" id="why">
      <div className="wb-shell">
        <div className="wb-section__head">
          <div>
            <Eyebrow rule tone="onDark">Why aRcj</Eyebrow>
            <h2 className="wb-h2 wb-h2--light">Five reasons it<br/><span className="wb-ital">holds together.</span></h2>
          </div>
        </div>
        <div className="wb-why">
          {REASONS.map((r, i) => (
            <div key={r.k} className="wb-why__item">
              <span className="wb-why__num">{String(i+1).padStart(2,'0')}</span>
              <div>
                <h3 className="wb-why__k">{r.k}</h3>
                <p className="wb-why__d">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { Eyebrow, Input, Button } = NS2();
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
  const [name, setName] = React.useState('');
  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setName(form.name.value || '');
    if (FORMSPREE_ENDPOINT.indexOf('YOUR_FORM_ID') !== -1) { setStatus('sent'); return; }
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form),
      });
      if (res.ok && typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit', { event_category: 'contact', event_label: 'enquiry_form' });
      }
      setStatus(res.ok ? 'sent' : 'error');
    } catch (err) { setStatus('error'); }
  };
  return (
    <section className="wb-cta" id="contact">
      <div className="wb-shell wb-cta__grid">
        <div className="wb-cta__copy">
          <Eyebrow tone="onDark" rule>Start a conversation</Eyebrow>
          <h2 className="wb-cta__title">No brief required<br/>in advance.</h2>
          <p className="wb-cta__lead">If you are considering an engagement with aRcj, the right starting point is a direct conversation. We will tell you honestly whether we are the right fit for what you are trying to do.</p>
          <div className="wb-cta__contactline">
            <img src="assets/logo/arcj-mark-gold.svg" alt="" />
            <span>rob@arcj.uk · London</span>
          </div>
        </div>
        <div className="wb-cta__form">
          {status === 'sent' ? (
            <div className="wb-sent">
              <div className="wb-sent__check">✓</div>
              <h3>Thank you{name ? `, ${name.split(' ')[0]}` : ''}.</h3>
              <p>Your note is on its way to Rob. Expect a reply within one working day.</p>
              <Button variant="secondary" onClick={()=>setStatus('idle')}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <input type="hidden" name="_subject" value="New enquiry from arcj.uk" />
              <Input label="Your name" name="name" placeholder="Jane Doe" required defaultValue="" />
              <Input label="Work email" type="email" name="email" placeholder="you@company.com" required />
              <Input label="Company" name="company" placeholder="Your company" />
              <Input label="What are you considering?" name="message" placeholder="A line or two on the situation is plenty" />
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
  return (
    <footer className="wb-footer">
      <div className="wb-shell wb-footer__grid">
        <div className="wb-footer__brand">
          <Logo height={30} tone="white" />
          <p className="wb-footer__tag">The senior partner you haven't hired yet.</p>
        </div>
        <div className="wb-footer__col">
          <div className="wb-footer__h">Services</div>
          <a href="strategy-growth.html" className="wb-footer__link">Strategy &amp; Growth</a>
          <a href="marketing-brand.html" className="wb-footer__link">Marketing &amp; Brand</a>
          <a href="board-advisory.html" className="wb-footer__link">Board Advisory</a>
        </div>
        <div className="wb-footer__col">
          <div className="wb-footer__h">Firm</div>
          <a href="about.html" className="wb-footer__link">About</a>
          <a href="#why" className="wb-footer__link" onClick={(e)=>{e.preventDefault();onNav('why');}}>Why aRcj</a>
          <a href="contact.html" className="wb-footer__link">Contact</a>
        </div>
        <div className="wb-footer__col">
          <div className="wb-footer__h">aRcj</div>
          <span className="wb-footer__muted">Consultancy for founders &amp; SMEs</span>
          <span className="wb-footer__muted">London, United Kingdom</span>
          <a href="mailto:rob@arcj.uk" className="wb-footer__link">rob@arcj.uk</a>
        </div>
      </div>
      <div className="wb-shell wb-footer__legal">
        <span>© 2026 aRcj Ltd. All rights reserved.</span>
        <span>Registered in England &amp; Wales</span>
      </div>
    </footer>
  );
}

Object.assign(window, { HowWeWork, WhyArcj, Contact, Footer });
