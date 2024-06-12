const enlacesPantalla = document.querySelectorAll('.btn-pantalla');
const seccionesPantalla = document.querySelectorAll('.pantalla');

enlacesPantalla.forEach((enlace, index) => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault(); 

    const seccionActiva = document.querySelector('.pantalla.active');
    seccionActiva.classList.remove('active');

    const idPantalla = enlace.getAttribute('href');
    const seccionObjetivo = document.querySelector(idPantalla);
    seccionObjetivo.classList.add('active');
  });
});
