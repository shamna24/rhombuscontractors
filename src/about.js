// ==========================================================================
// RHOMBUS CONTRACTORS - ABOUT US PAGE INTERACTIVITY
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. MOBILE MENU TOGGLE
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

  // 2. QUOTE REQUEST MODAL
  const quoteModal = document.getElementById('quoteModal');
  const openQuoteButtons = document.querySelectorAll('.open-quote-modal');
  const closeQuoteModalBtn = document.getElementById('closeQuoteModal');
  const quoteForm = document.getElementById('quoteForm');
  const quoteSuccessNotice = document.getElementById('quoteSuccessNotice');

  openQuoteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (quoteModal) {
        quoteModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeQuoteModalBtn && quoteModal) {
    closeQuoteModalBtn.addEventListener('click', () => {
      quoteModal.classList.remove('active');
      document.body.style.overflow = '';
      if (quoteSuccessNotice) quoteSuccessNotice.style.display = 'none';
      if (quoteForm) quoteForm.style.display = 'block';
    });

    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        quoteModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      quoteForm.style.display = 'none';
      if (quoteSuccessNotice) {
        quoteSuccessNotice.style.display = 'block';
      }
      setTimeout(() => {
        if (quoteModal) quoteModal.classList.remove('active');
        document.body.style.overflow = '';
        quoteForm.reset();
        quoteForm.style.display = 'block';
        if (quoteSuccessNotice) quoteSuccessNotice.style.display = 'none';
      }, 3500);
    });
  }

  // 3. SMOOTH SCROLL FOR IN-PAGE ANCHORS
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  console.log('Rhombus Contractors About Us page initialized.');
});
