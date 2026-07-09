/* @ds-bundle: {"format":3,"namespace":"ARcjDesignSystem_f07cf4","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"bc80f1e43726","components/actions/IconButton.jsx":"d382ce08dfbb","components/brand/Eyebrow.jsx":"d4c120a9a75a","components/brand/Logo.jsx":"242c8cbf0e2c","components/display/Avatar.jsx":"bcf542269b30","components/display/Badge.jsx":"d44f0367effd","components/display/Card.jsx":"4d72a47b59a5","components/display/Stat.jsx":"253088284668","components/display/Tag.jsx":"acaf7a40beeb","components/forms/Checkbox.jsx":"79862bf6ea0c","components/forms/Input.jsx":"7f643cdba849","ui_kits/website/editorial.jsx":"e64f7184534c","ui_kits/website/sections.jsx":"7face0b32cbf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ARcjDesignSystem_f07cf4 = window.ARcjDesignSystem_f07cf4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj Button — the primary action element.
 * Geometric Poppins label, confident weight, restrained motion.
 */

const CSS = `
.arcj-btn{
  --_bg:var(--arcj-ink); --_fg:var(--arcj-snow); --_bd:transparent;
  display:inline-flex; align-items:center; justify-content:center; gap:0.5em;
  font-family:var(--font-sans); font-weight:var(--fw-semibold);
  letter-spacing:var(--ls-snug); line-height:1; white-space:nowrap;
  border:var(--border-med) solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-pill); cursor:pointer; text-decoration:none;
  transition:transform var(--dur-fast) var(--ease-out),
             background var(--dur-base) var(--ease-out),
             box-shadow var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
  -webkit-tap-highlight-color:transparent; user-select:none;
}
.arcj-btn:focus-visible{ outline:none; box-shadow:var(--shadow-focus); }
.arcj-btn:active{ transform:translateY(1px) scale(0.99); }
.arcj-btn[disabled]{ opacity:0.42; cursor:not-allowed; pointer-events:none; }

.arcj-btn--sm{ font-size:var(--fs-body-sm); padding:0.5rem 1rem; }
.arcj-btn--md{ font-size:var(--fs-body); padding:0.72rem 1.4rem; }
.arcj-btn--lg{ font-size:var(--fs-body-lg); padding:0.92rem 1.8rem; }
.arcj-btn--block{ width:100%; }

.arcj-btn--primary{ --_bg:var(--arcj-ink); --_fg:var(--arcj-snow); }
.arcj-btn--primary:hover{ --_bg:#000; box-shadow:var(--shadow-md); }
.arcj-btn--navy{ --_bg:var(--arcj-navy); --_fg:var(--arcj-snow); }
.arcj-btn--navy:hover{ --_bg:var(--arcj-navy-deep); box-shadow:var(--shadow-md); }
.arcj-btn--accent{ --_bg:var(--arcj-amber); --_fg:#241803; }
.arcj-btn--accent:hover{ --_bg:var(--arcj-amber-soft); box-shadow:var(--shadow-md); }
.arcj-btn--secondary{ --_bg:transparent; --_fg:var(--arcj-ink); --_bd:var(--arcj-ink); }
.arcj-btn--secondary:hover{ --_bg:var(--arcj-ink); --_fg:var(--arcj-snow); }
.arcj-btn--ghost{ --_bg:transparent; --_fg:var(--arcj-ink); --_bd:transparent; }
.arcj-btn--ghost:hover{ --_bg:var(--arcj-grey-100); }
.arcj-btn--ghost.arcj-btn--on-dark{ --_fg:var(--arcj-snow); }
.arcj-btn--ghost.arcj-btn--on-dark:hover{ --_bg:rgba(255,255,255,0.12); }
.arcj-btn__icon{ display:inline-flex; font-size:1.1em; }
`;
if (typeof document !== 'undefined' && !document.getElementById('arcj-button-css')) {
  const el = document.createElement('style');
  el.id = 'arcj-button-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  onDark = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  ...rest
}) {
  const Tag = as;
  const classes = ['arcj-btn', `arcj-btn--${variant}`, `arcj-btn--${size}`, block ? 'arcj-btn--block' : '', onDark ? 'arcj-btn--on-dark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "arcj-btn__icon",
    "aria-hidden": "true"
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "arcj-btn__icon",
    "aria-hidden": "true"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj IconButton — a square/circular control carrying a single icon.
 * For toolbars, cards, and compact UI. Always pass an aria-label.
 */

const CSS = `
.arcj-iconbtn{
  --_bg:transparent; --_fg:var(--arcj-ink); --_bd:transparent;
  display:inline-flex; align-items:center; justify-content:center;
  border:var(--border-med) solid var(--_bd); background:var(--_bg); color:var(--_fg);
  cursor:pointer; padding:0; line-height:0;
  transition:transform var(--dur-fast) var(--ease-out),
             background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  -webkit-tap-highlight-color:transparent;
}
.arcj-iconbtn:focus-visible{ outline:none; box-shadow:var(--shadow-focus); }
.arcj-iconbtn:active{ transform:scale(0.94); }
.arcj-iconbtn[disabled]{ opacity:0.4; cursor:not-allowed; pointer-events:none; }
.arcj-iconbtn--sm{ width:34px; height:34px; font-size:16px; }
.arcj-iconbtn--md{ width:42px; height:42px; font-size:19px; }
.arcj-iconbtn--lg{ width:50px; height:50px; font-size:22px; }
.arcj-iconbtn--round{ border-radius:var(--radius-pill); }
.arcj-iconbtn--soft{ border-radius:var(--radius-md); }
.arcj-iconbtn--solid{ --_bg:var(--arcj-ink); --_fg:var(--arcj-snow); }
.arcj-iconbtn--solid:hover{ --_bg:#000; box-shadow:var(--shadow-sm); }
.arcj-iconbtn--outline{ --_bd:var(--border-default); }
.arcj-iconbtn--outline:hover{ --_bg:var(--arcj-grey-100); --_bd:var(--arcj-ink); }
.arcj-iconbtn--ghost:hover{ --_bg:var(--arcj-grey-100); }
.arcj-iconbtn--ghost.arcj-iconbtn--on-dark{ --_fg:var(--arcj-snow); }
.arcj-iconbtn--ghost.arcj-iconbtn--on-dark:hover{ --_bg:rgba(255,255,255,0.12); }
.arcj-iconbtn svg{ width:1em; height:1em; display:block; }
`;
if (typeof document !== 'undefined' && !document.getElementById('arcj-iconbutton-css')) {
  const el = document.createElement('style');
  el.id = 'arcj-iconbutton-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'round',
  onDark = false,
  className = '',
  ...rest
}) {
  const classes = ['arcj-iconbtn', `arcj-iconbtn--${variant}`, `arcj-iconbtn--${size}`, `arcj-iconbtn--${shape}`, onDark ? 'arcj-iconbtn--on-dark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj Eyebrow — the uppercase, wide-tracked overline that sits above
 * headings throughout the brand. Optional leading rule or mark.
 */

const CSS = `
.arcj-eyebrow{
  display:inline-flex; align-items:center; gap:0.6em; font-family:var(--font-sans);
  font-size:var(--fs-overline); font-weight:var(--fw-semibold);
  letter-spacing:var(--ls-overline); text-transform:uppercase;
  color:var(--text-accent); line-height:1;
}
.arcj-eyebrow--rule::before{ content:""; width:1.8em; height:2px; background:currentColor; border-radius:2px; opacity:0.9; }
.arcj-eyebrow--muted{ color:var(--text-tertiary); }
.arcj-eyebrow--on-dark{ color:var(--arcj-amber-soft); }
`;
if (typeof document !== 'undefined' && !document.getElementById('arcj-eyebrow-css')) {
  const el = document.createElement('style');
  el.id = 'arcj-eyebrow-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Eyebrow({
  children,
  rule = false,
  tone = 'accent',
  className = '',
  ...rest
}) {
  const toneClass = tone === 'muted' ? 'arcj-eyebrow--muted' : tone === 'onDark' ? 'arcj-eyebrow--on-dark' : '';
  const classes = ['arcj-eyebrow', rule ? 'arcj-eyebrow--rule' : '', toneClass, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj Logo — the brand mark and full lockup, inlined as SVG so it is
 * fully portable and recolorable. Uses currentColor; set `tone` or wrap
 * in any color context. The blade mark doubles as the responsive logo
 * (use `variant="mark"` below ~150px).
 */

const MARK_VB = '0 0 416.11 465.7';
const MARK_PATHS = '<path d="M136.89,122.5V375L0,352V231.85A102,102,0,0,1,85.08,131.23Z"></path><path d="M148.91,386.7,367.69,260.57l48.42,130.1-107.6,62a97.23,97.23,0,0,1-123.57-22.35Z"></path><path d="M367.35,233.47,148.81,106.92,237.35,0,344.82,62.24a97.26,97.26,0,0,1,42.36,118.22Z"></path>';
const LOCKUP_VB = '0 0 605.76 151.77';
const LOCKUP_PATHS = '<path d="M38.3,39v70.66L0,103.24V69.62A28.54,28.54,0,0,1,23.81,41.47Z"></path><path d="M41.67,113l61.21-35.29,13.55,36.4L86.32,131.41a27.19,27.19,0,0,1-34.57-6.25Z"></path><path d="M102.79,70.07,41.64,34.66,66.41,4.75,96.48,22.16a27.21,27.21,0,0,1,11.85,33.08Z"></path><path d="M239.47,98v21.46h-6.3c-12.26,0-20.09-4.6-23.33-13.62a35.58,35.58,0,0,1-29.79,15.66c-24.18,0-42.4-19.58-42.4-45.46s18.22-45.46,42.4-45.46A35.59,35.59,0,0,1,208.31,44V32.58h22.14V90.64c0,4.6,2.55,7.32,7.32,7.32ZM208.31,76c0-13.62-10.21-24-24-24-13.62,0-23.83,10.39-23.83,24s10.21,24,23.83,24C198.1,100,208.31,89.62,208.31,76Z"></path><path d="M340.27,97.28v22.14H333q-25.8,0-37.29-20.43L281.87,77.53H270.8v41.89H247.3V1.93h51.26c22.64,0,39.84,16.52,39.84,38.48,0,17.88-11.92,31.84-29.12,35.93l8.86,12.09a20.33,20.33,0,0,0,17.36,8.85ZM270.8,57.1H298c9.2,0,16.18-7.15,16.18-16.52s-7-16.51-16.18-16.51H270.8Z"></path><path d="M410.09,86.05a23.61,23.61,0,0,1-22,14c-13.63,0-23.84-10.38-23.84-24s10.21-24,23.84-24a23.62,23.62,0,0,1,22,14l18.4-13.27c-7.8-13.4-22.57-22.15-40.37-22.15-26.56,0-46.66,19.59-46.66,45.47s20.1,45.47,46.66,45.47c17.8,0,32.57-8.75,40.39-22.16Z"></path><path d="M529,110.54v10.93H492.91v-58h11.6v47.05Z"></path><path d="M544,88.61v17.48c0,3.36,2.1,5.38,5.63,5.38h4.29v10H548c-9.84,0-15-4.71-15-13.53V88.61h-6.81v-10h4c2.27,0,3.45-1.18,3.45-3.44v-8H544V78.61h9.92v10Z"></path><path d="M605.76,110.88v10.59h-3.1c-6,0-9.92-2.27-11.52-6.73a17.55,17.55,0,0,1-14.7,7.73c-11.93,0-20.92-9.66-20.92-22.43s9-22.44,20.92-22.44a17.57,17.57,0,0,1,13.95,6.64V61h10.92v46.31a3.27,3.27,0,0,0,3.61,3.61ZM590.39,100a11.81,11.81,0,1,0-11.85,11.85A11.58,11.58,0,0,0,590.39,100Z"></path><path d="M425.07,131.51h4.6c8.68,0,13.28-4.6,13.28-12.77V32.58h22.13V120.1c0,20.94-10.89,31.67-34.56,31.67h-5.45Z"></path><path d="M446.39,0h18.69a0,0,0,0,1,0,0V12A10.07,10.07,0,0,1,455,22.1H443a0,0,0,0,1,0,0V3.41A3.41,3.41,0,0,1,446.39,0Z"></path>';
const TONES = {
  ink: 'var(--arcj-ink)',
  black: '#000000',
  white: 'var(--arcj-snow)',
  navy: 'var(--arcj-navy)',
  grey: 'var(--arcj-grey-400)',
  gold: 'var(--arcj-amber)'
};
function Logo({
  variant = 'lockup',
  tone = 'ink',
  height,
  className = '',
  title = 'aRcj Ltd',
  style = {},
  ...rest
}) {
  const isMark = variant === 'mark';
  const vb = isMark ? MARK_VB : LOCKUP_VB;
  const paths = isMark ? MARK_PATHS : LOCKUP_PATHS;
  const h = height != null ? typeof height === 'number' ? `${height}px` : height : isMark ? '40px' : '32px';
  const color = TONES[tone] || tone;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: ['arcj-logo', className].filter(Boolean).join(' '),
    viewBox: vb,
    role: "img",
    "aria-label": title,
    fill: color,
    style: {
      height: h,
      width: 'auto',
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: `<title>${title}</title>${paths}`
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj Avatar — person or company mark. Initials fallback uses the
 * brand ink/navy. Sizes from xs to xl.
 */

const CSS = `
.arcj-avatar{
  display:inline-flex; align-items:center; justify-content:center; flex:none;
  font-family:var(--font-sans); font-weight:var(--fw-semibold); color:var(--arcj-snow);
  background:var(--arcj-navy); border-radius:var(--radius-pill); overflow:hidden;
  letter-spacing:var(--ls-snug); user-select:none; position:relative;
}
.arcj-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.arcj-avatar--xs{ width:28px; height:28px; font-size:11px; }
.arcj-avatar--sm{ width:36px; height:36px; font-size:13px; }
.arcj-avatar--md{ width:46px; height:46px; font-size:16px; }
.arcj-avatar--lg{ width:60px; height:60px; font-size:21px; }
.arcj-avatar--xl{ width:84px; height:84px; font-size:30px; }
.arcj-avatar--ink{ background:var(--arcj-ink); }
.arcj-avatar--gold{ background:var(--arcj-amber); color:#241803; }
.arcj-avatar--square{ border-radius:var(--radius-md); }
.arcj-avatar--ring{ box-shadow:0 0 0 2px var(--surface-card), 0 0 0 3.5px var(--arcj-grey-200); }
`;
if (typeof document !== 'undefined' && !document.getElementById('arcj-avatar-css')) {
  const el = document.createElement('style');
  el.id = 'arcj-avatar-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function initials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({
  name = '',
  src,
  size = 'md',
  color = 'navy',
  square = false,
  ring = false,
  className = '',
  ...rest
}) {
  const classes = ['arcj-avatar', `arcj-avatar--${size}`, `arcj-avatar--${color}`, square ? 'arcj-avatar--square' : '', ring ? 'arcj-avatar--ring' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj Badge — a small status / category pill.
 */

const CSS = `
.arcj-badge{
  display:inline-flex; align-items:center; gap:0.36em; font-family:var(--font-sans);
  font-size:var(--fs-caption); font-weight:var(--fw-semibold); line-height:1;
  letter-spacing:var(--ls-wide); text-transform:uppercase;
  padding:0.4em 0.7em; border-radius:var(--radius-sm); border:1px solid transparent;
}
.arcj-badge--dot::before{ content:""; width:6px; height:6px; border-radius:50%; background:currentColor; }
.arcj-badge--neutral{ background:var(--arcj-grey-100); color:var(--arcj-grey-700); }
.arcj-badge--ink{ background:var(--arcj-ink); color:var(--arcj-snow); }
.arcj-badge--navy{ background:var(--arcj-navy-tint); color:var(--arcj-navy); }
.arcj-badge--gold{ background:var(--arcj-amber-tint); color:var(--arcj-amber-deep); }
.arcj-badge--success{ background:#e3efe7; color:var(--arcj-success); }
.arcj-badge--danger{ background:#f6e4e4; color:var(--arcj-danger); }
.arcj-badge--outline{ background:transparent; border-color:var(--border-default); color:var(--text-secondary); }
`;
if (typeof document !== 'undefined' && !document.getElementById('arcj-badge-css')) {
  const el = document.createElement('style');
  el.id = 'arcj-badge-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Badge({
  children,
  variant = 'neutral',
  dot = false,
  className = '',
  ...rest
}) {
  const classes = ['arcj-badge', `arcj-badge--${variant}`, dot ? 'arcj-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj Card — the core surface container. Calm white panel with a
 * restrained navy-tinted shadow; optional accent edge for emphasis.
 */

const CSS = `
.arcj-card{
  display:flex; flex-direction:column; font-family:var(--font-sans);
  background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg); overflow:hidden; position:relative;
  transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.arcj-card--flat{ box-shadow:none; }
.arcj-card--raised{ box-shadow:var(--shadow-md); border-color:transparent; }
.arcj-card--interactive{ cursor:pointer; }
.arcj-card--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); border-color:transparent; }
.arcj-card--ink{ background:var(--surface-inverse); color:var(--text-on-dark); border-color:transparent; }
.arcj-card--navy{ background:var(--surface-navy); color:var(--text-on-dark); border-color:transparent; }
.arcj-card--sand{ background:var(--surface-sand); border-color:transparent; }
.arcj-card--accent-top{ border-top:3px solid var(--arcj-amber); }
.arcj-card__media{ width:100%; aspect-ratio:16/10; object-fit:cover; display:block; background:var(--arcj-grey-100); }
.arcj-card__body{ padding:var(--space-6); display:flex; flex-direction:column; gap:var(--space-3); }
.arcj-card--pad-sm .arcj-card__body{ padding:var(--space-4); }
.arcj-card--pad-lg .arcj-card__body{ padding:var(--space-8); }
`;
if (typeof document !== 'undefined' && !document.getElementById('arcj-card-css')) {
  const el = document.createElement('style');
  el.id = 'arcj-card-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Card({
  children,
  media,
  elevation = 'flat',
  tone = 'default',
  interactive = false,
  accentTop = false,
  padding = 'md',
  className = '',
  ...rest
}) {
  const toneClass = tone !== 'default' ? `arcj-card--${tone}` : '';
  const classes = ['arcj-card', `arcj-card--${elevation}`, toneClass, interactive ? 'arcj-card--interactive' : '', accentTop ? 'arcj-card--accent-top' : '', `arcj-card--pad-${padding}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), media && (typeof media === 'string' ? /*#__PURE__*/React.createElement("img", {
    className: "arcj-card__media",
    src: media,
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    className: "arcj-card__media"
  }, media)), /*#__PURE__*/React.createElement("div", {
    className: "arcj-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj Stat — a big-number metric block for results, KPIs and proof points.
 * Tight Poppins figure, small uppercase label, optional trend.
 */

const CSS = `
.arcj-stat{ display:flex; flex-direction:column; gap:0.25rem; font-family:var(--font-sans); }
.arcj-stat__eyebrow{ font-size:var(--fs-overline); font-weight:var(--fw-semibold); letter-spacing:var(--ls-overline); text-transform:uppercase; color:var(--text-accent); }
.arcj-stat__value{ font-size:clamp(2.2rem,1.4rem+2.4vw,3.4rem); font-weight:var(--fw-bold); line-height:1; letter-spacing:var(--ls-tight); color:var(--text-primary); font-variant-numeric:tabular-nums; display:flex; align-items:baseline; gap:0.12em; }
.arcj-stat__suffix{ font-size:0.5em; font-weight:var(--fw-semibold); color:var(--text-secondary); }
.arcj-stat__label{ font-size:var(--fs-body-sm); color:var(--text-secondary); line-height:1.4; max-width:24ch; }
.arcj-stat__trend{ display:inline-flex; align-items:center; gap:0.25em; font-size:var(--fs-caption); font-weight:var(--fw-semibold); }
.arcj-stat__trend--up{ color:var(--arcj-success); }
.arcj-stat__trend--down{ color:var(--arcj-danger); }
.arcj-stat--on-dark .arcj-stat__value{ color:var(--arcj-snow); }
.arcj-stat--on-dark .arcj-stat__label{ color:var(--text-on-dark-muted); }
.arcj-stat--on-dark .arcj-stat__suffix{ color:var(--arcj-amber-soft); }
.arcj-stat--on-dark .arcj-stat__eyebrow{ color:var(--arcj-amber-soft); }
`;
if (typeof document !== 'undefined' && !document.getElementById('arcj-stat-css')) {
  const el = document.createElement('style');
  el.id = 'arcj-stat-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Stat({
  value,
  suffix,
  prefix,
  label,
  eyebrow,
  trend,
  onDark = false,
  className = '',
  ...rest
}) {
  const classes = ['arcj-stat', onDark ? 'arcj-stat--on-dark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "arcj-stat__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    className: "arcj-stat__value"
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "arcj-stat__suffix"
  }, prefix), value, suffix && /*#__PURE__*/React.createElement("span", {
    className: "arcj-stat__suffix"
  }, suffix)), trend && /*#__PURE__*/React.createElement("span", {
    className: `arcj-stat__trend arcj-stat__trend--${trend.dir || 'up'}`
  }, trend.dir === 'down' ? '▾' : '▴', " ", trend.label), label && /*#__PURE__*/React.createElement("span", {
    className: "arcj-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj Tag — a removable / selectable chip, lower-key than Badge.
 * Sentence case, pill shape, for filters and topic lists.
 */

const CSS = `
.arcj-tag{
  display:inline-flex; align-items:center; gap:0.4em; font-family:var(--font-sans);
  font-size:var(--fs-body-sm); font-weight:var(--fw-medium); line-height:1;
  padding:0.42em 0.8em; border-radius:var(--radius-pill);
  background:var(--surface-card); color:var(--text-secondary);
  border:1px solid var(--border-subtle); cursor:default;
  transition:border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
}
.arcj-tag--clickable{ cursor:pointer; }
.arcj-tag--clickable:hover{ border-color:var(--arcj-ink); color:var(--text-primary); }
.arcj-tag--selected{ background:var(--arcj-ink); border-color:var(--arcj-ink); color:var(--arcj-snow); }
.arcj-tag__x{ display:inline-flex; margin-right:-0.2em; border:none; background:none; padding:0; cursor:pointer; color:inherit; opacity:0.6; line-height:0; }
.arcj-tag__x:hover{ opacity:1; }
.arcj-tag__x svg{ width:13px; height:13px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('arcj-tag-css')) {
  const el = document.createElement('style');
  el.id = 'arcj-tag-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  className = '',
  ...rest
}) {
  const clickable = !!onClick || selected;
  const classes = ['arcj-tag', clickable ? 'arcj-tag--clickable' : '', selected ? 'arcj-tag--selected' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes,
    onClick: onClick
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "arcj-tag__x",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj Checkbox — square control with a crisp tick, brand-ink fill.
 */

const CSS = `
.arcj-check{ display:inline-flex; align-items:flex-start; gap:0.6rem; font-family:var(--font-sans); cursor:pointer; user-select:none; color:var(--text-primary); }
.arcj-check[aria-disabled="true"]{ opacity:0.45; cursor:not-allowed; }
.arcj-check__box{
  flex:none; width:20px; height:20px; border-radius:var(--radius-xs);
  border:var(--border-med) solid var(--arcj-grey-400); background:var(--surface-card);
  display:inline-flex; align-items:center; justify-content:center; margin-top:1px;
  transition:background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.arcj-check__box svg{ width:13px; height:13px; opacity:0; transform:scale(0.7); transition:opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-spring); color:var(--arcj-snow); }
.arcj-check input{ position:absolute; opacity:0; width:0; height:0; }
.arcj-check input:focus-visible + .arcj-check__box{ box-shadow:var(--shadow-focus); }
.arcj-check input:checked + .arcj-check__box{ background:var(--arcj-ink); border-color:var(--arcj-ink); }
.arcj-check input:checked + .arcj-check__box svg{ opacity:1; transform:scale(1); }
.arcj-check:hover input:not(:checked) + .arcj-check__box{ border-color:var(--arcj-ink); }
.arcj-check__body{ display:flex; flex-direction:column; gap:2px; }
.arcj-check__label{ font-size:var(--fs-body); line-height:1.35; }
.arcj-check__hint{ font-size:var(--fs-caption); color:var(--text-tertiary); }
`;
if (typeof document !== 'undefined' && !document.getElementById('arcj-checkbox-css')) {
  const el = document.createElement('style');
  el.id = 'arcj-checkbox-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  hint,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['arcj-check', className].filter(Boolean).join(' '),
    "aria-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "arcj-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12l5 5L20 6"
  }))), (label || hint) && /*#__PURE__*/React.createElement("span", {
    className: "arcj-check__body"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "arcj-check__label"
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    className: "arcj-check__hint"
  }, hint)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * aRcj Input — text field with optional label, hint and error.
 * Clean, generous, with a calm focus ring in brand navy.
 */

const CSS = `
.arcj-field{ display:flex; flex-direction:column; gap:0.42rem; font-family:var(--font-sans); width:100%; }
.arcj-field__label{ font-size:var(--fs-body-sm); font-weight:var(--fw-semibold); color:var(--text-primary); letter-spacing:var(--ls-snug); }
.arcj-field__req{ color:var(--arcj-amber-deep); margin-left:2px; }
.arcj-input-wrap{ position:relative; display:flex; align-items:center; }
.arcj-input{
  width:100%; box-sizing:border-box; font-family:var(--font-sans); font-size:var(--fs-body);
  color:var(--text-primary); background:var(--surface-card);
  border:var(--border-med) solid var(--border-default); border-radius:var(--radius-md);
  padding:0.7rem 0.9rem; line-height:1.4;
  transition:border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.arcj-input::placeholder{ color:var(--text-muted); }
.arcj-input:hover{ border-color:var(--arcj-grey-500); }
.arcj-input:focus{ outline:none; border-color:var(--arcj-navy); box-shadow:var(--shadow-focus); }
.arcj-input--icon{ padding-left:2.5rem; }
.arcj-input__icon{ position:absolute; left:0.85rem; color:var(--text-tertiary); pointer-events:none; display:inline-flex; font-size:18px; }
.arcj-input__icon svg{ width:18px; height:18px; }
.arcj-field--error .arcj-input{ border-color:var(--arcj-danger); }
.arcj-field--error .arcj-input:focus{ box-shadow:0 0 0 3px rgba(178,59,59,0.28); }
.arcj-field__msg{ font-size:var(--fs-caption); color:var(--text-tertiary); }
.arcj-field--error .arcj-field__msg{ color:var(--arcj-danger); }
.arcj-input[disabled]{ background:var(--surface-sunken); color:var(--text-muted); cursor:not-allowed; }
`;
if (typeof document !== 'undefined' && !document.getElementById('arcj-input-css')) {
  const el = document.createElement('style');
  el.id = 'arcj-input-css';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Input({
  label,
  hint,
  error,
  required = false,
  icon = null,
  id,
  className = '',
  ...rest
}) {
  const fieldId = id || `arcj-in-${Math.random().toString(36).slice(2, 8)}`;
  const msg = error || hint;
  return /*#__PURE__*/React.createElement("div", {
    className: ['arcj-field', error ? 'arcj-field--error' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "arcj-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "arcj-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "arcj-input-wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "arcj-input__icon",
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ['arcj-input', icon ? 'arcj-input--icon' : ''].filter(Boolean).join(' '),
    "aria-invalid": !!error
  }, rest))), msg && /*#__PURE__*/React.createElement("span", {
    className: "arcj-field__msg"
  }, msg));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/editorial.jsx
try { (() => {
/* aRcj website — articles (with filter), about, contact, footer. */
const NS2 = () => window.ARcjDesignSystem_f07cf4;
const ARTICLES = [{
  t: "The Maker's Mindset",
  c: 'Mindset',
  img: 'makers-mindset.png',
  read: '5 min',
  big: true,
  d: 'Why the best founders still build with their hands — and how to keep that instinct as you scale.'
}, {
  t: 'Boards that Build',
  c: 'Advisory',
  img: 'boards-that-build.png',
  read: '6 min',
  d: 'A board should add horsepower, not paperwork.'
}, {
  t: 'The Efficiency Gap',
  c: 'Growth',
  img: 'the-efficiency-gap.png',
  read: '4 min',
  d: 'Where small teams quietly lose their edge.'
}, {
  t: 'The Responsible Founder',
  c: 'Mindset',
  img: 'responsible-founder.png',
  read: '7 min',
  d: 'Building a company you would still be proud of in ten years.'
}, {
  t: 'Build to Last',
  c: 'Strategy',
  img: 'build-to-last.png',
  read: '5 min',
  d: 'Strategy that compounds — not quick wins that fade.'
}];
const FILTERS = ['All', 'Strategy', 'Growth', 'Advisory', 'Mindset'];
function Articles() {
  const {
    Eyebrow,
    Card,
    Badge,
    Tag
  } = NS2();
  const [filter, setFilter] = React.useState('All');
  const list = filter === 'All' ? ARTICLES : ARTICLES.filter(a => a.c === filter);
  const feature = list.find(a => a.big) || list[0];
  const rest = list.filter(a => a !== feature);
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-section wb-section--alt",
    id: "articles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-section__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Field notes"), /*#__PURE__*/React.createElement("h2", {
    className: "wb-h2"
  }, "Articles")), /*#__PURE__*/React.createElement("div", {
    className: "wb-filters"
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f)))), /*#__PURE__*/React.createElement("div", {
    className: "wb-articles"
  }, feature && /*#__PURE__*/React.createElement(Card, {
    className: "wb-article wb-article--feat",
    elevation: "raised",
    interactive: true,
    media: `../../assets/imagery/${feature.img}`,
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "gold"
  }, feature.c), /*#__PURE__*/React.createElement("h3", {
    className: "wb-article__t wb-article__t--feat"
  }, feature.t), /*#__PURE__*/React.createElement("p", {
    className: "wb-body"
  }, feature.d), /*#__PURE__*/React.createElement("div", {
    className: "wb-article__meta"
  }, /*#__PURE__*/React.createElement("span", null, feature.read, " read"))), /*#__PURE__*/React.createElement("div", {
    className: "wb-articles__col"
  }, rest.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.t,
    className: "wb-article wb-article--row",
    elevation: "flat",
    interactive: true,
    padding: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-article__row"
  }, /*#__PURE__*/React.createElement("img", {
    className: "wb-article__thumb",
    src: `../../assets/imagery/${a.img}`,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "wb-article__rowbody"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "navy"
  }, a.c), /*#__PURE__*/React.createElement("h4", {
    className: "wb-article__t"
  }, a.t), /*#__PURE__*/React.createElement("p", {
    className: "wb-small"
  }, a.d), /*#__PURE__*/React.createElement("span", {
    className: "wb-article__read"
  }, a.read, " read"))))), rest.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "wb-empty"
  }, "More on ", /*#__PURE__*/React.createElement("strong", null, filter), " coming soon.")))));
}
function About() {
  const {
    Eyebrow,
    Avatar,
    Stat
  } = NS2();
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-section",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-shell wb-about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-about__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/makers-mindset.png",
    alt: "The maker's mindset"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wb-about__tile"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/arcj-mark-white.svg",
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wb-about__copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Who we are"), /*#__PURE__*/React.createElement("h2", {
    className: "wb-h2"
  }, "A small firm,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "wb-ital"
  }, "on purpose.")), /*#__PURE__*/React.createElement("p", {
    className: "wb-body"
  }, "aRcj is led by ", /*#__PURE__*/React.createElement("strong", null, "Robert Penn"), ", with brand and marketing led by ", /*#__PURE__*/React.createElement("strong", null, "Diogo Campos"), ". Two senior people who would rather do the work than manage a deck of it. We built aRcj for the SME market \u2014 and, like IWG, step up to larger clients where the fit is right."), /*#__PURE__*/React.createElement("div", {
    className: "wb-team"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-person"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Robert Penn",
    size: "lg",
    color: "ink"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wb-person__n"
  }, "Robert Penn"), /*#__PURE__*/React.createElement("div", {
    className: "wb-person__r"
  }, "Founder \xB7 Lead Consultant"))), /*#__PURE__*/React.createElement("div", {
    className: "wb-person"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Diogo Campos",
    size: "lg",
    color: "navy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wb-person__n"
  }, "Diogo Campos"), /*#__PURE__*/React.createElement("div", {
    className: "wb-person__r"
  }, "Marketing & Biz Dev")))))));
}
function Contact({
  onBook
}) {
  const {
    Eyebrow,
    Input,
    Checkbox,
    Button
  } = NS2();
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-cta",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-shell wb-cta__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-cta__copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark",
    rule: true
  }, "Start a conversation"), /*#__PURE__*/React.createElement("h2", {
    className: "wb-cta__title"
  }, "Let's build something", /*#__PURE__*/React.createElement("br", null), "that lasts."), /*#__PURE__*/React.createElement("p", {
    className: "wb-cta__lead"
  }, "Tell us where you're headed. We'll come back within one working day with a straight answer on whether \u2014 and how \u2014 we can help."), /*#__PURE__*/React.createElement("div", {
    className: "wb-cta__contactline"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/arcj-mark-gold.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "hello@arcj.co.uk \xB7 London"))), /*#__PURE__*/React.createElement("div", {
    className: "wb-cta__form"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "wb-sent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-sent__check"
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", null, "Thanks", name ? `, ${name.split(' ')[0]}` : '', "."), /*#__PURE__*/React.createElement("p", null, "Your note is on its way to Robert. Expect a reply within a working day."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Robert Penn",
    required: true,
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "What are you working on?",
    placeholder: "A line or two is plenty"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Keep me on the aRcj list",
    hint: "Occasional notes for founders. No spam.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    as: "button",
    type: "submit",
    variant: "accent",
    size: "lg",
    block: true,
    iconRight: /*#__PURE__*/React.createElement(WbArrow, null)
  }, "Send it over")))));
}
function Footer({
  onNav
}) {
  const {
    Logo
  } = NS2();
  const cols = [{
    h: 'Services',
    items: ['Strategy & Growth', 'Marketing & Brand', 'Board Advisory']
  }, {
    h: 'Company',
    items: ['About', 'Articles', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "wb-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-shell wb-footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 30,
    tone: "white"
  }), /*#__PURE__*/React.createElement("p", {
    className: "wb-footer__tag"
  }, "Where creativity meets sustainable growth."), /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__pattern"
  })), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    className: "wb-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__h"
  }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#top",
    className: "wb-footer__link",
    onClick: e => {
      e.preventDefault();
      onNav('top');
    }
  }, i)))), /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-footer__h"
  }, "aRcj Ltd"), /*#__PURE__*/React.createElement("span", {
    className: "wb-footer__muted"
  }, "London, United Kingdom"), /*#__PURE__*/React.createElement("span", {
    className: "wb-footer__muted"
  }, "hello@arcj.co.uk"))), /*#__PURE__*/React.createElement("div", {
    className: "wb-shell wb-footer__legal"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 aRcj Ltd. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Registered in England & Wales")));
}
Object.assign(window, {
  Articles,
  About,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/editorial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* aRcj website — header, hero, stats strip, services.
   Composes design-system primitives from the compiled bundle. */
const NS = () => window.ARcjDesignSystem_f07cf4;
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
function Header({
  onNav,
  onBook
}) {
  const {
    Logo,
    Button
  } = NS();
  const links = ['Services', 'Articles', 'About', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    className: "wb-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-shell wb-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "wb-logo",
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav('top');
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 28,
    tone: "ink"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "wb-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: `#${l.toLowerCase()}`,
    className: "wb-nav__link",
    onClick: e => {
      e.preventDefault();
      onNav(l.toLowerCase());
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "wb-header__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null),
    onClick: onBook
  }, "Book a call"))));
}
function Hero({
  onBook,
  onNav
}) {
  const {
    Button,
    Eyebrow
  } = NS();
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-shell wb-hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Where creativity meets sustainable growth"), /*#__PURE__*/React.createElement("h1", {
    className: "wb-hero__title"
  }, "Build something", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "wb-ital"
  }, "real.")), /*#__PURE__*/React.createElement("p", {
    className: "wb-hero__lead"
  }, "aRcj is a London consultancy for founders and small teams. We turn a good idea into a business that lasts \u2014 across strategy, marketing and growth."), /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null),
    onClick: onBook
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('services')
  }, "How we work")), /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "SME-focused"), " \xB7 enterprise when it fits"), /*#__PURE__*/React.createElement("span", {
    className: "wb-dot"
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, "Based in London"))), /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__panel"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/build-something-real.png",
    alt: "Build something real"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__badge"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/arcj-mark-white.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__badge-k"
  }, "aRcj Ltd"), /*#__PURE__*/React.createElement("div", {
    className: "wb-hero__badge-s"
  }, "Consultancy \xB7 London"))))));
}
function StatsStrip() {
  const {
    Stat
  } = NS();
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-shell wb-stats__grid"
  }, /*#__PURE__*/React.createElement(Stat, {
    eyebrow: "Raised",
    prefix: "\xA3",
    value: "2.4",
    suffix: "M",
    label: "By our SME clients in 2025",
    onDark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    eyebrow: "Growth",
    value: "3.4",
    suffix: "\xD7",
    label: "Average pipeline uplift",
    trend: {
      dir: 'up',
      label: '+18% YoY'
    },
    onDark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    eyebrow: "Founders",
    value: "40",
    suffix: "+",
    label: "Advised since launch",
    onDark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    eyebrow: "Retained",
    value: "9",
    suffix: "/10",
    label: "Clients who work with us again",
    onDark: true
  })));
}
function Services({
  onNav
}) {
  const {
    Eyebrow,
    Card,
    Button,
    Badge
  } = NS();
  const services = [{
    k: 'Strategy & Growth',
    d: 'Positioning, pricing and go-to-market. We find the shortest line between where you are and where the business needs to be.',
    tag: 'Most requested'
  }, {
    k: 'Marketing & Brand',
    d: 'Brand, content and demand. Diogo leads marketing that sounds like you and actually moves pipeline.',
    tag: null
  }, {
    k: 'Board Advisory',
    d: 'Boards that build, not just govern. Practical counsel for owners stepping up to their next stage.',
    tag: null
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "wb-section",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-section__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    className: "wb-h2"
  }, "Hands-on help, ", /*#__PURE__*/React.createElement("span", {
    className: "wb-ital"
  }, "where it counts."))), /*#__PURE__*/React.createElement("p", {
    className: "wb-section__intro"
  }, "A small, senior team. You work directly with the people doing the thinking \u2014 no layers, no hand-offs.")), /*#__PURE__*/React.createElement("div", {
    className: "wb-services"
  }, services.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.k,
    elevation: "raised",
    interactive: true,
    accentTop: i === 0,
    padding: "lg",
    onClick: () => onNav('contact')
  }, /*#__PURE__*/React.createElement("div", {
    className: "wb-service__num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "wb-h3"
  }, s.k, s.tag && /*#__PURE__*/React.createElement(Badge, {
    variant: "gold",
    style: {
      marginLeft: '10px',
      verticalAlign: 'middle'
    }
  }, s.tag)), /*#__PURE__*/React.createElement("p", {
    className: "wb-body"
  }, s.d), /*#__PURE__*/React.createElement("span", {
    className: "wb-textlink"
  }, "Talk to us ", /*#__PURE__*/React.createElement(Arrow, null)))))));
}
Object.assign(window, {
  Header,
  Hero,
  StatsStrip,
  Services,
  WbArrow: Arrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
