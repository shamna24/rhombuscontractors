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
      subtitle: 'Skilled Teams • Smooth Coordination • Reliable Delivery',
      image: '/images/service_subcontracting_hd.jpg',
      description: 'Rhombus Contractors provides dependable subcontracting solutions for commercial, residential, and industrial developments. We supply experienced site teams, skilled trades, and modern equipment to handle structural steel and building packages with exceptional craftsmanship, safety, and on-time completion.'
    },
    '02': {
      title: 'Fabrication & Installation of Metal Work',
      badge: 'Precision Metalwork',
      subtitle: 'Custom Steel Fabrication • Architectural Metalwork • Expert Assembly',
      image: '/images/service_welder_hd.jpg',
      description: 'Our modern fabrication workshop delivers custom structural frameworks, architectural stairs, canopies, and railings built with millimeter precision. From initial cutting and seamless welding to on-site lifting and installation, we ensure durable structures that look great and stand the test of time.'
    },
    '03': {
      title: 'Powder Coating & Surface Finish',
      badge: 'Durable Finishes',
      subtitle: 'Protective Coatings • Weather Resistance • Vibrant Colors',
      image: '/images/service_powder_coating_hd.jpg',
      description: 'Give your metalwork a beautiful, durable finish that resists rust, harsh weather, and everyday wear. With advanced surface preparation and an extensive spectrum of colors and textures, we deliver smooth, long-lasting protective coatings for interior and exterior installations.'
    },
    '04': {
      title: 'Construction Material Supply',
      badge: 'Fast & Reliable Supply',
      subtitle: 'Structural Beams • Steel Hollow Sections • Rebar • Quick Site Delivery',
      image: '/images/service_pipes_hd.jpg',
      description: 'We supply high-grade structural steel beams, tubes, reinforcement mesh, and heavy steel plates directly to your jobsite. With substantial stock and dependable logistics, we ensure you receive the right materials right when you need them.'
    },
    '05': {
      title: 'Architectural Design & 3D Visualisation',
      badge: 'Design & 3D Modeling',
      subtitle: 'Photorealistic 3D Renders • Accurate Models • Confident Planning',
      image: '/images/service_5_hd.jpg',
      description: 'See your architectural concepts come to life in photorealistic 3D before groundbreaking. Our digital design team creates immersive renders and detailed models that help visualize spaces, resolve design questions early, and present compelling concepts to clients and stakeholders.'
    },
    '06': {
      title: 'Joinery and Interior Fitout',
      badge: 'Bespoke Interiors',
      subtitle: 'Custom Architectural Woodwork • Metal Partitions • Turnkey Fitouts',
      image: '/images/service_6_hd.jpg',
      description: 'Combining traditional timber craft with sleek metal details, our interior fitout team creates bespoke millwork, feature walls, acoustic paneling, and statement reception desks. We transform commercial offices, retail spaces, and residences into inviting, functional environments.'
    },
    '07': {
      title: 'Access and Temporary Works',
      badge: 'Safe Site Solutions',
      subtitle: 'Modular Scaffolding • Structural Shoring • Secure Work Platforms',
      image: '/images/service_7_hd.jpg',
      description: 'We supply, erect, and inspect safe scaffolding, heavy propping towers, and protected public walkways for construction sites of all sizes. Our team prioritizes worker safety and efficiency with fast setup, regular inspections, and prompt removal to keep your site running smoothly.'
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
