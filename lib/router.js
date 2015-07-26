Router.configure({
	autoRender: true,
	autoStart: true
});


getUserLanguage = function () {
  // Put here the logic for determining the user language
  var language = window.navigator.userLanguage || window.navigator.language;
  // Pour tester en anglais, désactiver la ligne précédente et activer la suivante :
  //var language = 'en';

  if(language.indexOf("en")  !== -1){
  	language = "en"   
  }else {
    language = "fr" 
  }

  return language;
};

Router.route("/:lang?", {
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
	loadingTemplate: "loading",
	onBeforeAction: function(){
			if(this.params.lang){
				if(this.params.lang === "en" || this.params.lang === "fr"){
					TAPi18n.setLanguage(this.params.lang)
				}else {
					this.redirect("/");
					this.next()
				}
			}else {
					TAPi18n.setLanguage(getUserLanguage());				
			}

			this.next()

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
