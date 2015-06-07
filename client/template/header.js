Template.header.events({
	'click .titre_plp': function(e,template){
		document.querySelector('#toast-email').show();
		alert(Session.get('message'));
	}
});