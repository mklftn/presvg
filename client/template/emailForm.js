Template.emailForm.events({
	'click #buttonEmailSend': function () {
		checkMail(input[name='email'].value);
	},
	'keypress input[name="email"]': function (e, template) {
		if (e.which === 13) {
			e.preventDefault();
			checkMail(input[name='email'].value);
			return false;
		}
	}
});

Template.emailFormXS.events({
	'click #buttonEmailSendXS': function () {
		checkMail(input[name='emailXS'].value);
	},
	'keypress input[name="emailXS"]': function (e, template) {
		if (e.which === 13) {
			e.preventDefault();
			checkMail(input[name='emailXS'].value);
			return false;
		}
	}
});



function checkMail (email) {

	Meteor.call('insertEmail', email, function(error, result){
		if(error){
			Session.set("message", "error");
		}else{
			Session.set("message", TAPi18n.__("reponse_email"));
		}

		document.querySelector('#toast-email').show();
	});

	
}

