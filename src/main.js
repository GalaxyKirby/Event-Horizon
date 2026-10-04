//Vars
const NAV_STATE = "State";

//Pages
const pages = {
    home: document.getElementById("about-section"),
    galaxy: document.getElementById("galaxy-player"),
    waffle: document.getElementById("waffle-player"),
    duck: document.getElementById("duck-player"),
    dino: document.getElementById("din0-player"),
    sniper: document.getElementById("sniper-player")
};

//Nav Bars
let desktopNav = document.getElementById('navbar-desktop');
let mobileNav = document.getElementById('navbar-mobile');

//Buttons
const homeBtn = document.getElementById('home-btn');
const galaxyBtn = document.getElementById('galaxy-btn');
const waffleBtn = document.getElementById('waffle-btn');
const duckBtn = document.getElementById('duck-btn');
const dinoBtn = document.getElementById('din0-btn');
const sniperBtn = document.getElementById('sniper-btn');

const loreBtn = document.getElementById('lore-btn');
const blueskyBtn = document.getElementById('bluesky-btn');
const twitchBtn = document.getElementById('bluesky-btn');

//Mobile Btns
const homeBtnMbl = document.getElementById('home-btn-mbl');
const galaxyBtnMbl = document.getElementById('galaxy-btn-mbl');
const waffleBtnMbl = document.getElementById('waffle-btn-mbl');
const duckBtnMbl = document.getElementById('duck-btn-mbl');
const dinoBtnMbl = document.getElementById('dino-btn-mbl');
const sniperBtnMbl = document.getElementById('sniper-btn-mbl');

const loreBtnMbl = document.getElementById('lore-btn-mbl');
const blueskyBtnMbl = document.getElementById('bluesky-btn-mbl');
const twitchBtnMbl = document.getElementById('twitch-btn-mbl');

const dropdownBtn = document.getElementById('dropdown-btn');
const dropdown = document.getElementById('mobile-nav-players');

//Functions
function showPage(name) {

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

function positionDropdown(button, dropdown) {
    const position = button.getBoundingClientRect();

    dropdown.style.position = "fixed";
    dropdown.style.left = `${position.left}px`;
    dropdown.style.top = `${position.bottom}px`;
}

//On Page Open Set State
document.addEventListener('DOMContentLoaded', () => {

    showPage(localStorage.getItem(NAV_STATE));

    dropdown.style.display = "none";
});

//= Dropdown

dropdownBtn.addEventListener('click', () => {
    dropdown.style.display == "none" 
        ? dropdown.style.display = "flex"
        : dropdown.style.display = "none";
});

document.addEventListener('click', () => {
    if(event.target.id != "dropdown-btn") {
        dropdown.style.display = "none";
    }
})


//= Buttons
//Btn Nav Desktop
homeBtn.addEventListener('click', () => {
    showPage("home");
});

galaxyBtn.addEventListener('click', () => {
    showPage("galaxy");
});

waffleBtn.addEventListener('click', () => {
    showPage("waffle");
});

duckBtn.addEventListener('click', () => {
    showPage("duck");
});

dinoBtn.addEventListener('click', () => {
    showPage("dino");
});

sniperBtn.addEventListener('click', () => {
    showPage("sniper");
});

loreBtn.addEventListener('click', () => {
    window.open("https://www.britannica.com/topic/event-horizon-black-hole");
});

blueskyBtn.addEventListener('click', () => {
    window.open('https://bsky.app/profile/eventthorizon.bsky.social');
});

twitchBtn.addEventListener('click', () => {
    window.open('https://www.twitch.tv/galaxykirbyspl');
});

//Btn Nav Mobile
homeBtnMbl.addEventListener('click', () => {
    showPage("home");
});

galaxyBtnMbl.addEventListener('click', () => {
    showPage("galaxy");
});

waffleBtnMbl.addEventListener('click', () => {
    showPage("waffle");
});

duckBtnMbl.addEventListener('click', () => {
    showPage("duck");
});

dinoBtnMbl.addEventListener('click', () => {
    showPage("dino");
});

sniperBtnMbl.addEventListener('click', () => {
    showPage("sniper");
});

loreBtnMbl.addEventListener('click', () => {
    window.open("https://www.britannica.com/topic/event-horizon-black-hole");
});

blueskyBtnMbl.addEventListener('click', () => {
    window.open('https://bsky.app/profile/eventthorizon.bsky.social');
});

twitchBtnMbl.addEventListener('click', () => {
    window.open('https://www.twitch.tv/galaxykirbyspl');
});