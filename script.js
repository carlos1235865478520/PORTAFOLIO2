document.addEventListener("DOMContentLoaded", () => {
  // Formulario: Combinar nombre y apellido en campo oculto
  const form = document.querySelector(".contact-form");
  const firstNameField = document.querySelector(".first-name");
  const lastNameField = document.querySelector(".last-name");
  const hiddenFullNameField = document.querySelector(".hidden-full-name");

  if (form) {
    form.addEventListener("submit", (event) => {
      // Si el campo "Nombre completo" está vacío, combinar "First Name" y "Last Name"
      if (hiddenFullNameField && firstNameField && lastNameField && !hiddenFullNameField.value.trim()) {
        hiddenFullNameField.value = `${firstNameField.value.trim()} ${lastNameField.value.trim()}`;
      }

      // Validar que al menos uno de los campos esté lleno
      if (hiddenFullNameField && !hiddenFullNameField.value.trim()) {
        event.preventDefault(); // Detiene el envío del formulario
        alert("Por favor, completa el campo de Nombre completo o los campos de Nombre y Apellido.");
        return;
      }
    });
  }

  // Menú hamburguesa
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active'); // <-- Cambia aquí
    });
  }
});