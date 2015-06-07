Template.flecheScroll.events({
	'click .fleche_click': function(e, template) {
		var el = document.getElementById(template.data.ancre);
		el.scrollIntoView({block: "start", behavior: "smooth"});
	}
		/*$('html, body').animate({
			scrollTop: $( $(template.data.ancre).offset().top
		}, 500);*/
});