/* ══════════════════════════════════════════════════════════
   PORTFOLIO DEVOPS - JavaScript Principal
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll behavior ──────────────────────────── */
  const navbar  = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar?.classList.add('scrolled');
      scrollTopBtn?.classList.add('visible');
    } else {
      navbar?.classList.remove('scrolled');
      scrollTopBtn?.classList.remove('visible');
    }
    updateActiveNav();
  });
  scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── Active nav link on scroll ───────────────────────── */
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id], div[id]');
    const links    = document.querySelectorAll('.nav-links a[href^="#"]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  /* ── Mobile hamburger ────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => navLinks?.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks?.classList.remove('open'));
  });

  /* ── Smooth scroll for anchor links ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Intersection Observer for fade-in ───────────────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, entry.target.dataset.delay || 0);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.dataset.delay = i * 80;
    io.observe(el);
  });
  document.querySelectorAll('.stagger > *').forEach((el, i) => {
    el.dataset.delay = i * 100;
    io.observe(el);
  });

  /* ── Skill bars animation ────────────────────────────── */
  const skillIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
        skillIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skills-grid').forEach(g => skillIO.observe(g));

  /* ── Project filter ──────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? 'flex' : 'none';
        if (show) setTimeout(() => card.style.opacity = '1', 10);
      });
    });
  });

  /* ── Contact form (via Formspree) ────────────────────── */
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Envoi en cours...'; btn.disabled = true;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST', body: data, headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = '✔ Message envoyé ! Je vous réponds sous 24h.';
        status.className = 'form-status success';
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = '✘ Erreur lors de l\'envoi. Réessayez ou contactez-moi directement.';
      status.className = 'form-status error';
    }
    btn.textContent = 'Envoyer le message'; btn.disabled = false;
  });

  /* ── Terminal typing animation ───────────────────────── */
  function typeText(el, text, speed = 40) {
    if (!el) return;
    el.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) { el.textContent += text[i++]; setTimeout(type, speed); }
    };
    type();
  }
  const cmdEl = document.querySelector('.type-cmd');
  if (cmdEl) setTimeout(() => typeText(cmdEl, cmdEl.dataset.text || ''), 800);

  /* ── Floating particles (canvas) ────────────────────── */
  const canvas = document.createElement('canvas');
  canvas.id = 'particles';
  canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;opacity:0.3';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
  resize(); window.addEventListener('resize', resize);
  for (let i = 0; i < 60; i++) particles.push({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
    r: Math.random()*1.5+0.5, alpha: Math.random()*0.5+0.1
  });
  (function animate() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(0,229,255,${p.alpha})`; ctx.fill();
    });
    requestAnimationFrame(animate);
  })();

  console.log('%c⚡ Portfolio DevOps — Built with ❤️', 'color:#00e5ff;font-family:monospace;font-size:14px;font-weight:bold;');
});
