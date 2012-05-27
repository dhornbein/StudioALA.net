$(window).load(function(){
	$('#mainSlideShow').cycle({ 
		fit: true,
		height: 400,
		fx:     'uncover',
		delay: 2000, 
		speed:  600, 
		timeout: 4000, 
		next:   '.navRight', 
		prev:   '.navLeft',
		random: 1
	}).show();
});