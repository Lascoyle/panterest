/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';
import 'bootstrap';

// Display the selected file image in the input field for the pin edition/creation form
function displayFileName() {

    let selectedFile = document.getElementById('pin_imageFile_file').files[0].name;
    console.log(selectedFile);

    let customFileInput = document.querySelector(".custom-file-label");
    console.log(customFileInput);
    customFileInput.innerHTML = selectedFile;
}

addEventListener('change', displayFileName);

// Animate pins when they are displayed on screen
let delay = 0;
let pins = document.getElementsByClassName('pin');

function slidePins() {
    for (let pin of pins) {
        delay = delay+300;
        let pinDownKeyframes = new KeyframeEffect(
            pin,
            [
                { transform: 'translateX(-25%)' },
                { transform: 'translateX(0%)' }
            ],
            { delay: delay, duration: 800, fill: 'forwards' }
        )

        let pinDownAnimation = new Animation(pinDownKeyframes, document.timeline);

        pinDownAnimation.play();

        let pinFadeKeyframes = new KeyframeEffect(
            pin,
            [
                { opacity: 0 },
                { opacity: 1 },
            ],
            { delay: delay, duration: 800, fill: 'forwards' }
        )

        let pinFadeAnimation = new Animation(pinFadeKeyframes, document.timeline);

        pinFadeAnimation.play();

        let pinDisplayKeyframes = new KeyframeEffect(
            pin,
            [
                { display: 'none' },
                { display: 'block' },
            ],
            { delay: delay, duration: 800, fill: 'forwards' }
        )

        let pinDisplayAnimation = new Animation(pinDisplayKeyframes, document.timeline);

        pinDisplayAnimation.play();
    }
}

document.addEventListener("load", slidePins());


//Manage the logout-form submission
let logoutLink = document.querySelector('.logout-link');
let logoutForm = document.getElementById('logout-form');

function confirmLogout() {
    if ( confirm('Are you sure you want to logout?')) {
        logoutForm.submit();
    }

    else {
        return;
    }
}

if(logoutLink) {
    logoutLink.addEventListener(
    'click',
    function(event){ event.preventDefault() & confirmLogout() }
)}

//Manage the pin deletion
let deletionLink = document.querySelector('.deletion-link');
let pinDeleteForm = document.getElementById('pin-delete-form');

function confirmPinDeletion() {
    if ( confirm('Are you sure you want to delete this pin?')) {
        pinDeleteForm.submit();
    }

    else {
        return;
    }
}

if(deletionLink) {
    deletionLink.addEventListener(
    'click',
    function(e){ e.preventDefault() & confirmPinDeletion() }
)}










