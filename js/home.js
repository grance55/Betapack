function redirect(url) {
    window.location.href = url;
}

let toggleNavStatus = false,
    navbar = document.querySelector('.links-sidebar'),
    navbar_links = document.querySelectorAll('.links-sidebar a'),
    nav_icon = document.getElementById('nav_icon'),
    nav_footer = document.getElementById('nav_footer'),
    footer = document.querySelector('footer'),
    sec6 = document.querySelector('.section6'),
    nav_mob = document.querySelector('.navbar_mob');
function show_navbar() {

    let arrayLength = navbar_links.length;

    if (toggleNavStatus === false) {
        navbar.style.visibility = 'visible';
        if (window.innerWidth < 480) {
            navbar.style.width = '100%';
            nav_footer.style.width = '100%';
        }
        else {
            navbar.style.width = '80%';
            nav_footer.style.width = '80%';
        }

        nav_icon.classList.remove('fa-bars');
        nav_icon.classList.add('fa-times');

        for (let i = 0; i < arrayLength; i++) {
            navbar_links[i].style.opacity = '1';
            navbar_links[i].style.width = '100%';
        }

        toggleNavStatus = true;
    }
    else {
        navbar.style.visibility = 'hidden';
        navbar.style.width = '0';

        nav_icon.classList.remove('fa-times');
        nav_icon.classList.add('fa-bars');



        for (let i = 0; i < arrayLength; i++) {
            navbar_links[i].style.opacity = '0';
            navbar_links[i].style.width = '0';
        }

        toggleNavStatus = false;
    }
}


window.addEventListener('scroll', () => {
    spaceBelow = window.innerHeight - sec6.getBoundingClientRect().bottom;


    if (screen.height === Math.round(spaceBelow + 60)) {
        nav_mob.classList.remove('.navbar_mob_light');
        nav_mob.classList.add('navbar_mob_dark');
    }
    else {
        nav_mob.classList.add('.navbar_mob_light');
        nav_mob.classList.remove('navbar_mob_dark');
    }
});

