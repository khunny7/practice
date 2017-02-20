// Name space
var app = app || {};

app.listItemView = Backbone.View.extend({
    tagName: "article",
    className: "flowerListItem",

    template: _.template( $("#listItemTemplate").html() ),

    render: function() {
        this.$el.html(this.template);
        return this;
    },

    events: {
        'mouseover' : 'addBgColor',
        'mouseout' : 'removeBgColor'
    },

    addBgColor: function() {
        this.$el.addClass("bgColor");
    },

    removeBgColor: function() {
        this.$el.removeClass("bgColor");
    }
});