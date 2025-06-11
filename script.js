document.addEventListener("DOMContentLoaded", () => {

  // Menú hamburguesa
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active'); // <-- Añadido para animación
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

