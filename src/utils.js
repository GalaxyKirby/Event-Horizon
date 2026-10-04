// Defining Existing Page Elements

//Vars
export const NAV_STATE = "State";

//Nav Bars
let desktopNav = document.getElementById('navbar-desktop');
let mobileNav = document.getElementById('navbar-mobile');

//Pages
const pages = {
    home: document.getElementById("about-section"),
    galaxy: document.getElementById("galaxy-player"),
    waffle: document.getElementById("waffle-player"),
    duck: document.getElementById("duck-player"),
    dino: document.getElementById("din0-player"),
    sniper: document.getElementById("sniper-player")
};

//Functions
export function showPage(name) {

    // Hide every page
    Object.values(pages).forEach(page => {
        page.style.display = "none";
    });

    if (!pages[name]) {
        name = "home";
    }

    //Show the given page
    pages[name].style.display = "block";

    
    localStorage.setItem(NAV_STATE, name);
}

export function positionDropdown(button, dropdown) {
    const position = button.getBoundingClientRect();

    dropdown.style.position = "fixed";
    dropdown.style.left = `${position.left}px`;
    dropdown.style.top = `${position.bottom}px`;
}

