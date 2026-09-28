import "./utils";
import { NAV_STATE, showPage } from "./utils";

//Buttons
const homeBtn = document.getElementById('home-btn');
const galaxyBtn = document.getElementById('galaxy-btn');
const waffleBtn = document.getElementById('waffle-btn');
const duckBtn = document.getElementById('duck-btn');
const dinoBtn = document.getElementById('din0-btn');
const sniperBtn = document.getElementById('sniper-btn')

//On Page Open Set State
document.addEventListener('DOMContentLoaded', () => {

    showPage(localStorage.getItem(NAV_STATE));

});

/*
//On Closing Tab Reset State
window.addEventListener('beforeunload', () => {

    localStorage.setItem(NAV_STATE, "home");

});
*/

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



//Btn Nav Mobile


//Dynamic Nav Bar Based On Screen Width

