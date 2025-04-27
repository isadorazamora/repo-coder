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
