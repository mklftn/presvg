Template.emailForm.events({
	'click .email_send': function () {
		checkMail();
	},
	'keypress input': function (e, template) {
		if (e.which === 13) {
			checkMail();
		}
	}
});

Template.emailFormXS.events({
	'click .email_send': function () {
		checkMailXS()
	},
	'keypress inputXS': function (e, template) {
		if (e.which === 13) {
			checkMailXS();
		}
	}
});

function checkMail () {

	Meteor.call('insertEmail', input.value, function(error, result){
		if(error){
			Session.set("message", "error");
		}else{
			Session.set("message", TAPi18n.__("reponse_email"));
		}

		document.querySelector('#toast-email').show();
	});

	
}

function checkMailXS () {
	var decorator = document.getElementById('decoratorXS');
	var input = document.getElementById('inputXS');
	decorator.isInvalid = !input.validity.valid;
	if(input.validity.valid){
		Meteor.call('insertEmail', input.value);
	}
}

