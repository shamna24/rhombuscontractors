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
      subtitle: 'Structural Grade Steel & High-Strength Construction Materials',
      image: '/images/service_1_hd.jpg',
      badge: 'Certified Mill Supply',
      description: 'Rhombus Contractors supplies a comprehensive inventory of primary construction and structural steel materials directly to commercial and industrial jobsites. All materials are certified to international standards (ASTM, EN, ISO) with full mill test reports.',
      capabilities: [
        'Structural I-Beams, H-Columns, and Universal Channels (UC/UB)',
        'Hot-Rolled & Cold-Formed Hollow Sections (RHS, SHS, CHS)',
        'High-Yield Deformed Rebar & Wire Mesh Reinforcements',
        'Heavy Gauge Steel Plates (Grades A36, A572, S275, S355)',
        'Custom Cut-to-Length and Same-Day Logistics Scheduling'
      ]
    },
    '02': {
      title: 'Fabrication & Installation of Metal Work',
      subtitle: 'Turnkey Industrial & Architectural Metal Fabrication',
      image: '/images/service_2_hd.jpg',
      badge: 'AWS & AISC Certified',
      description: 'Our state-of-the-art 45,000 sq ft fabrication plant combines CNC precision cutting, robotic beam welding, and certified master fitters. From multi-tiered structural frames to custom architectural stairs and railings, our installation crews handle all on-site erection with rigorous safety.',
      capabilities: [
        'CNC 5-Axis Plasma, Laser & Oxy-Fuel Plate Cutting',
        'Structural Steel Frameworks, Trusses, and Mezzanines',
        'AWS D1.1 Certified Welded Structural Assemblies',
        'Custom Architectural Canopies, Stairs, Guardrails, and Louvers',
        'Mobile Crane Rigging & Site Erection Teams'
      ]
    },
    '03': {
      title: 'Powder Coating & Surface Treatment',
      subtitle: 'Durable, High-Performance Industrial & Architectural Finishes',
      image: '/images/service_3_hd.jpg',
      badge: 'Qualicoat Class 2 Standard',
      description: 'We operate automated conveyorized powder coating lines equipped with 7-stage chemical pre-treatment, shot blasting, and computer-controlled curing ovens. Our architectural-grade coatings deliver extreme UV resistance, corrosion protection, and pristine color consistency for decades.',
      capabilities: [
        'Architectural Super-Durable TGIC & Fluoropolymer Powders',
        'Conveyor Line Handling Beams up to 42 Feet (12.8 Meters)',
        'Automated 7-Stage Zinc-Phosphating & Chromate-Free Pre-treatment',
        'Corrosion Resistance Testing (Up to 3,000 Hours Salt Spray)',
        'Complete RAL & Custom Architectural Color Matching'
      ]
    },
    '04': {
      title: 'Sub Contracting in Construction',
      subtitle: 'Integrated Structural Engineering & Site Execution Partner',
      image: '/images/service_4_hd.jpg',
      badge: 'End-to-End Delivery',
      description: 'As a tier-one structural sub-contractor, Rhombus Contractors partners with general contractors and developers to deliver complex steel components on tight timelines. Our dedicated project managers integrate directly with your BIM modeling workflows to eliminate clash detection and reduce jobsite delays.',
      capabilities: [
        'Tekla & Revit 3D BIM Structural Modeling & Detailing',
        'Turnkey Steel Subcontracting from Detailing to Handover',
        'OSHA 30 Certified Site Safety Supervisions',
        'Value Engineering & Material Optimization Solutions',
        'Critical Path Schedule Acceleration'
      ]
    },
    '05': {
      title: 'Architectural Design & 3D Visualisation',
      subtitle: 'High-Precision BIM Detailing, Structural Modeling & Photorealistic Rendering',
      image: '/images/service_5_hd.jpg',
      badge: 'Revit & Tekla 3D Certified',
      description: 'Rhombus Contractors bridges architectural concept and buildability through advanced 3D Building Information Modeling (BIM) and spatial visualization. We detect engineering clashes prior to fabrication, generate LOD 400 fabrication models, and provide immersive architectural renders for client stakeholder presentations.',
      capabilities: [
        'Level of Development (LOD) 300 - 400 Structural Modeling',
        'Clash Detection & MEP Coordination in Navisworks',
        'High-Resolution Photorealistic 3D Exterior & Interior Renderings',
        'Fabrication Detailing & CNC Automated Export Files (DSTV/DXF)',
        'Value Engineering & Material Schedule Generation'
      ]
    },
    '06': {
      title: 'Joinery & Interior Fitout',
      subtitle: 'Bespoke Commercial Joinery, Architectural Woodwork & Turnkey Fitout Execution',
      image: '/images/service_6_hd.jpg',
      badge: 'Mastercraft Millwork Standard',
      description: 'Combining timber craftsmanship with precision metalwork, our interior fitout division delivers bespoke architectural joinery for high-end corporate headquarters, hospitality venues, and luxury residential developments. We handle everything from acoustic wall paneling to custom reception desks and feature ceilings.',
      capabilities: [
        'Custom Architectural Woodwork & Solid Surface Fabrication',
        'Metal-Framed Glazed Partitions & Feature Ceilings',
        'Turnkey Commercial Office & Hospitality Interior Fitouts',
        'Class-A Fire-Rated Timber & Acoustic Wall Cladding',
        'Integrated Lighting, Cabinetry & Luxury Reception Installations'
      ]
    },
    '07': {
      title: 'Access & Temporary Works',
      subtitle: 'Engineered Scaffolding, Heavy Shoring & Safe Jobsite Access Systems',
      image: '/images/service_7_hd.jpg',
      badge: 'BS 5975 & OSHA Compliant',
      description: 'Safe, compliant access is the backbone of every complex construction project. Rhombus Contractors designs, erects, and inspects engineered temporary works, including heavy-duty propping, façade scaffolding, birdcage access towers, and public protection gantries under strict safety certifications.',
      capabilities: [
        'TG20:21 Compliant System & Tube-and-Fitting Scaffolding',
        'Heavy Structural Shoring, Facade Retention & Propping Systems',
        'Cantilevered & Suspended Access Platforms',
        'Site Loading Gantries & Pedestrian Protection Walkways',
        'Dedicated Temporary Works Coordinators (TWC) & Weekly Audits'
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

  // 6. SERVICES SLIDER NAVIGATION LOGIC
  const servicesTrack = document.getElementById('servicesTrack');
  const servicesPrevBtn = document.getElementById('servicesPrevBtn');
  const servicesNextBtn = document.getElementById('servicesNextBtn');
  const servicesCounter = document.getElementById('servicesCounter');

  if (servicesTrack && servicesPrevBtn && servicesNextBtn) {
    function getScrollStep() {
      const card = servicesTrack.querySelector('.service-card');
      if (!card) return 320;
      const style = window.getComputedStyle(servicesTrack);
      const gap = parseFloat(style.gap) || 32;
      return card.offsetWidth + gap;
    }

    servicesNextBtn.addEventListener('click', () => {
      const maxScroll = servicesTrack.scrollWidth - servicesTrack.clientWidth;
      if (servicesTrack.scrollLeft >= maxScroll - 10) {
        servicesTrack.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        servicesTrack.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      }
    });

    servicesPrevBtn.addEventListener('click', () => {
      if (servicesTrack.scrollLeft <= 10) {
        const maxScroll = servicesTrack.scrollWidth - servicesTrack.clientWidth;
        servicesTrack.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        servicesTrack.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
      }
    });

    servicesTrack.addEventListener('scroll', () => {
      const step = getScrollStep();
      const currentIndex = Math.min(Math.round(servicesTrack.scrollLeft / step) + 1, 7);
      if (servicesCounter) {
        servicesCounter.textContent = `0${currentIndex} / 07`;
      }
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
