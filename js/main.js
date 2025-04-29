console.log("JavaScript está funcionando ");

// Función para alternar el estado expandido de las imágenes
function toggleExpand(element) {
    element.classList.toggle('expanded');
  }

  // Buscamos los elementos del HTML
const openMenuButton = document.querySelector('.open-menu');
const closeMenuButton = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');

// Evento para abrir el menú
openMenuButton.addEventListener('click', () => {
  menu.classList.add('menu-open'); // Agregamos una clase al menú
});

// Evento para cerrar el menú
closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('menu-open'); // Quitamos la clase del menú
});

function mostrarCategoria(categoria) {
  // Primero ocultamos todos los proyectos
  const proyectos = document.querySelectorAll('.categoria-proyecto');
  proyectos.forEach(proyecto => {
    proyecto.style.display = 'none';
  });

  // Mostramos solo los proyectos de la categoría seleccionada
  const proyectosCategoria = document.querySelectorAll(`.categoria-proyecto.${categoria}`);
  proyectosCategoria.forEach(proyecto => {
    proyecto.style.display = 'block';
  });
}

// Cambiar el texto del botón cuando se haga click
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function() {
    const target = document.querySelector(this.getAttribute('data-bs-target'));
    if (target.classList.contains('collapse')) {
      this.textContent = target.classList.contains('show') ? 'Ver detalles' : 'Ocultar detalles';
    }
  });
});
