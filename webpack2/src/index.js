import _ from 'lodash';
import '../node_modules/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';
import KateImage from './kate-profile.jpg';
import printMe from './print.js';
import CoolItems from './cool-items/cool-items.js';

function component() {
    var element = document.createElement('div');

    // Add the image to our existing div.
    var kateImage = new Image();
    kateImage.src = KateImage;

    element.appendChild(kateImage);

    var coolItemsPanel = document.createElement('div');

    var coolItems = new CoolItems();
    var coolItemsHtml = coolItems.render();

    coolItemsPanel.innerHTML = coolItemsHtml;

    element.appendChild(coolItemsPanel);

    return element;
}

document.body.appendChild(component());

printMe();