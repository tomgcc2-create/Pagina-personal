// ============================================================
// script.js — Animaciones de scroll y navegación
// Estilo tabloid latinoamericano retro
// ============================================================

// ============================================================
// 1. Hamburger menu — abre/cierra el menú en móvil
// ============================================================
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Cierra el nav al hacer clic en un enlace
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// ============================================================
// 2. IntersectionObserver — animación tipo SELLO (stamp)
//    para los titulares de sección (.anim-stamp)
// ============================================================
const stampObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Una vez animado no es necesario volver a observarlo
      stampObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.anim-stamp').forEach(el => stampObserver.observe(el));

// ============================================================
// 3. IntersectionObserver — fade-in desde abajo
//    para cajas y bloques de contenido (.anim-fade)
// ============================================================
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -30px 0px'
});

document.querySelectorAll('.anim-fade').forEach(el => fadeObserver.observe(el));

// ============================================================
// 4. Scroll suave mejorado para navegadores sin soporte nativo
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
