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
	var decorator = document.getElementById('decorator');
	var input = document.getElementById('input');
	decorator.isInvalid = !input.validity.valid;
	if(input.validity.valid){
		Meteor.call('insertEmail', input.value);
	}
}

function checkMailXS () {
	var decorator = document.getElementById('decoratorXS');
	var input = document.getElementById('inputXS');
	decorator.isInvalid = !input.validity.valid;
	if(input.validity.valid){
		Meteor.call('insertEmail', input.value);
	}
}

