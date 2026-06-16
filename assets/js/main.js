// Navbar scroll state
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile nav toggle
const toggle    = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('navMobile');

toggle?.addEventListener('click', () => {
  const isOpen = mobileNav?.classList.toggle('open');
  const spans  = toggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close mobile nav on link click
mobileNav?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    toggle?.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  })
);

// Scroll-reveal for cards
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), i * 90);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.card, .degree-card').forEach(el => revealObs.observe(el));

// Hero CTA smooth scroll
document.querySelector('.hero-cta')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#main-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
