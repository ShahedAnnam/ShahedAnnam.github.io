// ==========================================================================
// Mobile top-nav toggle
// ==========================================================================
const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.nav-links-mobile');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    menuBtn.textContent = mobileNav.classList.contains('open') ? '✕' : '☰';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuBtn.textContent = '☰';
    });
  });
}

// ==========================================================================
// Active nav link based on current page (desktop + mobile lists)
// ==========================================================================
(function highlightActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-links-mobile a').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
})();

// ==========================================================================
// Terminal typing effect (hero, index.html only). Respects reduced-motion.
// ==========================================================================
(function typeEffect() {
  const el = document.querySelector('[data-typed]');
  if (!el) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const text = el.getAttribute('data-typed');

  if (prefersReduced) {
    el.textContent = text;
    return;
  }

  let i = 0;
  el.textContent = '';
  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, 45);
    } else {
      el.style.borderRight = 'none';
    }
  }
  tick();
})();

// ==========================================================================
// Status bar clock (decorative)
// ==========================================================================
(function statusClock() {
  const el = document.querySelector('[data-clock]');
  if (!el) return;
  function update() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    el.textContent = `${h}:${m}`;
  }
  update();
  setInterval(update, 30000);
})();