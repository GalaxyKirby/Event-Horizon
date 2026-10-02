import "./utils";
import { NAV_STATE, showPage } from "./utils";

//Buttons
const homeBtn = document.getElementById('home-btn');
const galaxyBtn = document.getElementById('galaxy-btn');
const waffleBtn = document.getElementById('waffle-btn');
const duckBtn = document.getElementById('duck-btn');
const dinoBtn = document.getElementById('din0-btn');
const sniperBtn = document.getElementById('sniper-btn')
//Mobile Btns
const homeBtnMbl = document.getElementById('home-btn-mbl');
const galaxyBtnMbl = document.getElementById('galaxy-btn-mbl');
const waffleBtnMbl = document.getElementById('waffle-btn-mbl');
const duckBtnMbl = document.getElementById('duck-btn-mbl');
const dinoBtnMbl = document.getElementById('dino-btn-mbl');
const sniperBtnMbl = document.getElementById('sniper-btn-mbl');

const dropdownBtn = document.getElementById('dropdown-btn');
const dropdown = document.getElementById('dropdown');

//On Page Open Set State
document.addEventListener('DOMContentLoaded', () => {

    showPage(localStorage.getItem(NAV_STATE));

    dropdown.style.display = "none";
});

//= Dropdown
dropdownBtn.addEventListener('click', () => {
    dropdown.style.display == "none" 
        ? dropdown.style.display = "block"
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