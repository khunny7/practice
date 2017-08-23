import '../node_modules/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';

import RootPage from './rootpage/rootpage.js';

var rootpage = new RootPage();
var rootpageHtml = rootpage.render();

$('body').append(rootpageHtml);
