console.log("JavaScript está funcionando");

// Función para alternar el estado expandido de las imágenes
function toggleExpand(element) {
  element.classList.toggle('expanded');
}

// Seleccionamos los elementos
const openMenuButton = document.querySelector('.open-menu');
const closeMenuButton = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');

// Mostrar el menú cuando se hace clic en el botón de apertura
openMenuButton.addEventListener('click', () => {
  menu.classList.add('menu_opened'); // Mostrar el menú
});

// Ocultar el menú cuando se hace clic en el botón de cierre
closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('menu_opened'); // Ocultar el menú
});

// Función para verificar el tamaño de la ventana y ajustar el menú
function handleResize() {
  if (window.innerWidth >= 950) {
    // Pantalla grande: aseguramos que el menú esté visible y ocultamos el hamburguesa
    menu.classList.remove('menu_opened');
    openMenuButton.style.display = 'none';
  } else {
    // Pantalla pequeña: ocultamos el menú y mostramos el botón hamburguesa
    openMenuButton.style.display = 'block';
  }
}

// Ejecutamos al cargar la página
handleResize();

// Escuchamos cambios en el tamaño de la ventana
window.addEventListener('resize', handleResize);

