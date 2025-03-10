(function() {
    // first get a reference to the content div
    const content = document.querySelector('#content');

    // create element and assign corresponding attributes
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
})();