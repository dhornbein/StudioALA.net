$(document).ready(function() {

	$('.fit').fitText();
	$('a[href^=#]').smoothmove();

	$(document).foundation();

    $('.img-gallery').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery:{enabled:true}
	});

});

/*

	SmoothMove
	A simple page scrolling jQuery Plugin	
	@author Collin Olan

*/
(function( $ ){

	$.fn.smoothmove = function( options ) {

		var settings = {
			'speed': 300,
			'offset': 0,
			'target': null
		};

		if (this.data("target") !== undefined && settings.target !== null ) {
			settings.target = this.data("target");
		}

		return this.each(function() {
			if ( options ) { 
				$.extend( settings, options );
			}

			$(this).click(function(e) {
                var scrollTarget;
				if (settings.target !== null) {
					scrollTarget = settings.target;
				} else {
					scrollTarget = $(this).attr("href");
				}

				if ($(scrollTarget).length > 0) {
					var destination = $(scrollTarget).offset().top;
					$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - settings.offset}, settings.speed );
					e.preventDefault();
				} else {
					return;
				}

			});

		});

	};

})( jQuery );