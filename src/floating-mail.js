// ==========================================================================
// FLOATING QUICK MAILBOX & CONTACT POPUP WIDGET
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const widget = document.getElementById('floatingMailWidget');
  const btn = document.getElementById('floatingMailBtn');
  const card = document.getElementById('floatingMailCard');
  const closeBtn = document.getElementById('floatingMailClose');
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyText = document.getElementById('copyBtnText');
  const form = document.getElementById('floatingQuickForm');
  const successNotice = document.getElementById('floatingSuccess');
  const mailIcon = btn ? btn.querySelector('.icon-mail') : null;
  const closeIcon = btn ? btn.querySelector('.icon-close') : null;

  if (!btn || !card) return;

  function toggleCard() {
    const isOpen = card.classList.toggle('active');
    btn.setAttribute('aria-expanded', String(isOpen));
    if (mailIcon && closeIcon) {
      mailIcon.style.display = isOpen ? 'none' : 'block';
      closeIcon.style.display = isOpen ? 'block' : 'none';
    }
  }

  function closeCard() {
    card.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
    if (mailIcon && closeIcon) {
      mailIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCard();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeCard();
    });
  }

  // Prevent card click from bubbling to document
  card.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (widget && !widget.contains(e.target)) {
      closeCard();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCard();
  });

  // Copy email button
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'Rhombus.contractors@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          if (copyText) copyText.textContent = 'Copied! ✓';
          setTimeout(() => {
            if (copyText) copyText.textContent = 'Copy Email';
          }, 2500);
        }).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    });
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      if (copyText) copyText.textContent = 'Copied! ✓';
      setTimeout(() => {
        if (copyText) copyText.textContent = 'Copy Email';
      }, 2500);
    } catch (err) {
      // ignore
    }
    document.body.removeChild(textarea);
  }

  // Quick form submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (successNotice) successNotice.style.display = 'block';
      setTimeout(() => {
        form.reset();
        form.style.display = 'flex';
        if (successNotice) successNotice.style.display = 'none';
        closeCard();
      }, 3500);
    });
  }
});
