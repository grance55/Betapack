function redirect(url) {
    window.location.href = url;
}

let toggleNavStatus = false;
let navbar = document.querySelector('.links-sidebar');
let navbar_links = document.querySelectorAll('.links-sidebar a');
let nav_icon = document.getElementById('nav_icon');
function show_navbar() {

    let arrayLength = navbar_links.length;

    if (toggleNavStatus === false) {
        navbar.style.visibility = 'visible';
        if (window.innerWidth < 480) {
            navbar.style.width = '100%';
            nav_icon.classList.remove('fa-bars');
            nav_icon.classList.add('fa-times');
        }
        else {
            navbar.style.width = '80%';
            nav_icon.classList.remove('fa-bars');
            nav_icon.classList.add('fa-times');
        }


        for (let i = 0; i < arrayLength; i++) {
            navbar_links[i].style.opacity = '1';
            navbar_links[i].style.width = '100%';
        }

        toggleNavStatus = true;
    }
    else {
        navbar.style.visibility = 'hidden';
        navbar.style.width = '0';
        if (window.innerWidth < 480) {
            nav_icon.classList.remove('fa-times');
            nav_icon.classList.add('fa-bars');
        }


        for (let i = 0; i < arrayLength; i++) {
            navbar_links[i].style.opacity = '0';
            navbar_links[i].style.width = '0';
        }

        toggleNavStatus = false;
    }
}
