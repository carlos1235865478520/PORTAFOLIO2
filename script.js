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
    languages: ["HTML", "CSS", "JavaScript", "JavaScript", "JavaScript"], 
    link: "#" 
  },
  {
    title: "Project 2",
    image: "https://usagif.com/wp-content/uploads/2022/4hv9xm/dancing-duck-acegifcom-29.gif",
    languages: ["React", "Node.js"],
    link: "#"
  },
  {
    title: "Project 3",
    image: "https://usagif.com/wp-content/uploads/2022/4hv9xm/dancing-duck-acegifcom-29.gif",
    languages: ["Python", "Django"],
    link: "#"
  },
  {
    title: "Project 3",
    image: "https://usagif.com/wp-content/uploads/2022/4hv9xm/dancing-duck-acegifcom-29.gif",
    languages: ["Python", "Django"],
    link: "#"
  },
  {
    title: "Project 3",
    image: "https://usagif.com/wp-content/uploads/2022/4hv9xm/dancing-duck-acegifcom-29.gif",
    languages: ["Python", "Django"],
    link: "#"
  },
  {
    title: "Project 3",
    image: "https://usagif.com/wp-content/uploads/2022/4hv9xm/dancing-duck-acegifcom-29.gif",
    languages: ["Python", "Django"],
    link: "#"
  }
];

// Función para renderizar nuevas tarjetas
function renderNewProjects() {
  // Selecciona el contenedor donde se agregarán las tarjetas dinámicamente
  const projectsList = document.querySelector('.projects-list');

  // Recorre cada proyecto en el arreglo `newProjects`
  newProjects.forEach(project => {
    // Crea un nuevo elemento <div> para la tarjeta del proyecto
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card'); // Agrega la clase CSS `project-card` para el estilo

    // Define el contenido HTML de la tarjeta usando los datos del proyecto
    projectCard.innerHTML = `
      <div class="project-img">
        <img src="${project.image}" alt="${project.title}" /> <!-- Imagen del proyecto -->
      </div>
      <div class="project-info">
        <h3>${project.title}</h3> <!-- Título del proyecto -->
        <div class="project-languages">
          <!-- Lista de lenguajes utilizados en el proyecto -->
          ${project.languages.map(lang => `<span class="lang-badge">${lang}</span>`).join('')}
        </div>
        <a class="project-btn" href="${project.link}">See project</a> <!-- Botón con enlace al proyecto -->
      </div>
    `;

    // Agrega la tarjeta creada al contenedor `.projects-list`
    projectsList.appendChild(projectCard);
  });
}

// Llama a la función para renderizar las nuevas tarjetas cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', renderNewProjects);