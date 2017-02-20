// Name space
var app = app || {};

app.listItemView = Backbone.View.extend({
    tagName: "article",
    className: "flowerListItem",

    template: _.template( $("#listItemTemplate").html() ),

    render: function() {
        this.$el.html(flowerTemplate);
        return this;
    }
});