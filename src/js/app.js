import '../css/input-elements.css';
import '../css/main.css';
import './myTempJsFile.js'

var data = {
    name: 'Zach',
    title: 'Junior Associate',
    roles: {
        official: 'web developer',
        unofficial: 'web boi'
    }
}

var content = Handlebars.templates['myTemplate'](data);
document.querySelector('#add-stuff-here').innerHTML += content;


