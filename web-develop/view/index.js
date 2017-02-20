// Name space
var app = app || {};

app.indexView = Backbone.View.extend({
    
});

app.listItemView = Backbone.View.extend({
    tagName: "article",
    className: "flowerListItem",

    template: _.template( $("#listItemTemplate").html() ),

    render: function() {
        this.$el.html(this.template);
        return this;
    }
});

var listCollections = new app.listCollectionView({});

$("#test").html(listCollections.render().el);