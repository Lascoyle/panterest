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

//Display the selected file image in the input field for the pin edition/creation form
function displayFileName() {

    let selectedFile = document.getElementById('pin_imageFile_file').files[0].name;
    console.log(selectedFile);

    let customFileInput = document.querySelector(".custom-file-label");
    console.log(customFileInput);
    customFileInput.innerHTML = selectedFile;
}

addEventListener('change', displayFileName);


