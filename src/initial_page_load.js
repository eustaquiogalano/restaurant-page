import menuImageImport from './img/menu.png';

(function() {

    // first get a reference to the content div
    // that will hold all the 3 divs that also
    // holds the main contents of the page
    const content = document.querySelector('#content');

    // first div
    // create div element and assign an id name
    const restoDescription = document.createElement('div');
    restoDescription.id = 'resto-description';

    // create another div to be inserted inside resto description div
    const shortDescription = document.createElement('div');
    shortDescription.id = 'short-description';

    // create p element to be inserted inside short description div
    const intro = document.createElement('p');
    intro.textContent = `
        "Craving something delicious? 🍽️ Come and enjoy 
        mouthwatering dishes made with love! Visit us today 
        for great food, cozy vibes, and unforgettable flavors. 
        See you soon! 😋🍛"
    `;

    // append the p into short description 
    shortDescription.appendChild(intro);

    // create the 2nd div to be inserted also inside resto description div
    const bookButton = document.createElement('div');
    bookButton.id = 'book-button';

    // create button element to be inserted inside book button div
    const bButton = document.createElement('button');
    bButton.textContent = 'Book reservation now!';

    // append the button element inside book button div
    bookButton.appendChild(bButton);

    // append short description and book button div to resto description div
    restoDescription.appendChild(shortDescription);
    restoDescription.appendChild(bookButton);

    // finally append resto description div inside content div
    content.appendChild(restoDescription);


    // second div
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
})();