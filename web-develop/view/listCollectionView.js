var app = app || {};

app.listCollectionView = Backbone.View.extend({
    tagName: "section",
    // temporary, this needs to come from the VM
    collection: ["item1", "item2", "item3"],

    render: function() {
        _.each(this.collection, this.addListItem, this);

        return this;
    },

    addListItem: function() {
        var listItemView = new app.listItemView ({});
        this.$el.append(listItemView.render().el);
    }
});