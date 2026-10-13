// Contact Subpage Interactive Behaviors
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNavDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contactSubpageForm');
  const contactSendBtn = document.getElementById('contactSendBtn');
  const statusEl = document.getElementById('contactFormStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactFullName')?.value.trim();
      const email = document.getElementById('contactEmailAddr')?.value.trim();
      const subject = document.getElementById('contactSubjectInput')?.value.trim();
      const message = document.getElementById('contactMessageInput')?.value.trim();

      if (!name || !email || !subject || !message) {
        showStatus('Please fill in all required fields.', 'error');
        return;
      }

      // Simulate sending
      if (contactSendBtn) {
        contactSendBtn.disabled = true;
        contactSendBtn.innerHTML = `<span>SENDING...</span> <span class="btn-spinner">⏳</span>`;
      }

      setTimeout(() => {
        if (contactSendBtn) {
          contactSendBtn.disabled = false;
          contactSendBtn.innerHTML = `<span>SEND MESSAGE</span> <span class="btn-arrow-icon">→</span>`;
        }

        contactForm.reset();
        showStatus('Thank you! Your message has been received. Our project team will respond within 24 hours.', 'success');
      }, 700);
    });
  }

  function showStatus(text, type) {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.className = `contact-form-feedback ${type}`;
    statusEl.style.display = 'block';

    if (type === 'success') {
      setTimeout(() => {
        statusEl.style.display = 'none';
      }, 7000);
    }
  }
});
