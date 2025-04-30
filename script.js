// Scroll suave al hacer clic en los enlaces del menú:
document.querySelectorAll('.menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animación de entrada en el hero al cargar la página:
window.addEventListener('load', () => {
  const hero = document.querySelector('.hero-content');
  if (hero) {
    hero.animate([
      { opacity: 0, transform: 'translateY(50px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 1000,
      easing: 'ease-out',
      fill: 'forwards'
    });
  }
});

// Animación de fade-in para cada sección al hacer scroll:
const sections = document.querySelectorAll('.seccion');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate([
        { opacity: 0, transform: 'translateY(50px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], {
        duration: 800,
        easing: 'ease-out',
        fill: 'forwards'
      });
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

// Cambiar el fondo del navbar al hacer scroll:
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.8)';
  } else {
    navbar.style.background = 'transparent';
  }
});

// Destacar enlace activo al hacer scroll:
const navLinks = document.querySelectorAll('.menu a');
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    const sectionTop = sec.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});