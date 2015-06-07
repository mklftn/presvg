Router.configure({
	autoRender: true,
	autoStart: true
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
		}
	},
	action: function() {
		this.render("layoutPublic");
	},
	onAfterAction: function() {
		if(document.body){
			document.body.scrollIntoView();
		}
	}
});

Router.route("/(.*)", {
	seo: {
		title: function() {
			return TAPi18n.__("plp");
		},
		meta: {
			description: function() {
				return TAPi18n.__("description");
			}
		}
	},
	action: function() {
		this.redirect("/");
	}
});