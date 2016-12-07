$(document).ready(function($) {
	$body = $('body');
	$menuTrigger = $('#menu__trigger');

	$menuTrigger.on('click', function() {
		if ($body.hasClass('menu__open')) {
			$body.removeClass('menu__open');
			$(this).removeClass('active__mod');
		} else {
			$body.addClass('menu__open');
			$(this).addClass('active__mod');
		}
	});

	//initialize swiper when document ready
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		pagination: '.swiper-pagination',
    paginationClickable: true,
		loop: true,
    autoplay: 7500,
    autoplayDisableOnInteraction: false
	})

	//developer funcitons
	getAllClasses('html', '.elements_list');
});
