Router.configure({
	autoRender: false,
	autoStart: false
});

Router.route("/", {
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