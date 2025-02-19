const imagenes = [
    "./assets/image_1.jpg",
    "./assets/image_2.jpeg",
    "./assets/image_3.jpeg",
];

let indiceActual = 0;

const imgElemento = document.querySelector(".img");
const btnAtras = document.getElementById("atras");
const btnAdelante = document.getElementById("adelante");

btnAtras.addEventListener("click", () => {
    if (indiceActual > 0) {
        indiceActual--;
        actualizarImagen();
    }
});

btnAdelante.addEventListener("click", () => {
    if (indiceActual < imagenes.length - 1) {
        indiceActual++;
        actualizarImagen();
    }
});

function actualizarImagen() {
    imgElemento.style.opacity = 0;
    setTimeout(() => {
        imgElemento.src = imagenes[indiceActual];
        imgElemento.style.opacity = 1;
    }, 300);
}

imgElemento.style.transition = "opacity 0.3s ease-in-out";