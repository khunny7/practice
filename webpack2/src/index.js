import _ from 'lodash';
import './style.css';
import KateImage from './kate-profile.jpg';
import printMe from './print.js';
import template from './item-template.pug';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack2'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    var kateImage = new Image();
    kateImage.src = KateImage;

    element.appendChild(kateImage);

    var element2 = document.createElement('div');
    // var data = [
    //     {
    //         title: 'something something title',
    //         date: '08/15/2017',
    //         description: 'this is the description, yeah!'
    //     },
    //     {
    //         title: 'some different title',
    //         date: '08/14/2017',
    //         description: 'adsfasdfads asdf afsdafd'
    //     },
    //     {
    //         title: 'no title',
    //         date: '08/13/2017',
    //         description: 'adsf fadsads ffasd  fdasf dsafads'
    //     }
    // ];
    var itemData = [
        {
            title: 'this is the title',
            description: 'hey description',
            price: 100,
            buttonDescription: 'click me'
        },
        {
            title: 'another title',
            description: 'another description',
            price: 100,
            buttonDescription: 'do not click me'
        },
        {
            title: 'this is the title adfafds',
            description: 'adfadfsfdfa description',
            price: 50,
            buttonDescription: 'never click me'
        },
    ];

    element2.innerHTML = template({items: itemData});

    element.appendChild(element2);

    return element;
}

document.body.appendChild(component());

printMe();