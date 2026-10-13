// Services Subpage Interactive Behaviors & Service Modal
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

  // Service Details Data for all 7 Services
  const servicesData = {
    '01': {
      title: 'Sub Contracting in Construction',
      badge: 'Turnkey Subcontracting',
      subtitle: 'Skilled Manpower • Specialized Execution • Zero-Incident Safety',
      image: '/images/service_subcontracting_hd.jpg',
      description: 'Rhombus Contractors provides premier subcontracting solutions for commercial, infrastructure, and heavy industrial developments. We supply certified engineers, licensed trades, and specialized equipment to handle critical project phases—from deep foundation structural integration to building envelope erection. Our teams operate under strict OSHA and ISO safety management protocols to guarantee uncompromised quality and adherence to demanding construction milestones.'
    },
    '02': {
      title: 'Fabrication & Installation of Metal Work',
      badge: 'AISC Certified Fabrication',
      subtitle: 'Precision Structural Steel • Architectural Metals • Heavy Industrial Welds',
      image: '/images/service_welder_hd.jpg',
      description: 'With state-of-the-art CNC cutting, automated plate profiling, and certified robotic welding bays, our fabrication facilities process heavy structural steel and bespoke architectural metals with 0.5mm tolerances. Every assembly undergoes non-destructive ultrasonic and magnetic particle testing before delivery, ensuring flawless performance on site.'
    },
    '03': {
      title: 'Powder Coating & Surface Finish',
      badge: 'Qualicoat Certified',
      subtitle: 'Electrostatic Coating • Multi-Stage Pretreatment • Thermal Curing',
      image: '/images/service_powder_coating_hd.jpg',
      description: 'Our automated vertical and horizontal powder coating lines apply high-performance architectural coatings resistant to UV degradation, chemical exposure, marine salinity, and severe thermal cycles. Using multi-stage eco-friendly deoxidation baths and computerized powder guns, we achieve superior gloss retention and up to 30-year corrosion warranties.'
    },
    '04': {
      title: 'Construction Material Supply',
      badge: 'Certified Mill Supply',
      subtitle: 'Heavy Beams • HSS Profiles • Rebar • Mill Test Certificates',
      image: '/images/service_pipes_hd.jpg',
      description: 'We maintain extensive inventory yards stocking prime structural steel beams (W, I, H profiles), hollow structural sections (HSS), rebar, heavy steel plates, and industrial piping. Every shipment is backed by traceable EN 10204 3.1 Mill Test Certificates and delivered with rapid jobsite logistics.'
    },
    '05': {
      title: 'Architectural Design & 3D Visualisation',
      badge: 'BIM & Parametric Detailing',
      subtitle: 'Revit & Tekla Detailing • Clash Detection • Digital Twin Engineering',
      image: '/images/service_5_hd.jpg',
      description: 'Our digital engineering team leverages Building Information Modeling (BIM LOD 400/500) to create data-rich 3D models and clash-free fabrication drawings. We bridge the gap between architectural concept and shop fabrication, eliminating costly field conflicts and accelerating municipal approvals.'
    },
    '06': {
      title: 'Joinery and Interior Fitout',
      badge: 'Bespoke Millwork',
      subtitle: 'Architectural Millwork • Acoustic Paneling • Turnkey Fitout',
      image: '/images/service_6_hd.jpg',
      description: 'Blending traditional woodworking craftsmanship with advanced CNC joinery, our interiors division crafts bespoke millwork, acoustic wall systems, reception focal points, and executive boardroom interiors. We integrate fine hardwoods, metal accents, and integrated LED architectural lighting with immaculate precision.'
    },
    '07': {
      title: 'Access and Temporary Works',
      badge: 'Engineered Access Systems',
      subtitle: 'System Scaffolding • Heavy Propping • Temporary Shoring • BS/EN Compliant',
      image: '/images/service_7_hd.jpg',
      description: 'We engineer, supply, and erect modular system scaffolding, heavy-duty shoring towers, cantilevered access decks, and facade work platforms. All temporary works are mathematically verified by structural engineers, certified before handover, and regularly inspected to ensure maximum worker safety at height.'
    }
  };

  // Modal Functionality
  const serviceModal = document.getElementById('serviceModal');
  const closeServiceModal = document.getElementById('closeServiceModal');
  const modalBadge = document.getElementById('serviceModalBadge');
  const modalTitle = document.getElementById('serviceModalTitle');
  const modalSub = document.getElementById('serviceModalSub');
  const modalImg = document.getElementById('serviceModalImg');
  const modalDesc = document.getElementById('serviceModalDesc');

  function openModal(id) {
    const data = servicesData[id];
    if (!data || !serviceModal) return;

    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;
    modalSub.textContent = data.subtitle;
    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalDesc.textContent = data.description;

    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!serviceModal) return;
    serviceModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.service-learn-more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-service-id');
      if (id) openModal(id);
    });
  });

  if (closeServiceModal) {
    closeServiceModal.addEventListener('click', closeModal);
  }

  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal && serviceModal.classList.contains('active')) {
      closeModal();
    }
  });
});
