import menuImageImport from './img/menu.png';

export const menuModule = function() {
    const content = document.querySelector('#content');

    // create div element and assign an id name 
    const restoMenu = document.createElement('div');
    restoMenu.id = 'resto-menu';

    // create an h3 element for the title of the div
    const menu = document.createElement('h3');
    menu.textContent = 'Menu';

    // append to the second div
    restoMenu.appendChild(menu);

    // create an image element and assign its src and alt attribute
    const menuImage = document.createElement('img');
    menuImage.src = menuImageImport;
    menuImage.alt = 'restaurant menu';

    // append to the second div
    restoMenu.appendChild(menuImage);

    // append the second div (resto-menu) to the content div
    content.appendChild(restoMenu);

};