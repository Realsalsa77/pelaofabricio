El código que has proporcionado parece ser una buena base para una tienda en línea simple. Sin embargo, hay algunas mejoras que podrías considerar:
1. Agregar descripción del producto
En la función cargarProductos, estás intentando mostrar la descripción del producto con ${producto.descripcion}, pero no hay propiedad descripcion en el objeto producto. Debes agregar esta propiedad a cada objeto de producto.
2. Mejorar la función de carga de productos
En lugar de usar insertAdjacentHTML en cada iteración, puedes crear un fragmento de documento y agregar todos los productos HTML al fragmento. Luego, agrega el fragmento al contenedor de productos. Esto mejora el rendimiento.
3. Agregar validación para evitar errores
Verifica que el contenedor de productos y los botones de compra existan antes de intentar agregar eventos.
4. Considerar una estructura de datos más escalable
Si planeas agregar más productos o categorías, considera utilizar un objeto con propiedades para cada categoría, en lugar de un arreglo de productos.
5. Mejorar la función de cambio de texto en el header
En lugar de utilizar setInterval y setTimeout, considera utilizar CSS para crear un efecto de animación.
Aquí te muestro el código actualizado:
JavaScript
// Agrega evento de click a los botones de compra
const comprarBotones = document.querySelectorAll('.producto button');

if (comprarBotones.length > 0) {
  comprarBotones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      const producto = e.target.parentElement;
      const productoNombre = producto.querySelector('h3').textContent;
      const productoPrecio = producto.querySelector('p:nth-child(3)').textContent;

      // Agrega lógica para agregar al carrito o realizar compra
      console.log(`Comprado: ${productoNombre} - ${productoPrecio}`);
    });
  });
}

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

// Utiliza CSS para crear un efecto de animación
headerTexto.style.animation = 'textoAlternado 4s infinite';

// Agrega evento de carga de productos
const productosContainer = document.querySelector('.productos-container');

if (productosContainer) {
  // Ejemplo de productos
  const productos = [
    {
      id: 1,
      nombre: 'Topper de feliz cumpleaños',
      precio: 4.50,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_698555-MLV51708770658_092022-F.webp',
      descripcion: 'Topper de cumpleaños para decorar tu pastel',
    },
    {
      id: 2,
      nombre: 'Topper de aniversario',
      precio: 5.50,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_728987-MLV51708770657_092022-F.webp',
      descripcion: 'Topper de aniversario para decorar tu pastel',
    },
    // Agrega más productos según sea necesario
  ];

  // Función para cargar productos
  function cargarProductos() {
    const fragment = document.createDocumentFragment();

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
      fragment.insertAdjacentHTML('beforeend', productoHTML);
    });

    productosContainer.appendChild(fragment);
  }

  cargarProductos();
}
Y agrega este CSS para crear el efecto de animación en el header:
CSS
@keyframes textoAlternado {
  0% {
    content: 'Infinity Addons';
  }
  50% {
    content: '';
  }
  100% {
    content: 'Infinity Addons';
  }
}

header h1 {
  animation: textoAlternado 4s infinite;
}
