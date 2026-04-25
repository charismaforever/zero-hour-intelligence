/* ═══════════════════════════════════════════
   IMMINENT FLAIR — Shared Components
   nav, footer, ticker injected via JS
═══════════════════════════════════════════ */

function getNavHTML(activePage) {
  const pages = [
    { href: '/articles/', label: 'Analysis' },
    { href: '/topics/',   label: 'Topics'   },
    { href: '/about/',    label: 'About'    },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.label ? 'active' : ''}">${p.label}</a>`
  ).join('');
  return `
  <nav class="nav" id="site-nav">
    <a href="/" class="nav-logo">
      <span class="nav-logo-name">Imminent Flair</span>
      <span class="nav-logo-sub">Cybersecurity Intelligence</span>
    </a>
    <div class="nav-links">
      ${links}
      <a href="/newsletter/" class="nav-cta">Subscribe</a>
    </div>
  </nav>`;
}

function getTickerHTML() {
  const items = [
    'Zero Trust Architecture',
    'Post-Quantum Cryptography',
    'AI-Native Threat Detection',
    'Insider Risk Intelligence',
    'Executive Cyber Governance',
    'Nation-State Adversaries',
    'Identity-First Security',
    'Cyber Resilience by Design',
    'Quantum Migration Strategy',
    'Board-Level Risk Communication',
    'NIST PQC Standards',
    'Crypto Agility Frameworks',
    'NIS2 Supply Chain Mandate',
    'EU Cyber Resilience Act',
    'Third-Party Vendor Risk',
  ];
  const markup = items.map(t => `<span class="ticker-dot"></span><span class="ticker-item">${t}</span>`).join('');
  return `<div class="ticker"><div class="ticker-track">${markup}${markup}</div></div>`;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <div class="footer-brand-name">Imminent Flair</div>
        <div class="footer-brand-sub">Cybersecurity Intelligence</div>
        <p class="footer-brand-desc">Strategic cybersecurity intelligence for C-suite leaders and boards. Translating technical risk into executive clarity.</p>
      </div>
      <div class="footer-col">
        <h4>Analysis</h4>
        <ul>
          <li><a href="/articles/nis2-supply-chain-mandate.html">NIS2 &amp; the Supply Chain Mandate</a></li>
          <li><a href="/articles/infrastructure-illusion.html">The Infrastructure Illusion</a></li>
          <li><a href="/articles/architecture-of-failure.html">The Architecture of Failure</a></li>
          <li><a href="/articles/">Quantum Risk Series</a></li>
          <li><a href="/articles/">Board Governance</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Topics</h4>
        <ul>
          <li><a href="/topics/#zero-trust">Zero Trust</a></li>
          <li><a href="/topics/#quantum">Post-Quantum</a></li>
          <li><a href="/topics/#insider">Insider Risk</a></li>
          <li><a href="/topics/#governance">Governance</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://linkedin.com/in/" target="_blank">LinkedIn</a></li>
          <li><a href="https://orcid.org/" target="_blank">ORCID Research</a></li>
          <li><a href="/about/">About Catrina</a></li>
          <li><a href="/newsletter/">Subscribe</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 Imminent Flair · Catrina Turner</span>
      <span>Cybersecurity Intelligence · Strategic Analysis</span>
    </div>
  </footer>`;
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.delay || 0;
        setTimeout(() => e.target.classList.add('visible'), delay);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  els.forEach((el, i) => {
    if (!el.dataset.delay) el.dataset.delay = (i % 5) * 70;
    obs.observe(el);
  });
}

function initNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 40
      ? 'rgba(184,150,110,0.35)'
      : 'rgba(184,150,110,0.18)';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNav();
});
