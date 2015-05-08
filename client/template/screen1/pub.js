Template.pub.events({
	'click [data-action=pres_pdc]': function(e, template) {
		close_pub_visible('pres_base');
		close_pub_visible('pres_bulletin');
		close_pub_visible('pres_eval');
		$( "#pres_pdc").show();
	},
	'click [data-action=pres_bulletin]': function(e, template) {
		close_pub_visible('pres_base');
		close_pub_visible('pres_pdc');
		close_pub_visible('pres_eval');
		$( "#pres_bulletin").show();
	},
	'click [data-action=pres_eval]': function(e, template) {
		close_pub_visible('pres_base');
		close_pub_visible('pres_pdc');
		close_pub_visible('pres_bulletin');
		$( "#pres_eval").show();
	}
});

function close_pub_visible (id){
	var element = "#" + id;
	if($(element).is(':visible')){
		$(element).hide();
	}	
}