let toggleNavStatus = false,
    menu = document.querySelector('.links-sidebar'),
    menu_links = document.querySelectorAll('.links-sidebar a'),
    menu_icon = document.getElementById('nav_icon'),
    menu_footer = document.getElementById('nav_footer'),
    body = document.querySelector('body'),
    arrayLength = menu_links.length,
    linkovi = document.querySelectorAll('.linkovi_a');

function show_navbar() {

    if (toggleNavStatus === false) {
        menu.style.visibility = 'visible';
        menu.style.width = '100%';
        menu_footer.style.width = '100%';
        menu_footer.style.height = window.innerHeight;
        menu_icon.classList.remove('fa-bars');
        menu_icon.classList.add('fa-times');

        for (let i = 0; i < linkovi.length; i++) {
            linkovi[i].classList.remove('animated', 'fadeOutRight', 'faster');
            linkovi[i].classList.add('animated', 'fadeInRight');
        }

        body.classList.add('stop-scrolling');
        toggleNavStatus = true;
    }
    else {
        menu.style.visibility = 'hidden';
        menu.style.width = '0';
        menu_icon.classList.remove('fa-times');
        menu_icon.classList.add('fa-bars');

        for (let i = 0; i < linkovi.length; i++) {
            linkovi[i].classList.remove('animated', 'fadeInRight');
            linkovi[i].classList.add('animated', 'fadeOutRight', 'faster');
        }

        body.classList.remove('stop-scrolling');
        toggleNavStatus = false;
    }
}



function showText(x) {
    console.log(x.getElementsByTagName('img'), x.querySelector('.text_btn'));
    let slika = x.getElementsByTagName('img');
    slika[0].style.opacity = 0.8;

    let nesto = x.querySelector('.text_btn');
    nesto.style.color = 'green';

}

function dontShowText(x) {
    let slika = x.getElementsByTagName('img');
    slika[0].style.opacity = 1;


    let nesto = x.querySelector('.text_btn');
    nesto.style.color = 'black';
}

function redirect(url) {
    window.location.href = url;
}


function show_text(text_box, btn) {

    let text = document.querySelector(`.${text_box}`),
        button_change = document.getElementById(btn);


    if (button_change.innerHTML === 'VIŠE') {
        button_change.innerHTML = 'MANJE';
        text.classList.remove('animated', 'fadeOutDown', 'slow');
        text.classList.add('animated', 'fadeInDown', 'slow');
        text.style.display = 'block';
    } else {
        button_change.innerHTML = 'VIŠE';
        text.classList.remove('animated', 'fadeInDown', 'slow');
        text.classList.add('animated', 'fadeOutDown', 'slow');
        setTimeout(function () {
            text.style.display = 'none';
        }, 2000);
    }
}