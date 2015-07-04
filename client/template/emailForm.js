Template.emailForm.events({
	'click #buttonEmailSend': function (e,template) {
		checkMail(template.find("paper-input").value);
	},
	'keypress paper-input': function (e, template) {
		if (e.which === 13) {
			e.preventDefault();
			checkMail(template.find("paper-input").value);
			return false;
		}
	}
});

Template.emailFormXS.events({
	'click #buttonEmailSendXS': function (e,template) {
		checkMail(template.find("paper-input").value);
	},
	'keypress paper-input': function (e, template) {
		if (e.which === 13) {
			e.preventDefault();
			checkMail(template.find("paper-input").value);
			return false;
		}
	}
});



function checkMail (email) {

	Meteor.call('insertEmail', email, function(error, result){
		if(error){
			if(!email){
				Session.set("message", TAPi18n.__("utilisation_email"));
			} else{
				Session.set("message", TAPi18n.__("reponse_email_wrong"));
			}
		}else{
			Session.set("message", TAPi18n.__("reponse_email"));
		}

		document.querySelector('#toast-email').show();
	});

	
}

