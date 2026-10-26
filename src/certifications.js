// ==========================================================================
// RHOMBUS CONTRACTORS - CERTIFICATIONS PAGE INTERACTIVITY
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

  // 2. CERTIFICATE FILTER TABS
  const filterBtns = document.querySelectorAll('.cert-filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active tab
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards with smooth opacity transition
      certCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 3. CERTIFICATE INSPECTION AUDIT MODAL
  const certAuditModal = document.getElementById('certAuditModal');
  const closeCertModalBtn = document.getElementById('closeCertModal');
  const modalCertTitle = document.getElementById('modalCertTitle');
  const modalCertCode = document.getElementById('modalCertCode');
  const modalCertBody = document.getElementById('modalCertBody');
  const modalCertRef = document.getElementById('modalCertRef');
  const modalCertScope = document.getElementById('modalCertScope');
  const modalCertAudits = document.getElementById('modalCertAudits');

  const certData = {
    'aisc': {
      title: 'AISC Certified Building Fabricator & Advanced Steel Erector',
      code: 'AISC Standard 207-20 / AISC 303 Code of Standard Practice',
      issuing: 'American Institute of Steel Construction (AISC)',
      ref: 'AISC-FAB-89421',
      scope: 'Multi-story commercial and industrial framing, heavy trusses, cantilevered canopies, high-seismic connection detailing, and on-site crane erection.',
      audits: 'Annual comprehensive third-party audit by Quality Management Company (QMC). Full quality manual surveillance, calibrated tool verification, and welder log audits.'
    },
    'en1090': {
      title: 'UKCA & CE Marking — BS EN 1090-1 / EN 1090-2 (Execution Class 3)',
      code: 'BS EN 1090-2:2018 (EXC3) / Factory Production Control (FPC)',
      issuing: 'Notified Body Approved Inspection Bureau (UKAS Accredited)',
      ref: 'CE-EN1090-EXC3-5502',
      scope: 'Structural steel components for dynamically loaded structures, public buildings, bridges, and infrastructure requiring Execution Class 3 (EXC3) assurance.',
      audits: 'Factory Production Control (FPC) continuous surveillance audits, comprehensive weld coordination under BS EN ISO 14731, and full 3.1 material traceability.'
    },
    'aws': {
      title: 'AWS D1.1 / D1.5 Certified Structural Welding Inspection',
      code: 'AWS D1.1 (Structural Steel) & AWS D1.5 (Bridge Welding Code)',
      issuing: 'American Welding Society (AWS)',
      ref: 'AWS-CWI-44820',
      scope: 'Certified Welding Inspectors (CWI) supervising all Flux-Cored Arc Welding (FCAW), Gas Metal Arc Welding (GMAW), and Submerged Arc Welding (SAW) on jobsites and shop floors.',
      audits: 'Rigorous Procedure Qualification Records (PQR), Welder Performance Qualifications (WPQ), and 100% visual inspection paired with ultrasonic NDT sampling.'
    },
    'iso3834': {
      title: 'ISO 3834-2 Comprehensive Quality Requirements for Fusion Welding',
      code: 'ISO 3834-2:2021 Quality Requirements for Metallic Materials',
      issuing: 'The Welding Institute (TWI) Certification Ltd',
      ref: 'ISO-3834-7721',
      scope: 'Comprehensive metallurgical control over fabrication welding, joint design verification, consumable storage, post-weld heat treatments, and calibration records.',
      audits: 'Annual surveillance of welding coordinators, non-destructive examination procedures, equipment calibration logs, and test coupon records.'
    },
    'iso9001': {
      title: 'ISO 9001:2015 Total Quality Management System',
      code: 'ISO 9001:2015 / Quality Assurance in Construction & Steel',
      issuing: 'British Standards Institution (BSI) / UKAS Accredited',
      ref: 'FS-9001-68903',
      scope: 'End-to-end organizational quality assurance governing steel procurement, CNC automated cutting, dimensional inspection, surface finishing, and on-site handover.',
      audits: 'Semi-annual surveillance audits with strict KPIs for material non-conformance, customer satisfaction, and on-time project handover.'
    },
    'iso14001': {
      title: 'ISO 14001:2015 Environmental Management System',
      code: 'ISO 14001:2015 Environmental Compliance Standard',
      issuing: 'UKAS Accredited Environmental Registrar',
      ref: 'EMS-14001-3211',
      scope: 'Responsible steel sourcing, zero VOC powder coating recovery, comprehensive metal offcut recycling (99.2% recycled), and low-emission logistics scheduling.',
      audits: 'Annual environmental impact audits, waste stream monitoring, and chemical pre-treatment effluent verification.'
    },
    'qualicoat': {
      title: 'Qualicoat Class 2 Architectural Powder Coating Standard',
      code: 'Qualicoat Specification 17th Edition (Architectural)',
      issuing: 'Qualicoat International Licensing Organization',
      ref: 'QC-CL2-1189',
      scope: 'Architectural super-durable powder coating of structural and decorative metals. 7-stage eco-friendly pre-treatment and conveyorized curing ovens.',
      audits: 'Two unannounced annual audits testing film thickness, polymer cure adhesion (cross-hatch test), 1,000-hr acetic acid salt spray, and boiling water resistance.'
    },
    'osha': {
      title: 'OSHA 30 & Zero-Incident Safety Management Protocol',
      code: '29 CFR 1926 Safety & Health Regulations for Construction',
      issuing: 'Occupational Safety and Health Administration (OSHA)',
      ref: 'OSHA-CON-5541',
      scope: 'Mandatory 30-hour OSHA credentials for all site supervisors and project managers. Daily Job Hazard Analyses (JHA) and high-elevation rigging oversight.',
      audits: 'Third-party site safety audits, annual EMR verification (current rating: 0.64), and weekly toolbox hazard reduction meetings.'
    },
    'safecontractor': {
      title: 'SafeContractor & Constructionline Gold Accreditations',
      code: 'SSIP PAS 91 Health, Safety & Procurement Pre-Qualification',
      issuing: 'Alcumus SafeContractor & Constructionline Gold',
      ref: 'SC-GOLD-99023',
      scope: 'Tier-one general contractor pre-qualification covering health & safety policies, financial stability, equal opportunities, and modern slavery governance.',
      audits: 'Annual verification of corporate insurances (public liability, employer liability, professional indemnity) and health & safety compliance systems.'
    }
  };

  document.querySelectorAll('.cert-inspect-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-cert-id');
      const data = certData[id];
      if (!data || !certAuditModal) return;

      modalCertTitle.textContent = data.title;
      modalCertCode.textContent = data.code;
      modalCertBody.textContent = data.issuing;
      modalCertRef.textContent = data.ref;
      modalCertScope.textContent = data.scope;
      modalCertAudits.textContent = data.audits;

      certAuditModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeCertModalBtn && certAuditModal) {
    closeCertModalBtn.addEventListener('click', () => {
      certAuditModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    certAuditModal.addEventListener('click', (e) => {
      if (e.target === certAuditModal) {
        certAuditModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 4. QUOTE / COMPLIANCE DOSSIER MODAL
  const quoteModal = document.getElementById('quoteModal');
  const openQuoteButtons = document.querySelectorAll('.open-quote-modal');
  const closeQuoteModalBtn = document.getElementById('closeQuoteModal');
  const quoteForm = document.getElementById('quoteForm');
  const quoteSuccessNotice = document.getElementById('quoteSuccessNotice');

  openQuoteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (certAuditModal) certAuditModal.classList.remove('active');
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

  // 5. SMOOTH SCROLL FOR IN-PAGE ANCHORS
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

  console.log('Rhombus Contractors Certifications page initialized.');
});
