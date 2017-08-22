import template from './item-template.pug';

export default class CoolItems {
    render() {
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

        var htmlResult = template({items: itemData});

        return htmlResult;
    }
};
