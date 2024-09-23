// Agrega evento de click a los botones de compra
const comprarBotones = document.querySelectorAll('.producto button');

comprarBotones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        const producto = e.target.parentElement;
        const productoNombre = producto.querySelector('h3').textContent;
        const productoPrecio = producto.querySelector('p:nth-child(3)').textContent;

        // Agrega lógica para agregar al carrito o realizar compra
        console.log(`Comprado: ${productoNombre} - ${productoPrecio}`);
    });
});

// Agrega evento de scroll suave a los enlaces de navegación
const navEnlaces = document.querySelectorAll('nav a');

navEnlaces.forEach((enlace) => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();
        const seccion = document.querySelector(enlace.getAttribute('href'));
        seccion.scrollIntoView({ behavior: 'smooth' });
    });
});

// Agrega evento de cambio de texto en el header
const headerTexto = document.querySelector('header h1');
const textoOriginal = headerTexto.textContent;

setInterval(() => {
    headerTexto.textContent = textoOriginal + ' | Infinity Addons';
    setTimeout(() => {
        headerTexto.textContent = textoOriginal;
    }, 2000);
}, 4000);

// Agrega evento de carga de productos
const productosContainer = document.querySelector('.productos-container');

// Ejemplo de productos
const productos = [
    { id: 1, nombre: 'Topper de feliz cumpleaños', precio: 4.50, imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_698555-MLV51708770658_092022-F.webp' },
    { id: 2, nombre: 'Topper de aniversario', precio: 5.50, imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_728987-MLV51708770657_092022-F.webp' },
    // Agrega más productos según sea necesario
];

// Función para cargar productos
function cargarProductos() {
    productos.forEach((producto) => {
        const productoHTML = `
            <figure class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <figcaption>
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p>Precio: S/${producto.precio}</p>
                    <button>Comprar</button>
                </figcaption>
            </figure>
        `;
        productosContainer.insertAdjacentHTML('beforeend', productoHTML);
    });
}

// Llama la función para cargar productos
cargarProductos();
