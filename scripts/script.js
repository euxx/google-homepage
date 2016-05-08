$(document).ready(function(event) {

	$('.search-button input:last-child').hover(function(event) {
		$(this).attr("value", 'I\'m Feeling Great');
	});
	$('.search-button input:last-child').mouseleave(function(event) {
		$(this).attr("value", 'I\'m Feeling Lucky');
	});

});
