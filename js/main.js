Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.Songs = Backbone.Collection.extend({});

Sfotipy.SongView = Backbone.View.extend({
	tagName: "li",
	className: "item border-bottom",
	template: Handlebars.compile($("#song-template").html()),
	initialize: function () {
		this.listenTo(this.model,"change",this.render,this);
	},
	events: {
		'click .action.icon-add' : 'add'
	},
	render: function () {
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	},
	add: function (e) {
		e.preventDefault();
		alert(this.model.get("author"));
	}
});

window.Sfotipy = Sfotipy;
