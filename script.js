document.addEventListener('DOMContentLoaded', function() {
    // Datos de las minidonas
    const productos = [
        {
            nombre: "Minidona Clásica",
            precio: "S/1.00",
            descripcion: "Deliciosa minidona espolvoreada con azúcar glas.",
            imagen: "assets/img/minidona-clasica.jpg"
        },
        {
            nombre: "Minidona con Chispas",
            precio: "S/1.20",
            descripcion: "Minidona cubierta de chispas de colores.",
            imagen: "assets/img/minidona-chispas.jpg"
        },
        {
            nombre: "Minidona Rellena",
            precio: "S/1.50",
            descripcion: "Rellena de manjar, chocolate o fresa.",
            imagen: "assets/img/minidona-rellena.jpg"
        }
    ];

    // Generar catálogo
    const catalogo = document.getElementById('catalogo');
    
    productos.forEach(producto => {
        catalogo.innerHTML += `
            <div class="col-md-4">
                <div class="card card-producto shadow">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="info">
                        <h5>${producto.nombre}</h5>
                        <p>${producto.descripcion}</p>
                        <span class="badge bg-warning text-dark">${producto.precio}</span>
                    </div>
                </div>
            </div>
        `;
    });

    // Manejar formulario
    const formulario = document.getElementById('sugerenciasForm');
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu sugerencia! Mejoraremos por ti 😊');
        formulario.reset();
    });
});
