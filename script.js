import {
    barcelona,
    roma,
    paris,
    londres
} from './ciudades.js'

//Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregar evento click a cada enlace

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {

        //remover el activo 

        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        });

        // Agregar la clase "activa" al enlace actual

        this.classList.add('active')

        // Obtener el contenido correspondiente segun el enlace

        let contenido = obtenerContenido(this.textContent)

        //Mostrar el contenido en el DOM

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

//funcion para traer la informacion correcta desde ciudades.js

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
