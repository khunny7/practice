// Name space
var app = app || {};

app.indexView = Backbone.View.extend({
    
});

var listCollections = new app.listCollectionView({});

$("#test").html(listCollections.render().el);