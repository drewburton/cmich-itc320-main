$(document).ready(() => {
	$('#faq_rollovers h2').hover(
		function () {
			$(this).next('p').show();
		},
		function () {
			$(this).next('p').hide();
		}
	);
}); // end ready