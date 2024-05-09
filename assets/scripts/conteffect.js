// Función para agregar la clase 'active'
function toggleActive(element) {
  element.classList.add('active');
}

// Función para eliminar la clase 'active'
function removeActive(element) {
  element.classList.remove('active');
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  var dropdownMenu = document.querySelector(".dropdown-menu");
  var dropbtn = document.querySelector(".dropbtn");
  
  dropdownContent.classList.toggle("open");
  dropdownMenu.classList.toggle("open");

   // Cambiar el estilo del botón cuando se abre el menú
   if (dropdownContent.classList.contains("open")) {
    dropbtn.style.backgroundColor = "#333"; // Cambia el color de fondo a negro (#333)
    dropbtn.style.color = "#fff"; // Cambia el color del texto a blanco
  } else {
    dropbtn.style.backgroundColor = "#4CAF50"; // Restaura el color de fondo original
    dropbtn.style.color = "#fff"; // Restaura el color del texto original
  }
}

document.addEventListener("click", function(event) {
  var dropdownMenu = document.querySelector(".dropdown-menu");
  var dropbtn = document.querySelector(".dropbtn");
  if (!dropdownMenu.contains(event.target) && event.target !== dropbtn) {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.remove("open");
    dropdownMenu.classList.remove("open");

    // Restaurar el estilo del botón cuando se cierra el menú
    dropbtn.style.backgroundColor = "#4CAF50"; // Restaura el color de fondo original
    dropbtn.style.color = "#fff"; // Restaura el color del texto original
  }
});
console.log("Prueba de la funcion en menu Desp");