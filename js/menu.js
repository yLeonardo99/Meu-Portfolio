
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

/* ==================================== BTN - SETA PARA MENU ================================== */

window.addEventListener('scroll', function () {
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    if (window.scrollY > 5) { // Exibe após rolar 5px
        scrollToTopButton.style.display = 'block'
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

/* ======================================== MENU hambúrguer - MOBILE =================================================================== */



// Abrir o menu

document.querySelector('.btn-abrir-menu').addEventListener('click', function () {
    document.querySelector('.menu-mobile').classList.add('abrir-menu');
    document.querySelector('.overlay-menu').style.display = 'block';
});

// Fechar o menu

document.querySelector('.btn-fechar').addEventListener('click', function () {
    document.querySelector('.menu-mobile').classList.remove('abrir-menu');
    document.querySelector('.overlay-menu').style.display = 'none';
});

// Fechar o menu ao clicar na overlay

document.querySelector('.overlay-menu').addEventListener('click', function () {
    document.querySelector('.menu-mobile').classList.remove('abrir-menu');
    document.querySelector('.overlay-menu').style.display = 'none';
});

/* ===================== ESTILO NO MEU NOME INICIAL / DESENVOLVEDOR ===========================*/

const nome = "Desenvolvedor Full-Stack";
let i = 0;
let apagando = false;
const elementoNome = document.getElementById("nome");

function digitar() {
    if (!apagando && i < nome.length) {
        elementoNome.textContent += nome.charAt(i);
        i++;
        setTimeout(digitar, 150);
    } else if (apagando && i > 0) {
        elementoNome.textContent = nome.substring(0, i - 1);
        i--;
        setTimeout(digitar, 100);
    } else {
        apagando = !apagando;
        setTimeout(digitar, 1000);
    }
}

digitar();

//LEONARDO CASSIANO

const nome2 = "LEONARDO CASSIANO ";
let j = 0;
let apagando2 = false;
const elementoNome2 = document.getElementById("nome2");

function digitarNome2() {
    if (!apagando2 && j < nome2.length) {
        elementoNome2.textContent += nome2.charAt(j);
        j++;
        setTimeout(digitarNome2, 150);
    } else if (apagando2 && j > 0) {
        elementoNome2.textContent = nome2.substring(0, j - 1);
        j--;
        setTimeout(digitarNome2, 100);
    } else {
        apagando2 = !apagando2;
        setTimeout(digitarNome2, 1000);
    }
}

digitarNome2();

