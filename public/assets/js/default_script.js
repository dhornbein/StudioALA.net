$(document).ready(function() {
   
	$('.fitBaseline').each(fitBaselineHieght);

	$('.fit').fitText();

	//test for cycle
	if(jQuery.isFunction(jQuery.fn.cycle) && $('#slideshow') ){
		$('#slideshow').cycle({ 
			fit: true,
			height: 400,
			fx:     'fade', 
			speed:  'fast', 
			timeout: 0, 
			next:   '.navRight', 
			prev:   '.navLeft',
			pager: '.navPager'
		}).show();
	}

});