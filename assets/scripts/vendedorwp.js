
document.addEventListener('DOMContentLoaded', function() {
  // Número de teléfono que deseas vincular a WhatsApp (incluyendo código de país)
  let phoneNumber = '+542215034655';
  
  // Agregar el número de teléfono al enlace de WhatsApp
  let whatsappLink = document.getElementById('whatsapp-link');
  whatsappLink.href = 'https://wa.me/' + phoneNumber;
});