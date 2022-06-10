let volume = 10;

const controlsSection = document.querySelector('.controls');
const volumeDisplay = controlsSection.querySelector('span');
const [downButton, upButton] = controlsSection.querySelectorAll('button');



function displayVolume() {
    volumeDisplay.textContent = volume;
}

downButton.addEventListener('click', () => {
    if (volume) {
        volume--;
    }
    displayVolume();
});



// state


// component
    // define and grab DOM elements
    // display functions
    // subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components


// page load actions
displayVolume();