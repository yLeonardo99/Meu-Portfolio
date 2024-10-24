
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

/* ==================================== BTN - SETA PARA MENU ================================== */

window.addEventListener('scroll', function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    
    if (window.scrollY > 5) { // Exibe após rolar 5px
        scrollToTopButton.style.display = 'block'
    } else {
        scrollToTopButton.style.display = 'none'; 
    }
});

/* ======================================== MENU hambúrguer - MOBILE =================================================================== */



    // Abrir o menu

    document.querySelector('.btn-abrir-menu').addEventListener('click', function() {
        document.querySelector('.menu-mobile').classList.add('abrir-menu');
        document.querySelector('.overlay-menu').style.display = 'block';
    });

    // Fechar o menu

    document.querySelector('.btn-fechar').addEventListener('click', function() {
        document.querySelector('.menu-mobile').classList.remove('abrir-menu');
        document.querySelector('.overlay-menu').style.display = 'none';
    });

    // Fechar o menu ao clicar na overlay

    document.querySelector('.overlay-menu').addEventListener('click', function() {
        document.querySelector('.menu-mobile').classList.remove('abrir-menu');
        document.querySelector('.overlay-menu').style.display = 'none';
    });
