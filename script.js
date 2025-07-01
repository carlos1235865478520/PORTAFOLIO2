document.addEventListener("DOMContentLoaded", () => {

  //---------------------- MENU DESPLEGABLE ------------------------------------
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
  //-------------------------- ABRIR/CERRAR -----------------------------------
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // Animación del botón
  });

  //-------------------- CERRAR AL DESPLAZARSE ------------------------------------------
  const navItems = navLinks.querySelectorAll('a'); // Selecciona todos los enlaces dentro del menú
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      navLinks.classList.remove('active'); // Cierra el menú
      hamburger.classList.remove('active'); // Resetea la animación del botón
    });
  });
}
  // modal de proyecto
  const modal = document.getElementById('projectModal');
  const openModalBtn = document.querySelector('.project-btn');
  const closeModalBtn = document.getElementById('closeModal');

  if (openModalBtn && modal && closeModalBtn) {
    openModalBtn.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
    closeModalBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
    // Cerrar modal al hacer click fuera del contenido
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }
  
});

// ------------------------ CREAR NUEVOS PROYECTOS ------------------------
const newProjects = [
  {
    title: "Project 1", 
    image: "https://usagif.com/wp-content/uploads/2022/4hv9xm/dancing-duck-acegifcom-29.gif",
    languages: ["HTML", "CSS", "JavaScript"], 
    link: "#",
    description: "Descripción del Proyecto 1. Aquí puedes poner detalles del proyecto, tecnologías usadas, retos, etc."
  },
  {
    title: "Projecto 2", 
    image: "https://usagif.com/wp-content/uploads/2022/4hv9xm/dancing-duck-acegifcom-29.gif",
    languages: ["HTML", "CSS", "JavaScript", "React"], 
    link: "#",
    description: "FGHKJGHKJHJKLJKLÑHTGKÑHJKÑJKLÑKLÑogías usadas, retos, etc."
  }
  
];

// Función para renderizar nuevas tarjetas y modals
function renderNewProjects() {
  const projectsList = document.querySelector('.projects-list');
  const modalsContainer = document.createElement('div'); // Contenedor para los modals
  document.body.appendChild(modalsContainer);

  newProjects.forEach((project, idx) => {
    // Card
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
      <div class="project-img">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <div class="project-languages">
          ${project.languages.map(lang => `<span class="lang-badge">${lang}</span>`).join('')}
        </div>
        <a class="project-btn" href="#" data-modal="modal-${idx}">See project</a>
      </div>
    `;
    projectsList.appendChild(projectCard);

    //------- Modal ----------------------------------------------
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = `modal-${idx}`;
modal.innerHTML = `
  <div class="modal-content">
    <span class="modal-close" data-close="modal-${idx}">&times;</span>
    <div class="modal-img">
      <img src="${project.image}" alt="${project.title}" />
    </div>
    <div class="modal-header">
      <h2 class="modal-title">${project.title}</h2>
      <div class="modal-buttons">
        <a class="modal-btn" href="${project.live || '#'}" target="_blank">
          See live
          <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
        <a class="modal-btn" href="${project.source || '#'}" target="_blank">
          See source
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <div class="modal-languages">
      ${project.languages.map(lang => `<span class="lang-badge">${lang}</span>`).join('')}
    </div>
    <div class="modal-description">
      <p>${project.description}</p>
    </div>
  </div>
`;
    modal.style.display = 'none';
    modalsContainer.appendChild(modal);
  });

  // Eventos para abrir/cerrar modals
  document.querySelectorAll('.project-btn[data-modal]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modalId = this.getAttribute('data-close');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });

  // Cerrar modal al hacer click fuera del contenido
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', renderNewProjects);