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

var drew_json = $.getJSON('http://studioala.lcl/?/json/');

function fitBaselineHieght(){
	var targetCss = 'margin';
	var height = $(this).height();
	var baseline = 18;
	var desiredHeight = (Math.ceil(height / baseline)) * baseline;
	var padding = desiredHeight - height;

	$(this).css(targetCss + 'Bottom',padding);
}