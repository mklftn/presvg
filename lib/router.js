Router.configure({
	autoRender: false,
	autoStart: false
});

Router.route("/", {
	seo: {
		title: function() {
			return TAPi18n.__("plp");
		},
		meta: {
			description: function() {
				return TAPi18n.__("description");
			}
		},
	},
	action: function() {
		this.layout("layoutPublic");
	},
	onAfterAction: function() {
		if(document.body)
		{
			document.body.scrollIntoView();
		}
	}
});