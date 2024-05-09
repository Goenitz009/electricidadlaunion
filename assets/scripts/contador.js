// Comprobar si el navegador admite el almacenamiento local
if (typeof(Storage) !== "undefined") {
  // Verificar si ya existe un contador en el almacenamiento local
  if (localStorage.visitCount) {
    // Si existe, incrementar el contador
    localStorage.visitCount = Number(localStorage.visitCount) + 1;
  } else {
    // Si no existe, inicializar el contador a 1
    localStorage.visitCount = 1;
  }
  // Mostrar el número de visitas en la página
  document.getElementById("visitCount").textContent = localStorage.visitCount;
} else {
  // Si el navegador no admite el almacenamiento local, mostrar un mensaje de advertencia
  console.log("El navegador no admite el almacenamiento local. No se puede rastrear el número de visitas.");
}