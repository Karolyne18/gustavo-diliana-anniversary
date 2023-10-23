//Galeria
const imagenesv = document.querySelectorAll('.img-gallery-v')
const imagenesh = document.querySelectorAll('.img-gallery-h')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLigth = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer');


imagenesv.forEach(imagen =>{
    imagen.addEventListener('click', ()=> {
        aparecerImagen(imagen.getAttribute('src'))
    })
})

imagenesh.forEach(imagen =>{
    imagen.addEventListener('click', ()=> {
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLigth.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLigth.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLigth.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}

//Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 5));
    }
}