function redirect(url) {
    window.location.href = url;
}

let toggleNavStatus = false;
let navbar = document.querySelector('.links-sidebar');
let navbar_links = document.querySelectorAll('.links-sidebar a');

function show_navbar() {
    let arrayLength = navbar_links.length;
    if (toggleNavStatus === false) {
        navbar.style.visibility = 'visible';
        navbar.style.width = '80%';

        for (let i = 0; i < arrayLength; i++) {
            navbar_links[i].style.opacity = '1';
            navbar_links[i].style.width = '100%';
        }

        toggleNavStatus = true;
    }
    else {
        navbar.style.visibility = 'hidden';
        navbar.style.width = '0';

        for (let i = 0; i < arrayLength; i++) {
            navbar_links[i].style.opacity = '0';
            navbar_links[i].style.width = '0';
        }

        toggleNavStatus = false;
    }
}



