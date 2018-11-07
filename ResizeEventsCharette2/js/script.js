$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );
	
	});

	$(window).resize(() => {
		let width = $(window).width();
		let height = $(window).height();
	
		$(".resolution").text(`width: ${width},  height: ${height}`)
	})
});

