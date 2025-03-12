import locationScreencast from './Screencast from Monday, 10 March, 2025 12:28:53 PM PST.webm';

export const aboutModule = function () {

    // Get a reference to the content div 
    const content = document.querySelector('#content');

    // create div element and assign an id name
    const restoAbout = document.createElement('div');
    restoAbout.id = 'resto-about';

    // create another div element and assign an id name
    // and add the text content
    const information = document.createElement('div');
    information.id = 'info';
    information.textContent = `
        some information about the restaurant
    `;

    // append the information div to resto about div
    restoAbout.appendChild(information)

    // finally append resto about div to content div
    content.appendChild(restoAbout);


    // create the third div and assign id name
    const restoLocation = document.createElement('div');
    restoLocation.id = 'resto-location';

    // create video element set autoplay to true 
    const locationVideo = document.createElement('video');
    locationVideo.autoplay = true;

    // create source element to be nested inside video element
    const vidSource = document.createElement('source');
    vidSource.src = locationScreencast;

    // append source element inside video element
    locationVideo.appendChild(vidSource);

    // append video element inside third div (resto location)
    restoLocation.appendChild(locationVideo);

    // finally append third div to the content div
    content.appendChild(restoLocation);

};