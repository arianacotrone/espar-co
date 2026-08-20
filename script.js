// ============================================
// Espar Co. — site behaviour
// ============================================

// --- Mobile nav toggle ---
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // close the mobile menu after tapping a link
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// --- Contact form ---
// No backend yet: this opens the visitor's email client with the message
// pre-filled (mailto:). It's a solid zero-cost starting point, but mailto
// links can be unreliable on some mobile browsers / webmail-only setups.
// When you're ready for something sturdier, swap this for a form service
// like Formspree or EmailJS — same HTML, just point the fetch at their API.
const CONTACT_EMAIL = 'TU-EMAIL@ejemplo.com'; // <-- reemplazá esto por tu email real antes de publicar

const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      note.textContent = 'Completá todos los campos antes de enviar.';
      note.className = 'form-note error';
      return;
    }

    const subject = encodeURIComponent(`Consulta de ${name} — Espar Co.`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    note.textContent = 'Abriendo tu cliente de email…';
    note.className = 'form-note success';
  });
}
