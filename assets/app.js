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

console.log('Hello Webpack Encore! Edit me in assets/app.js');

// Display the selected file image in the input field for the pin edition/creation form
function displayFileName() {

    let selectedFile = document.getElementById('pin_imageFile_file').files[0].name;
    console.log(selectedFile);

    let customFileInput = document.querySelector(".custom-file-label");
    console.log(customFileInput);
    customFileInput.innerHTML = selectedFile;
}

addEventListener('change', displayFileName);

let delay = 0;
let pins = document.getElementsByClassName('pin');
console.log(pins)

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






