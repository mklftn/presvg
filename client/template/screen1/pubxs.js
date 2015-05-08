Template.pubxs.events({
	'click [data-action=pres_pdcxs]': function(e, template) {
		close_pub_visible('pres_basexs');
		close_pub_visible('pres_bulletinxs');
		close_pub_visible('pres_evalxs');
		$( "#pres_pdcxs").show();
	},
	'click [data-action=pres_bulletinxs]': function(e, template) {
		close_pub_visible('pres_basexs');
		close_pub_visible('pres_pdcxs');
		close_pub_visible('pres_evalxs');
		$( "#pres_bulletinxs").show();
	},
	'click [data-action=pres_evalxs]': function(e, template) {
		close_pub_visible('pres_basexs');
		close_pub_visible('pres_pdcxs');
		close_pub_visible('pres_bulletinxs');
		$( "#pres_evalxs").show();
	}
});

function close_pub_visible (id){
	var element = "#" + id;
	if($(element).is(':visible')){
		$(element).hide();
	}	
}