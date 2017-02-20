var jQuery = require('jquery');

;(function($){
	$('h1')
	.animate({
		 marginLeft: '2em'
	}, 1000)
	.hide('slow')
	.show('slow')
	.animate({
		 marginLeft: 0
	}, 1000)
})(jQuery)
