Template.layoutPublic.onRendered(function(){

	Template.body.events({
	'content-scroll': function(e,data, template) {
		if($(window).width() > 857){
			$('.appear_left').addClass("hidden").viewportChecker({
				classToAdd: 'visible animated bounceInLeft',
				offset: 100,
				repeat: true
			});
			$('.appear_right').addClass("hidden").viewportChecker({
				classToAdd: 'visible animated bounceInRight',
				offset: 100,
				repeat: true
			});
		}
		close_pub1_visible('pres_eval');
		close_pub1_visible('pres_pdc');
		close_pub1_visible('pres_bulletin');
		open_pub1_hidden('pres_base');
		close_pub1_visible('pres_evalxs');
		close_pub1_visible('pres_pdcxs');
		close_pub1_visible('pres_bulletinxs');
		open_pub1_hidden('pres_basexs');
	}
});

});



function close_pub1_visible (id){
	var element = "#" + id;
	if($(element).is(':visible')){
		$(element).hide();
	}	
}

function open_pub1_hidden (id){
	var element = "#" + id;
	if($(element).is(':hidden')){
		$(element).show();
	}	
}