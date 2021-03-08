// Comando de menu/navbar
$('.barra-btn').click(function(){
    $('.barra .menu').toggleClass("active");
    $('.barra-btn i').toggleClass("active");
});
/* Letras que se mueven */
var typed = new Typed(".prueba3", {
    strings: ["Mabelcito", "mabelcito.site"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});