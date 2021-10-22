var logo = document.querySelector(".logo");
logo.addEventListener("click", function() {
    window.scrollTo(0,0);
})

var navbarSobre = document.querySelector("#navbarSobre");
navbarSobre.addEventListener("click", function() {
    event.preventDefault();
    window.scrollTo(0,500);
})

var navbarBiografia = document.querySelector("#navbarBiografia");
navbarBiografia.addEventListener("click", function() {
    event.preventDefault();
    window.scrollTo(0,1300);
})

var dropdownInfancia = document.querySelector("#dropdownInfancia");
dropdownInfancia.addEventListener("click", function() {
    event.preventDefault();
    window.scrollTo(0,1400);
})

var dropdownCarreira = document.querySelector("#dropdownCarreira");
dropdownCarreira.addEventListener("click", function() {
    event.preventDefault();
    window.scrollTo(0,1700);
})

var dropdownAcidente = document.querySelector("#dropdownAcidente");
dropdownAcidente.addEventListener("click", function() {
    event.preventDefault();
    window.scrollTo(0,2100);
})

var dropdownCarreiraHeroi = document.querySelector("#dropdownCarreiraHeroi");
dropdownCarreiraHeroi.addEventListener("click", function() {
    event.preventDefault();
    window.scrollTo(0,3100);
})

var navbarFilmes = document.querySelector("#navbarFilmes");
navbarFilmes.addEventListener("click", function() {
    event.preventDefault();
    window.scrollTo(0,4500);
})



