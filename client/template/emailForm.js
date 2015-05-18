Template.emailForm.events({
	'click .email_send': function () {
		var decorator = document.getElementById('decorator');
		var input = document.getElementById('input');
		decorator.isInvalid = !input.validity.valid;
		if(input.validity.valid){
			Meteor.call('insertEmail', input.value);
		}
	}
});

Template.emailFormXS.events({
	'click .email_send': function () {
		var decorator = document.getElementById('decoratorXS');
		var input = document.getElementById('inputXS');
		decorator.isInvalid = !input.validity.valid;
		if(input.validity.valid){
			Meteor.call('insertEmail', input.value);
		}
	}
});