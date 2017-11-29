	$('.tabs__item').on('click', function() {
	$('.tabs__item').removeClass('active');
	$(this).addClass('active');
	var tabNumber = $(this).attr('data-tab-number');
	$('.tabs-content__item').removeClass('active');
	$('.tabs-content__item[data-tab-number="' + tabNumber + '"]').addClass('active');
});