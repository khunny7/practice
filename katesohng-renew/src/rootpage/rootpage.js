import template from './rootpage-template.pug';
import IntroSection from '../intro-section/intro-section.js';

export default class RootPage {
    render() {
        var htmlContent = template();
        var htmlObject = $($.parseHTML(htmlContent));

        var introSection = new IntroSection();
        var introSectionContent = introSection.render();

        htmlObject.find('.intro-section').html(introSectionContent);
        
        return htmlObject;
    }
}