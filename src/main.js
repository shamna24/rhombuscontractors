import './floating-mail.js';
// ==========================================================================
// RHOMBUS CONTRACTORS - INTERACTIVE LOGIC & CLIENT SHOWCASE
document.addEventListener('DOMContentLoaded', () => {

  // 1. HERO CATEGORY SWITCHER (Metal \ Construction \ Architecture)
  const heroCategoryBtns = document.querySelectorAll('.hero-cat-btn');
  const heroImage = document.getElementById('heroImage');

  const heroCategoryImages = {
    metal: {
      src: '/images/hero_metal.jpg',
      alt: 'Rhombus Contractors Structural Steel & Metal Fabrication'
    },
    construction: {
      src: '/images/hero_construction.jpg',
      alt: 'Rhombus Contractors High-Rise Building Construction & Cranes'
    },
    architecture: {
      src: '/images/hero_architecture.jpg',
      alt: 'Rhombus Contractors Modern Architectural Steel & Facade Design'
    }
  };

  // Preload hero images for instant smooth switching
  Object.values(heroCategoryImages).forEach(item => {
    const preloader = new Image();
    preloader.src = item.src;
  });

  let fadeTimeoutId = null;
  heroCategoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const category = btn.getAttribute('data-category');
      if (!category || !heroCategoryImages[category]) return;

      // Update active button state
      heroCategoryBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Strictly swap ONLY the hero image with smooth fade transition
      if (heroImage) {
        if (fadeTimeoutId) clearTimeout(fadeTimeoutId);
        heroImage.style.opacity = '0.2';
        heroImage.style.transform = 'scale(0.98)';

        const nextData = heroCategoryImages[category];
        fadeTimeoutId = setTimeout(() => {
          heroImage.src = nextData.src;
          heroImage.alt = nextData.alt;
          heroImage.style.opacity = '1';
          heroImage.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });

  // 2. SERVICE MODAL DATA & HANDLERS
  const servicesData = {
    '01': {
      title: 'Construction Material Supply',
      subtitle: 'High-Quality Steel & Reliable Building Materials',
      image: '/images/service_pipes_hd.jpg',
      badge: 'Fast & Reliable Supply',
      description: 'We supply a full range of high-strength structural steel and construction materials directly to your site. From universal beams and hollow sections to rebar and heavy steel plates, we ensure timely delivery to keep your building project running on schedule.',
      capabilities: [
        'Structural I-Beams, Columns, and Steel Sections',
        'Square, Rectangular, and Round Hollow Tubes',
        'High-Strength Rebar & Mesh Reinforcements',
        'Heavy Steel Plates Cut to Your Exact Project Sizes',
        'Fast Dispatch and Flexible Jobsite Delivery Schedules'
      ]
    },
    '02': {
      title: 'Fabrication & Installation of Metal Work',
      subtitle: 'Custom Metal Fabrication & Expert On-Site Assembly',
      image: '/images/service_welder_hd.jpg',
      badge: 'Precision Metalwork',
      description: 'From robust structural frameworks to custom architectural stairs and railings, our skilled team crafts bespoke metalwork tailored to your design. We manage the entire process from precision cutting and seamless welding to professional on-site installation with strict safety standards.',
      capabilities: [
        'High-Precision Laser, Plasma & Plate Cutting',
        'Custom Structural Steel Frameworks, Trusses & Mezzanines',
        'High-Quality Welding for Strong, Long-Lasting Structures',
        'Architectural Canopies, Feature Stairs & Modern Railings',
        'Complete On-Site Delivery, Crane Lifting & Assembly'
      ]
    },
    '03': {
      title: 'Powder Coating & Surface Treatment',
      subtitle: 'Durable, Weather-Resistant Architectural Finishes',
      image: '/images/service_powder_coating_hd.jpg',
      badge: 'Durable Finishes',
      description: 'Protect your metalwork with a sleek, vibrant, and durable finish. Our modern powder coating process shields surfaces from rust, weather exposure, and daily wear, offering an extensive selection of colors and textures to complement any architectural style.',
      capabilities: [
        'Weather-Resistant Protective Coatings for Outdoor & Indoor Use',
        'Thorough Surface Preparation & Anti-Corrosion Treatment',
        'Large-Capacity Coating for Beams, Panels, and Railings',
        'Extensive Palette of RAL Colors & Custom Architectural Matches',
        'Matte, Satin, Gloss, and Textured Finish Options'
      ]
    },
    '04': {
      title: 'Sub Contracting in Construction',
      subtitle: 'Dependable Structural & Steel Subcontracting Partner',
      image: '/images/service_subcontracting_hd.jpg',
      badge: 'Trusted Project Partner',
      description: 'We partner with general contractors, builders, and developers to take care of complex structural and metal packages. Our experienced team works seamlessly alongside your site managers to deliver top-tier craftsmanship, clear communication, and dependable milestone handovers.',
      capabilities: [
        'Turnkey Structural Steel & Metalwork Subcontracting',
        'Dedicated Project Coordination for Smooth Site Operations',
        'Skilled & Experienced Trades Focused on Quality and Safety',
        'Cost-Effective Solutions to Keep Projects on Budget',
        'Reliable Project Handovers Meeting Strict Timelines'
      ]
    },
    '05': {
      title: 'Architectural Design & 3D Visualisation',
      subtitle: 'Photorealistic 3D Renders & Accurate Project Planning',
      image: '/images/service_5_hd.jpg',
      badge: 'Design & 3D Modeling',
      description: 'Visualize your completed project with total clarity before construction starts. We create photorealistic 3D renders and detailed spatial models that help you explore design options, avoid costly site mistakes, and impress clients and stakeholders.',
      capabilities: [
        'Stunning Photorealistic 3D Exterior & Interior Renderings',
        'Detailed 3D Digital Models for Accurate Planning',
        'Early Clash Detection to Prevent Costly On-Site Rework',
        'Polished Visual Presentations for Client & Planning Approvals',
        'Accurate Material Takeoffs and Clear Construction Drawings'
      ]
    },
    '06': {
      title: 'Joinery & Interior Fitout',
      subtitle: 'Bespoke Architectural Woodwork & Turnkey Interiors',
      image: '/images/service_6_hd.jpg',
      badge: 'Bespoke Interiors',
      description: 'Blending natural timber craftsmanship with modern metal details, our interior team creates custom architectural woodwork for corporate offices, retail venues, and luxury homes. From statement reception desks to complete interior fitouts, we bring style and function to every space.',
      capabilities: [
        'Custom Architectural Cabinetry and Feature Woodwork',
        'Modern Glass & Metal Partitions for Bright Open Spaces',
        'Turnkey Commercial Office and Retail Fitouts',
        'Acoustic Wall Paneling, Feature Ceilings & Premium Cladding',
        'Custom Reception Counters and Tailored Interior Furniture'
      ]
    },
    '07': {
      title: 'Access & Temporary Works',
      subtitle: 'Safe Scaffolding, Heavy Propping & Site Access Systems',
      image: '/images/service_7_hd.jpg',
      badge: 'Safe Site Solutions',
      description: 'We provide safe, sturdy scaffolding and temporary support systems tailored to your site requirements. Our dedicated team designs, erects, and inspects secure access platforms and protective walkways so your workforce can operate safely and efficiently at all heights.',
      capabilities: [
        'Modular System Scaffolding for Buildings of Any Scale',
        'Heavy-Duty Structural Shoring & Temporary Wall Support',
        'Secure Working Decks, Stair Towers & Public Gantries',
        'Prompt Assembly and Safe Removal to Fit Your Schedule',
        'Regular Site Safety Inspections for Complete Peace of Mind'
      ]
    }
  };

  const serviceModal = document.getElementById('serviceModal');
  const serviceModalTitle = document.getElementById('serviceModalTitle');
  const serviceModalSub = document.getElementById('serviceModalSub');
  const serviceModalBadge = document.getElementById('serviceModalBadge');
  const serviceModalDesc = document.getElementById('serviceModalDesc');
  const serviceModalCaps = document.getElementById('serviceModalCaps');
  const serviceModalImg = document.getElementById('serviceModalImg');
  const closeServiceModalBtn = document.getElementById('closeServiceModal');

  function openServiceModal(serviceId) {
    const data = servicesData[serviceId];
    if (!data) return;

    serviceModalTitle.textContent = data.title;
    serviceModalSub.textContent = data.subtitle;
    serviceModalBadge.textContent = data.badge;
    serviceModalDesc.textContent = data.description;
    serviceModalImg.src = data.image;

    // Render capabilities
    serviceModalCaps.innerHTML = data.capabilities.map(cap => `
      <li style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.6rem; font-size: 0.95rem; color: #11283B;">
        <span style="color: #BA2826; font-weight: bold; font-size: 1.1rem;">✓</span>
        ${cap}
      </li>
    `).join('');

    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeServiceModal() {
    serviceModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach click listeners to service cards
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = card.getAttribute('data-service-id');
      openServiceModal(serviceId);
    });
  });

  if (closeServiceModalBtn) {
    closeServiceModalBtn.addEventListener('click', closeServiceModal);
  }

  // 3. ABOUT / "LEARN MORE" MODAL
  const aboutModal = document.getElementById('aboutModal');
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const closeAboutModalBtn = document.getElementById('closeAboutModal');

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      aboutModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeAboutModalBtn) {
    closeAboutModalBtn.addEventListener('click', () => {
      aboutModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // 4. QUOTE REQUEST MODAL
  const quoteModal = document.getElementById('quoteModal');
  const openQuoteButtons = document.querySelectorAll('.open-quote-modal');
  const closeQuoteModalBtn = document.getElementById('closeQuoteModal');
  const quoteForm = document.getElementById('quoteForm');
  const quoteSuccessNotice = document.getElementById('quoteSuccessNotice');

  openQuoteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // If service modal was open, close it
      if (serviceModal) serviceModal.classList.remove('active');
      quoteModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeQuoteModalBtn) {
    closeQuoteModalBtn.addEventListener('click', () => {
      quoteModal.classList.remove('active');
      document.body.style.overflow = '';
      if (quoteSuccessNotice) quoteSuccessNotice.style.display = 'none';
      if (quoteForm) quoteForm.style.display = 'block';
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
        quoteModal.classList.remove('active');
        document.body.style.overflow = '';
        quoteForm.reset();
        quoteForm.style.display = 'block';
        if (quoteSuccessNotice) quoteSuccessNotice.style.display = 'none';
      }, 3500);
    });
  }

  // Close modals on clicking overlay backdrop
  [serviceModal, aboutModal, quoteModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // 5. MOBILE MENU TOGGLE
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
      });
    });
  }

  // 7. SMOOTH SCROLL & ACTIVE NAV HIGHLIGHT
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  function updateActiveNav() {
    let currentId = 'home';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

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
        navLinks.forEach(l => l.classList.remove('active'));
        if (this.classList.contains('nav-link')) {
          this.classList.add('active');
        }
      }
    });
  });

  console.log('Rhombus Contractors site initialized successfully.');
});
