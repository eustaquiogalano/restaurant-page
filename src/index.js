import "./styles.css";
import {homeModule} from "./initial_page_load.js";
import {menuModule} from "./menu_module.js";
import { aboutModule } from "./about_module.js";

homeModule();
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

const content = document.querySelector('#content');

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    homeModule();
    homeButton.style.backgroundColor = "black";
    menuButton.style.backgroundColor = "white";
    aboutButton.style.backgroundColor = "white";   
});
menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    menuModule();
    homeButton.style.backgroundColor = "white";
    menuButton.style.backgroundColor = "black";
    aboutButton.style.backgroundColor = "white";   
});

aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
    aboutModule();
    homeButton.style.backgroundColor = "white";
    menuButton.style.backgroundColor = "white";
    aboutButton.style.backgroundColor = "black";   
});
