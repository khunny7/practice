import _ from 'lodash';
import './style.css';
import KateImage from './kate-profile.jpg';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack2'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    var kateImage = new Image();
    kateImage.src = KateImage;

    element.appendChild(kateImage);

    return element;
}

document.body.appendChild(component());

printMe();