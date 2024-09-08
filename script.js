function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.classList.remove('seccion-activa');
    });

    // Mostrar la sección seleccionada con animación de fade-in
    var seccionActiva = document.getElementById(seccionId);
    seccionActiva.classList.add('seccion-activa');
    
    // Animación GSAP para la transición suave
    gsap.from(seccionActiva, { opacity: 0, y: 50, duration: 1 });
}

// Animaciones de los elementos de la hero section
gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('.hero p', { opacity: 0, y: -30, duration: 1.5 });
gsap.from('.hero .btn', { opacity: 0, y: -20, duration: 2 });
