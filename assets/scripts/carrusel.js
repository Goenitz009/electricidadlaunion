document.addEventListener("DOMContentLoaded", function() {
    const carruselItems = document.querySelectorAll(".carrusel-item");
    let index = 0;

    function mostrarItem(index) {
        carruselItems.forEach(item => item.classList.remove("active"));
        carruselItems[index].classList.add("active");
    }

    mostrarItem(index);

    document.querySelector(".prev").addEventListener("click", function() {
        index = (index === 0) ? carruselItems.length - 1 : index - 1;
        mostrarItem(index);
    });

    document.querySelector(".next").addEventListener("click", function() {
        index = (index === carruselItems.length - 1) ? 0 : index + 1;
        mostrarItem(index);
    });
});